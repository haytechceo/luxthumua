// Sends a customer lead from the website to TuMu, the shops' internal app.
// Contract (fixed, shared with the TuMu side): POST JSON, 200 { ok, code } or
// 4xx { ok: false, error }. Field names must not change.

export const LEAD_URL =
  process.env.NEXT_PUBLIC_TUMU_LEAD_URL ??
  'https://edcrleafhrvywhofpuyw.supabase.co/functions/v1/web-lead'

export const LEAD_TIMEOUT_MS = 10_000

export type LeadShop = 'sg' | 'hn'

export interface LeadInput {
  name: string
  /** Already normalised: 10 digits starting with 0. */
  phone: string
  device: string
  note: string
  shop: LeadShop | null
  /** Current pathname, so staff know which page the customer came from. */
  page: string
  /** Honeypot: hidden on the page, must stay empty. */
  website: string
}

export type LeadErrorCode =
  // from the server
  | 'INVALID_PHONE'
  | 'TOO_MANY'
  | 'SPAM'
  | 'INVALID'
  // from this client
  | 'TIMEOUT'
  | 'NETWORK'
  | 'SERVER'

const SERVER_ERRORS: readonly string[] = ['INVALID_PHONE', 'TOO_MANY', 'SPAM', 'INVALID']

export class LeadError extends Error {
  readonly code: LeadErrorCode

  constructor(code: LeadErrorCode) {
    super(`Lead not sent: ${code}`)
    this.name = 'LeadError'
    this.code = code
  }
}

const LIMITS = { name: 80, device: 120, note: 500, page: 200 } as const

/** "+84 328 488 888", "84328488888", "0328.488.888" -> "0328488888" */
export function normalizePhone(raw: string): string {
  const digits = raw.replace(/\D/g, '')
  if (digits.length === 11 && digits.startsWith('84')) return `0${digits.slice(2)}`
  return digits
}

/** Vietnamese mobile number: 10 digits, starts with 03, 05, 07, 08 or 09. */
export function isVietnamMobile(phone: string): boolean {
  return /^0[35789]\d{8}$/.test(phone)
}

interface LeadResponse {
  ok?: boolean
  code?: string
  error?: string
}

/** Posts the lead to TuMu. Resolves with the booking code or throws a LeadError. */
export async function sendLead(input: LeadInput): Promise<{ code: string }> {
  const body = {
    name: input.name.trim().slice(0, LIMITS.name),
    phone: input.phone,
    device: input.device.trim().slice(0, LIMITS.device),
    note: input.note.trim().slice(0, LIMITS.note),
    shop: input.shop,
    page: input.page.slice(0, LIMITS.page),
    website: input.website,
  }

  const controller = new AbortController()
  const timer = setTimeout(() => controller.abort(), LEAD_TIMEOUT_MS)
  try {
    const res = await fetch(LEAD_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
      signal: controller.signal,
    })
    const data = (await res.json().catch(() => null)) as LeadResponse | null
    if (controller.signal.aborted) throw new LeadError('TIMEOUT')
    if (res.ok && data?.ok === true && typeof data.code === 'string') {
      return { code: data.code }
    }
    if (data?.error && SERVER_ERRORS.includes(data.error)) {
      throw new LeadError(data.error as LeadErrorCode)
    }
    throw new LeadError('SERVER')
  } catch (err) {
    if (err instanceof LeadError) throw err
    throw new LeadError(controller.signal.aborted ? 'TIMEOUT' : 'NETWORK')
  } finally {
    clearTimeout(timer)
  }
}
