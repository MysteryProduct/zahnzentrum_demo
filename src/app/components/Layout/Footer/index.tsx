'use client'

import React, { FC, useEffect, useState } from 'react'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import Logo from '../Header/Logo'
import { FooterLinkType } from '@/app/types/footerlink'

const Footer: FC = () => {
  const [footerlink, SetFooterlink] = useState<FooterLinkType[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/data')
        if (!res.ok) throw new Error('Failed to fetch')
        const data = await res.json()
        SetFooterlink(data.FooterLinkData)
      } catch (error) {
        console.error('Error fetching services:', error)
      }
    }
    fetchData()
  }, [])

  return (
    <footer className='pt-8'>
      <div className='container'>
        <div className='grid grid-cols-1 sm:grid-cols-6 lg:gap-20 md:gap-24 sm:gap-12 gap-12 pb-10'>
          <div className='col-span-2'>
            <div className='flex gap-6 items-center' id="google_maps">
              <div className='w-full max-w-xs sm:max-w-sm lg:max-w-md'>
                <div className='overflow-hidden rounded'>
                  <iframe
                    src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2386.8757335045243!2d10.4125967!3d53.2559271!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b1ddc34742d01d%3A0x34c88f2b602a1722!2sMarie-Curie-Stra%C3%9Fe%205%2C%2021337%20L%C3%BCneburg%2C%20Germany!5e0!3m2!1sen!2sth!4v1765986281614!5m2!1sen!2sth'
                    width='100%'
                    height='350'
                    loading='lazy'
                    referrerPolicy='no-referrer-when-downgrade'
                    title='Zahnzentrum am Kunst-Karree Location'
                    className='w-full h-60 sm:h-50 md:h-60 rounded'
                  />
                </div>

                <a
                  href='https://www.google.de/maps/place/Marie-Curie-Stra%C3%9Fe+5,+21337+L%C3%BCneburg,+Germany/@53.2559271,10.4125967,17z/data=!4m6!3m5!1s0x47b1ddc34742d01d:0x34c88f2b602a1722!8m2!3d53.2559271!4d10.4147907!16s%2Fg%2F11bw3hfwxg?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-sm text-black/60 hover:text-primary mt-2 inline-block'
                  aria-label='Open location in Google Maps'>
                  Open in Google Maps
                </a>
              </div>
            </div>
          </div>
          <div className='col-span-2 sm:col-span-6 md:col-span-2'>
            <div className='flex flex-col gap-5'>
              <div className='flex'>
                <Icon
                  icon='solar:point-on-map-perspective-bold'
                  className='text-primary text-3xl lg:text-2xl inline-block me-2'
                />
                <p className='text-black/60 text-base'>
                  Zahnzentrum am Kunst-Karree <br></br>Marie-Curie-Straße 5 21337 Lüneburg
                </p>
              </div>
              <a href='tel:04131 400640'>
                <div className='flex'>
                  <Icon
                    icon='solar:phone-bold'
                    className='text-primary text-3xl lg:text-2xl inline-block me-2'
                  />
                  <p className='text-black/60 hover:text-black text-base'>
                    04131 400640
                  </p>
                </div>
              </a>
              <Link href='/'>
                <div className='flex'>
                  <Icon
                    icon='solar:mailbox-bold'
                    className='text-primary text-3xl lg:text-2xl inline-block me-2'
                  />
                  <p className='text-black/60 hover:text-black text-base'>
                    info@zahnzentrum-am-kunstkarree.de
                  </p>
                </div>
              </Link>
            </div>
          </div>

          <div className='col-span-2 sm:col-span-6 md:col-span-2'>
            
              <p className='text-base text-black/60' >Öffnungszeiten</p>
              <table className='text-base text-black/60 w-full mt-2 mb-4'>
                <tbody>
                  <tr className=''>
                    <td className='pr-4'>Mo. und Mi.</td>
                    <td>8 bis 18 Uhr</td>
                  </tr>
                  <tr className=''>
                    <td className='pr-4'>Di. und Do.</td>
                    <td>8 bis 20 Uhr</td>
                  </tr>
                  <tr className=''>
                    <td className='pr-4'>Fr.</td>
                    <td>8 bis 16 Uhr</td>
                  </tr>
                </tbody>
              </table>
              <p className='text-base text-black/60'>Außerhalb dieser Zeiten nur nach persönlicher Absprache</p>
            
          </div>
        </div>
        <div className='border-t border-grey/15 py-5 flex flex-col sm:flex-row justify-between sm:items-center gap-5'>
          <p className='text-sm text-black/70'>
            © 2025 Zahnzentrum am Kunst-Karree
            {/* <Link
              href='https://getnextjstemplates.com/'
              className='hover:text-primary hover:underline'>
              GetNextjsTemplates
            </Link> */}
          </p>

          <div className=''>
            {/* <Link
              href='#'
              className='text-sm text-black/70 px-5 border-r border-grey/15 hover:text-primary hover:underline'>
              Privacy policy
            </Link>
            <Link
              href='#'
              className='text-sm text-black/70 px-5 hover:text-primary hover:underline'>
              Terms & conditions
            </Link> */}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
