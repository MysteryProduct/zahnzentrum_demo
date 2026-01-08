'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { pageview } from '@/lib/gtag'
import { hasAnalyticsConsent } from '@/lib/consent'

export default function GoogleAnalytics() {
  const pathname = usePathname()

  useEffect(() => {
    if (!pathname) return
    if (!hasAnalyticsConsent()) return
    pageview(pathname)
  }, [pathname])

  return null
}
