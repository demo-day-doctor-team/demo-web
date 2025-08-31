'use client'

export const useAnalytics = () => {
  const trackEvent = (action: string, category: string, label?: string, value?: number) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value,
      })
    }
  }

  const trackPageView = (url: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', process.env.NEXT_PUBLIC_GA_ID!, {
        page_path: url,
      })
    }
  }

  const trackFormSubmission = (formName: string) => {
    trackEvent('form_submit', 'engagement', formName)
  }

  const trackButtonClick = (buttonName: string) => {
    trackEvent('button_click', 'engagement', buttonName)
  }

  const trackScroll = (section: string) => {
    trackEvent('scroll', 'engagement', section)
  }

  return {
    trackEvent,
    trackPageView,
    trackFormSubmission,
    trackButtonClick,
    trackScroll,
  }
}

// TypeScript 타입 정의
declare global {
  interface Window {
    gtag: (...args: any[]) => void
  }
}
