'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { ImageType } from '@/app/types/image'
import Slider from 'react-slick'
import ChiefDetailSkeleton from '../../Skeleton/ChiefDetail'
import Link from 'next/link'

const Hero = () => {
  const [imageDetail, setimageDetail] = useState<ImageType[]>([])
  const [loading, setLoading] = useState(true)

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
      <div className='container xl:pt-7 pt-16'>
        <Slider {...settings}>
          {loading
            ? Array.from({ length: 3 }).map((_, i) => (
              <ChiefDetailSkeleton key={i} />
            ))
            : imageDetail.map((items, i) => (
              <div key={i}>
                <div className='m-3 p-10 text-center backdrop-blur-md bg-white/50 rounded-3xl'>
                  <div className=''>
                    <Image
                      src={items.imgSrc}
                      alt='gaby'
                      width={375}
                      height={200}
                      className='inline-block m-auto w-auto'
                    />
                  </div>
                </div>
              </div>
            ))}
        </Slider>
        {/* <div className='grid grid-cols-1 lg:grid-cols-12 items-center'>
          <div className='lg:col-span-6'>
            <h3 className='font-semibold mb-5 text-black lg:text-start text-center sm:leading-20 leading-16'>
              Wir treten jeden Tag an, um Menschen zu helfen
            </h3>
            <p className='text-black/55 text-lg font-normal mb-10 lg:text-start text-center'>
              Indulge in an elegant culinary journey, crafted with locally
              sourced ingredients and world-class flavors — served fresh, every
              day.
            </p>
            <div className='flex flex-col sm:flex-row gap-5 items-center justify-center lg:justify-start'>
              <Link href='/#menu'>
                <button className='text-xl font-medium rounded-full text-white py-3 px-8 bg-primary hover:text-primary border border-primary hover:bg-transparent hover:cursor-pointer transition ease-in-out duration-300'>
                  View Menu
                </button>
              </Link>
              <Link href='/#reserve'>
                <button className='text-xl border border-primary rounded-full font-medium py-3 px-8 text-primary hover:text-white hover:bg-primary hover:cursor-pointer transition ease-in-out duration-300'>
                  Reserve a Table
                </button>
              </Link>
            </div>
          </div>
          <div className='lg:col-span-6 flex justify-center relative'>
            <div className='flex bg-white p-2 gap-5 items-center bottom-10 left-10 rounded-xl absolute'>
              <Image
                src={'/images/hero/pizza.webp'}
                alt='pizza-image'
                width={68}
                height={68}
              />
              <p className='text-lg font-normal'>
                Over 50+ <br /> signature dishes
              </p>
            </div>
            <Image
              src='/images/hero/banner-image.webp'
              alt='nothing'
              width={1000}
              height={805}
            />
          </div>
        </div> */}
      </div>
    </section>
  )
}

export default Hero
