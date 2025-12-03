'use client'
import Image from 'next/image'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import { useEffect, useState } from 'react'
import { FeaturesType } from '@/app/types/features'
import FeaturesSkeleton from '../../Skeleton/Features'

const Features = () => {
  const [features, setFeatures] = useState<FeaturesType[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/data')
        if (!res.ok) throw new Error('Failed to fetch')
        const data = await res.json()
        setFeatures(data.FeaturesData)
      } catch (error) {
        console.error('Error fetching services:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  return (
    <section id='features'>
      <div className='container'>
        <div className='text-center mb-14'>
          <h2 className='font-semibold lg:max-w-60% mx-auto mt-3'>
            Was uns unterscheidet
          </h2>
        </div>
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-y-28 gap-x-6 mt-20'>
          {loading
            ? Array.from({ length: 4 }).map((_, i) => (
                <FeaturesSkeleton key={i} />
              ))
            : features.map((items, i) => (
                <div
                  key={i}
                  className='p-8 relative rounded-3xl bg-linear-to-b from-primary/10 to-white shadow-md hover:scale-105 transition duration-300 ease-in-out hover:cursor-pointer'>
                  <div className='flex justify-center '>
                      <Image
                      src={items.imgSrc}
                      alt={items.imgSrc}
                      width={100}
                      height={10}
                    />
                  </div>
                  
                  <p className='text-lg text-black font-semibold text-center mt-5'>
                    {items.heading}
                  </p>
                  <p className='text-base font-normal text-black/50 text-center mt-2 leading-6'>
                    {items.subheading}
                  </p>
                </div>
              ))}
        </div>
      </div>
    </section>
  )
}

export default Features
