// Google Analytics event tracking utilities

declare global {
  interface Window {
    gtag: (
      command: string,
      targetId: string,
      config?: Record<string, any>
    ) => void
  }
}

export const GA_TRACKING_ID = 'G-9FY6RLJ9YB'

// Event types
export enum GAEventCategory {
  CONTACT = 'contact',
  ENGAGEMENT = 'engagement',
  NAVIGATION = 'navigation',
  SERVICE = 'service',
}

export enum GAEventAction {
  CLICK = 'click',
  SUBMIT = 'submit',
  CALL = 'call',
  MESSAGE = 'message',
  VIEW = 'view',
}

// Generic event tracking
export const trackEvent = (
  action: string,
  category: string,
  label?: string,
  value?: number
) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    })
  }
}

// Specific event tracking functions
export const trackFormSubmit = (formName: string) => {
  trackEvent(
    GAEventAction.SUBMIT,
    GAEventCategory.CONTACT,
    formName
  )
}

export const trackPhoneClick = (phoneNumber: string) => {
  trackEvent(
    GAEventAction.CALL,
    GAEventCategory.CONTACT,
    phoneNumber
  )
}

export const trackZaloClick = () => {
  trackEvent(
    GAEventAction.MESSAGE,
    GAEventCategory.CONTACT,
    'Zalo'
  )
}

export const trackMessengerClick = () => {
  trackEvent(
    GAEventAction.MESSAGE,
    GAEventCategory.CONTACT,
    'Messenger'
  )
}

export const trackServiceClick = (serviceName: string) => {
  trackEvent(
    GAEventAction.CLICK,
    GAEventCategory.SERVICE,
    serviceName
  )
}

export const trackBannerClick = (bannerIndex: number) => {
  trackEvent(
    GAEventAction.CLICK,
    GAEventCategory.ENGAGEMENT,
    `Banner ${bannerIndex + 1}`
  )
}

export const trackNavigationClick = (destination: string) => {
  trackEvent(
    GAEventAction.CLICK,
    GAEventCategory.NAVIGATION,
    destination
  )
}

export const trackFloatingButtonClick = (buttonType: 'phone' | 'zalo' | 'messenger') => {
  trackEvent(
    GAEventAction.CLICK,
    GAEventCategory.CONTACT,
    `Floating ${buttonType}`
  )
}

export const trackSocialClick = (platform: string) => {
  trackEvent(
    GAEventAction.CLICK,
    GAEventCategory.ENGAGEMENT,
    `Social ${platform}`
  )
}
