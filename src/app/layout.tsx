import { Poppins } from 'next/font/google'
import type { Metadata } from 'next'
import './globals.css'
import Script from 'next/script'
import Header from '@/app/components/Layout/Header'
import Footer from '@/app/components/Layout/Footer'
import ScrollToTop from '@/app/components/ScrollToTop'
import GoogleAnalytics from '@/app/components/Analytics/GoogleAnalytics'
const font = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={`${font.className}`}>
        <Header />
        {children}
        <Footer />
        {/* <ScrollToTop /> */}

        {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
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
                  gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}', { page_path: window.location.pathname });
                `,
              }}
            />
          </>
        )}

        <GoogleAnalytics />
      </body>
    </html>
  )
}

export const metadata: Metadata = {
  metadataBase: new URL('http://localhost:3000'),
  title: {
    default: 'Zahnzentrum Demo',
    template: '%s | Zahnzentrum Demo',
  },
  description: 'Zahnzentrum demo site — modern clinic demo with components and documentation.',
  keywords: ['zahnzentrum', 'dental', 'clinic', 'demo', 'documentation'],
  authors: [
    {
      name: 'MysteryProduct',
    },
  ],
  openGraph: {
    title: 'Zahnzentrum Demo',
    description: 'Zahnzentrum demo site — modern clinic demo with components and documentation.',
    url: 'https://example.com',
    siteName: 'Zahnzentrum Demo',
    images: [
      {
        url: '/images/Logo/Logo.png',
        width: 1200,
        height: 630,
        alt: 'Zahnzentrum Demo',
      },
    ],
    locale: 'en-US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zahnzentrum Demo',
    description: 'Zahnzentrum demo site — modern clinic demo with components and documentation.',
  },
}
