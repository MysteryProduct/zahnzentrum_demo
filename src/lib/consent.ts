const STORAGE_KEY = 'cookie_consent'

type ConsentShape = {
  analytics?: boolean
}

export const getConsent = (): ConsentShape => {
  if (typeof window === 'undefined') return {}
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : {}
  } catch (e) {
    return {}
  }
}

export const setConsent = (consent: ConsentShape) => {
  if (typeof window === 'undefined') return
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(consent))
  } catch (e) {
    // ignore
  }
}

export const hasAnalyticsConsent = () => {
  const c = getConsent()
  return Boolean(c.analytics)
}
