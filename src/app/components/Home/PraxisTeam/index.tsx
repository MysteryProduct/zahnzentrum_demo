'use client'
import Slider from 'react-slick'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { PraxisTeamType } from '@/app/types/praxisteam'
import PraxisTeamModal from '../../Modal/Praxis-Team'
import PraxisDetailSkeleton from '../../Skeleton/PraxisDetail'
const PraxisTeam = () => {
  const [praxisTeamDetail, setPraxisTeamDetail] = useState<PraxisTeamType[]>([])
  const [loading, setLoading] = useState(true)
  const [open, setOpen] = useState(false)
  const [selectedPraxis, setSelectedPraxis] = useState<PraxisTeamType | null>(null)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/data')
        if (!res.ok) throw new Error('Failed to fetch')
        const data = await res.json()
        setPraxisTeamDetail(data.PraxisTeamData)
      } catch (error) {
        console.error('Error fetching services:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])
  function SampleArrow(data : any) {
    const { className, style, onClick } = data;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "black" }}
        onClick={onClick}
      />
    );
  }
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    speed: 500,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
        },
      },
      
    ],
    nextArrow: <SampleArrow />,
    prevArrow: <SampleArrow />
  }
  function onClickImage(data: PraxisTeamType) {
    setOpen(true)
    setSelectedPraxis(data)
  }
  return (
    <section className='bg-primary/10' id="praxisteam">
      <div className='container'>
        <div className='text-center'>
          <p className='text-primary text-lg font-bold mb-3 tracking-widest uppercase'>
            Praxis Team
          </p>
          <p className='font-semibold text-xl'>Unser Team und wir sind gemeinsam für Sie und Ihre Familie da</p>
        </div>
        <Slider {...settings}>
          {loading
            ? Array.from({ length: 4 }).map((_, i) => (
              <PraxisDetailSkeleton key={i} />
            ))
            : praxisTeamDetail.map((items, i) => (
              <div key={i}>
                <div className='m-3 my-10 p-10 text-center backdrop-blur-md bg-white/50 rounded-3xl' onClick={() => onClickImage(items)}>
                  <div className='relative'>
                    <Image
                      src={items.imgSrc}
                      alt='gaby'
                      width={362}
                      height={262}
                      className='inline-block m-auto w-auto'
                    />
                  </div>
                  <div className='mt-10'>
                    <h3 className='font-semibold text-black md:text-lg sm:text-lg lg:text-2xl' >
                      {items.name}
                    </h3>
                    <h4 className='lg:text-lg md:text-normal sm:text-normal font-normal text-black/50 opacity-50'>
                      {items.profession}
                    </h4>
                  </div>
                </div>
              </div>
            ))}
        </Slider>
      </div>
      {open && selectedPraxis ?
        <PraxisTeamModal
          openProp={open}
          praxisdata={selectedPraxis}
          onClose={setOpen}
        />:
        null
      } 
    </section>
  )
}

export default PraxisTeam
