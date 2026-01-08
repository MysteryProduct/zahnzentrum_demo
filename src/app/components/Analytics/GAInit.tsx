'use client'

import { useEffect, useState } from 'react'
import Script from 'next/script'
import { hasAnalyticsConsent } from '@/lib/consent'
import { pageview } from '@/lib/gtag'
import { usePathname } from 'next/navigation'

export default function GAInit() {
  const [consent, setConsent] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setConsent(hasAnalyticsConsent())
  }, [])

  useEffect(() => {
    // re-check in case user just granted
    setConsent(hasAnalyticsConsent())
  }, [pathname])

  useEffect(() => {
    if (consent) {
      // send initial pageview when consent turns true
      pageview(window.location.pathname)
    }
  }, [consent, pathname])

  if (!consent) return null

  const id = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID
  if (!id) return null

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${id}`}
        strategy="afterInteractive"
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);} 
            gtag('js', new Date());
            gtag('config', '${id}', { page_path: window.location.pathname });
          `,
        }}
      />
    </>
  )
}
