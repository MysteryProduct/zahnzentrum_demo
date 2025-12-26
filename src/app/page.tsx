import React from 'react'
import Hero from '@/app/components/Home/Hero'
import Features from '@/app/components/Home/Features'
import About from '@/app/components/Home/About'
import PraxisTeam from '@/app/components/Home/PraxisTeam'
import Patient from '@/app/components/Home/Patient'
import { Metadata } from 'next'
import ContactForm from './components/Contact/Form'
import MeisterLabor from '@/app/components/Home/MeisterLabor'
export const metadata: Metadata = {
  title: 'Zahnzentrum am Kunst-Karree',
  description:
    'Zahnmedizin in Lüneburg — Oralchirurgie, Implantologie, Prophylaxe. Willkommen im Zahnzentrum am Kunst-Karree.',
  keywords: ['Zahnzentrum', 'Zahnmedizin', 'Oralchirurgie', 'Implantologie', 'Lüneburg'],
  alternates: {
    canonical: process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Zahnzentrum am Kunst-Karree',
    description:
      'Zahnmedizin in Lüneburg — Oralchirurgie, Implantologie, Prophylaxe. Willkommen im Zahnzentrum am Kunst-Karree.',
    url: process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000',
    locale: 'de-DE',
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/images/hero/img-hero2.png`,
        alt: 'Zahnzentrum Hero',
        width: 1200,
        height: 628,
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zahnzentrum am Kunst-Karree',
    description:
      'Zahnmedizin in Lüneburg — Oralchirurgie & Implantologie. Erfahren Sie mehr im Zahnzentrum am Kunst-Karree.',
  },
}

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <About />
      <PraxisTeam />
      <Patient />
      <MeisterLabor />
      <ContactForm />
    </main>
  )
}
