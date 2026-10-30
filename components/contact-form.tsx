"use client"

import type React from "react"

import { useRef, useState } from "react"
import { CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { siteConfig } from "@/data/site"
import { cn } from "@/lib/utils"
import { trackFormSubmit, trackGenerateLead } from "@/lib/analytics"
import {
  LeadError,
  isVietnamMobile,
  normalizePhone,
  sendLead,
  type LeadErrorCode,
  type LeadShop,
} from "@/lib/lead"

const SHOPS: { value: LeadShop; label: string }[] = [
  { value: "sg", label: "Sài Gòn" },
  { value: "hn", label: "Hà Nội" },
]

// Plain words, one line each; shown right under the send button.
const ERROR_TEXT: Record<LeadErrorCode, string> = {
  INVALID_PHONE: "Số điện thoại chưa đúng. Nhập đủ 10 số, bắt đầu bằng 0.",
  TOO_MANY: "Bạn gửi quá nhiều lần. Vui lòng thử lại sau ít phút.",
  SPAM: "Thông tin chưa hợp lệ nên chưa gửi được. Bạn kiểm tra lại giúp.",
  INVALID: "Thông tin chưa hợp lệ nên chưa gửi được. Bạn kiểm tra lại giúp.",
  TIMEOUT: "Gửi lâu quá, chưa nhận được phản hồi. Bạn thử lại nhé.",
  NETWORK: "Mất mạng, chưa gửi được. Bạn kiểm tra kết nối rồi thử lại.",
  SERVER: "Hệ thống đang bận, chưa gửi được. Bạn thử lại sau nhé.",
}

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle")
  const [error, setError] = useState<LeadErrorCode | null>(null)
  const [shop, setShop] = useState<LeadShop | null>(null)
  const [code, setCode] = useState("")
  const phoneRef = useRef<HTMLInputElement>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (status === "sending") return

    const formData = new FormData(e.currentTarget)
    const read = (key: string) => String(formData.get(key) ?? "")
    const phone = normalizePhone(read("phone"))

    if (!isVietnamMobile(phone)) {
      setError("INVALID_PHONE")
      phoneRef.current?.focus()
      return
    }

    setError(null)
    setStatus("sending")
    const page = window.location.pathname
    try {
      const result = await sendLead({
        name: read("name"),
        phone,
        device: read("device"),
        note: read("note"),
        shop,
        page,
        website: read("website"),
      })
      setCode(result.code)
      setStatus("sent")
      trackFormSubmit(`Contact Form - ${read("device").trim() || "Not specified"}`)
      trackGenerateLead({ shop, page })
    } catch (err) {
      // The typed values stay in the inputs; only the message under the button changes.
      setError(err instanceof LeadError ? err.code : "SERVER")
      setStatus("idle")
      if (err instanceof LeadError && err.code === "INVALID_PHONE") phoneRef.current?.focus()
    }
  }

  if (status === "sent") {
    return (
      <div role="status" className="rounded-lg bg-green-50 p-6 text-center space-y-2">
        <CheckCircle2 className="mx-auto h-10 w-10 text-green-700" aria-hidden="true" />
        <p className="text-lg font-semibold text-foreground">Đã nhận thông tin của bạn</p>
        <p className="text-sm text-muted-foreground">Mã hẹn của bạn (đọc cho nhân viên khi cần):</p>
        <p className="text-3xl font-bold tracking-widest text-green-700">{code}</p>
        <p className="pt-2 text-foreground">Nhân viên sẽ gọi lại cho bạn trong 15 phút.</p>
        <Button
          type="button"
          variant="link"
          className="text-green-700"
          onClick={() => {
            setCode("")
            setShop(null)
            setStatus("idle")
          }}
        >
          Gửi thông tin khác
        </Button>
      </div>
    )
  }

  const isSubmitting = status === "sending"
  const phoneInvalid = error === "INVALID_PHONE"

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Họ và tên *</Label>
          <Input id="name" name="name" placeholder="Nguyễn Văn A" autoComplete="name" maxLength={80} required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Số điện thoại *</Label>
          <Input
            ref={phoneRef}
            id="phone"
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            maxLength={20}
            placeholder={siteConfig.phone}
            aria-invalid={phoneInvalid || undefined}
            aria-describedby={phoneInvalid ? "contact-form-error" : undefined}
            onChange={() => phoneInvalid && setError(null)}
            required
          />
        </div>
      </div>
      <div className="space-y-2">
        <Label id="shop-label">Bạn ở khu vực nào?</Label>
        <div role="group" aria-labelledby="shop-label" className="grid grid-cols-2 gap-3">
          {SHOPS.map((item) => {
            const selected = shop === item.value
            return (
              <button
                key={item.value}
                type="button"
                aria-pressed={selected}
                onClick={() => setShop(selected ? null : item.value)}
                className={cn(
                  "h-11 rounded-md border text-base font-medium transition-colors",
                  "focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50",
                  selected
                    ? "border-green-700 bg-green-700 text-white"
                    : "border-input bg-background text-foreground hover:bg-green-50",
                )}
              >
                {item.label}
              </button>
            )
          })}
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="device">Thiết bị cần bán</Label>
        <Input id="device" name="device" placeholder="VD: iPhone 14 Pro 256GB" maxLength={120} />
      </div>
      <div className="space-y-2">
        <Label htmlFor="note">Tình trạng máy</Label>
        <Textarea
          id="note"
          name="note"
          placeholder="Mô tả tình trạng máy: còn mới, có trầy xước, màn hình vỡ..."
          rows={4}
          maxLength={500}
        />
      </div>
      {/* Honeypot: people never see this field; bots that fill it are rejected by the server. */}
      <div className="sr-only" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" defaultValue="" />
      </div>
      <div className="space-y-2">
        <Button type="submit" disabled={isSubmitting} className="w-full bg-green-700 hover:bg-green-800 text-white">
          {isSubmitting ? "Đang gửi..." : "Gửi thông tin"}
        </Button>
        {error && (
          <p id="contact-form-error" role="alert" className="text-sm font-medium text-red-600">
            {ERROR_TEXT[error]}
          </p>
        )}
      </div>
    </form>
  )
}
