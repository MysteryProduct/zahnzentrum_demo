import { Poppins } from 'next/font/google'
import type { Metadata } from 'next'
import './globals.css'
import Header from '@/app/components/Layout/Header'
import Footer from '@/app/components/Layout/Footer'
import ScrollToTop from '@/app/components/ScrollToTop'
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
        <ScrollToTop />
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
