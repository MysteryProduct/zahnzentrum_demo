import React from 'react'
import Hero from '@/app/components/Home/Hero'
import Features from '@/app/components/Home/Features'
import Gallery from '@/app/components/Home/Gallery'
import Newsletter from '@/app/components/Home/Newsletter'
import About from '@/app/components/Home/About'
import PraxisTeam from '@/app/components/Home/PraxisTeam'
import { Metadata } from 'next'
import ContactForm from './components/Contact/Form'

export const metadata: Metadata = {
  title: 'Zahnzentrum am Kunst-Karree',
  description:
    'Zahnmedizin in Lüneburg — Oralchirurgie, Implantologie, Prophylaxe. Willkommen im Zahnzentrum am Kunst-Karree.',
  keywords: ['Zahnzentrum', 'Zahnmedizin', 'Oralchirurgie', 'Implantologie', 'Lüneburg'],
  openGraph: {
    title: 'Zahnzentrum am Kunst-Karree',
    description:
      'Zahnmedizin in Lüneburg — Oralchirurgie, Implantologie, Prophylaxe. Willkommen im Zahnzentrum am Kunst-Karree.',
    url: 'https://example.com',
    images: [
      {
        url: '/images/hero/img-hero2.png',
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
      <Gallery />
      <ContactForm />
      <Newsletter />
    </main>
  )
}
