'use client'

import { useEffect, useState } from 'react'
import { getConsent, setConsent, hasAnalyticsConsent } from '@/lib/consent'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)
  const [analytics, setAnalytics] = useState<boolean | undefined>(undefined)

  useEffect(() => {
    const c = getConsent()
    if (c && typeof c.analytics !== 'undefined') {
      setAnalytics(Boolean(c.analytics))
      setVisible(false)
    } else {
      setVisible(true)
    }
  }, [])

  const acceptAll = () => {
    setConsent({ analytics: true })
    setAnalytics(true)
    setVisible(false)
  }

  const rejectNonEssential = () => {
    setConsent({ analytics: false })
    setAnalytics(false)
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div style={{
      position: 'fixed',
      bottom: 16,
      left: 16,
      right: 16,
      background: 'white',
      padding: '16px',
      borderRadius: 8,
      boxShadow: '0 6px 18px rgba(0,0,0,0.12)',
      zIndex: 9999,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 12,
    }}>
      <div style={{flex: 1}}>
        <strong>We use cookies</strong>
        <div style={{marginTop: 6}}>We use analytics cookies to improve the site. You can accept or reject non-essential cookies.</div>
      </div>

      <div style={{display: 'flex', gap: 8}}>
        <button onClick={rejectNonEssential} style={{padding: '8px 12px'}}>Reject</button>
        <button onClick={acceptAll} style={{padding: '8px 12px', background: '#111', color: 'white', borderRadius: 6}}>Accept</button>
      </div>
    </div>
  )
}
