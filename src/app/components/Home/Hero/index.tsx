'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { ImageType } from '@/app/types/image'
import Slider from 'react-slick'

import PraxisKonzept from '../../Modal/Praxis-Konzept'
import PraxisPhilosophie from '../../Modal/Praxis-Philosophie'
import PraxisDetailSkeleton from '../../Skeleton/PraxisDetail'
const Hero = () => {
  const [imageDetail, setimageDetail] = useState<ImageType[]>([])
  const [loading, setLoading] = useState(true)
  const [open, setOpen] = useState(false)
  const [philosophieOpen, setPhilosophieOpen] = useState(false)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/data')
        if (!res.ok) throw new Error('Failed to fetch')
        const data = await res.json()
        setimageDetail(data.imageHomeData)
      } catch (error) {
        console.error('Error fetching services:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: 'linear',
    pauseOnHover: true
  }
  return (
    <section id='home-section' className='bg-gray-50'>
      <div className='container xl:pt-7 pt-10'>
        <Slider {...settings}>
          {loading
            ? Array.from({ length: 3 }).map((_, i) => (
              <PraxisDetailSkeleton key={i} />
            ))
            : imageDetail.map((items, i) => (
              <div key={i}>
                <div className='m-3 p-10 text-center backdrop-blur-md bg-white/50 rounded-3xl'>
                  <div className=''>
                    <Image
                      src={items.imgSrc}
                      alt='gaby'
                      width={475}
                      height={200}
                      className='inline-block m-auto w-auto sm:w-full'
                      priority={items.imgSrc === '/images/Home/Startseitenheader-Team.jpg'}
                    />
                  </div>
                </div>
              </div>
            ))}
        </Slider>
      </div>
      <div className='container xl:pt-7 pt-16 mt-10'>
        <div className='grid grid-cols-1 lg:grid-cols-12 items-center'>
          <div className='lg:col-span-6 p-3'>
            <p className='font-semibold text-2xl text-black lg:text-start text-center sm:leading-10 leading-8' style={{ color: '#904129' }}>
              Zahnzentrum am Kunst-Karree
            </p>
            <p className='font-medium text-xl mb-5 text-black lg:text-start text-center sm:leading-6 leading-6' >
              Zahnmedizin in Lüneburg
            </p>
            <p className='text-black/55 text-base font-normal mb-4 text-start'>
              Liebe Patientinnen, liebe Patienten,
            </p>
            <p className='text-black/55 text-base font-normal mb-10 text-start'>
              wir bieten Ihnen das gesamte Spektrum der Zahnmedizin und fokussieren uns dabei insbesondere auf die
              <span style={{ color: '#904129' }}> Oralchirurgie </span> und die
              <span style={{ color: '#904129' }}> Implantologie</span>.
              Dies ist der Grund, warum viele zahnärztliche Kollegen ihre Patienten für diese Behandlungen zu uns überweisen.
              Wir leisten damit unseren Beitrag,
              um in Lüneburg gemeinsam mit anderen Zahnärzten eine hohe medizinische Versorgung auf dem Lande zu gewährleisten.
            </p>
            <p className='text-black/55 text-base font-normal mb-10 text-start'>
              Trotz des oralchirurgisch-implantologischen Schwerpunkts steht für uns die Mundgesundheit mit dem Erhalt der Zähne an erster Stelle.
              Unser Behandlungsspektrum umfasst deshalb auch die
              <span style={{ color: '#904129' }}> Prophylaxe</span>, die
              <span style={{ color: '#904129' }}> konservierende</span>  und die
              <span style={{ color: '#904129' }}> ästhetische Zahnmedizin</span>.
              Zudem haben wir ein
              <span style={{ color: '#904129' }}> zahntechnisches Meister-Labor </span> in unserer Praxis integriert.
            </p>
            <p className='text-black/55 text-base font-normal mb-10 text-start'>
              Herzlich willkommen im Zahnzentrum am Kunst-Karree,
            </p>
            <div className='flex flex-col sm:flex-row gap-5 items-center justify-center lg:justify-start'>
              <button onClick={() => setOpen(true)} className='text-sm font-medium rounded-full text-white py-3 px-8 bg-primary hover:text-primary border border-primary hover:bg-transparent hover:cursor-pointer transition ease-in-out duration-300'>
                Praxis-Konzept
              </button>

              <button onClick={() => setPhilosophieOpen(true)} className='text-sm border border-primary rounded-full font-medium py-3 px-8 text-primary hover:text-white hover:bg-primary hover:cursor-pointer transition ease-in-out duration-300'>
                Praxis-Philosophie
              </button>

            </div>
          </div>
          <div className='lg:col-span-6 flex justify-center-safe relative'>
            <div className='flex p-2 gap-5 items-center bottom-10 left-10 rounded-xl absolute'>
              <Image
                src={'/images/hero/Unterschrift.svg'}
                alt='nothing'
                width={170}
                height={120}
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
            <Image
              src='/images/hero/img-hero2.png'
              alt='nothing'
              width={1000}
              height={1205}
              className='lg:w-full sm:w-2/5 h-auto'
            />
          </div>
        </div>
      </div>
      {open ?
        <PraxisKonzept openProp={open} onClose={setOpen} />
        :
        null
      }
      {philosophieOpen ?
        <PraxisPhilosophie openProp={philosophieOpen} onClose={setPhilosophieOpen} />
        :
        null
      }
    </section>
  )
}

export default Hero
