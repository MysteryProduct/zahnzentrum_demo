'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export const PraxisNavigation = () => {
  const [navItem, setNavItem] = useState('vorsorge')

  function getNavItem(item: string) {
    setNavItem(item)
  }

  useEffect(() => {
    console.log(navItem)
  }, [navItem])

  const PraxisNav = [
    {
      id: 1,
      navItem: 'Vorsorge',
      hash: 'vorsorge',
    },
    {
      id: 2,
      navItem: 'Ästhetische',
      hash: 'aesthetik',
    },
    {
      id: 3,
      navItem: 'Zahnersatz',
      hash: 'zahnersatz',
    },
    {
      id: 4,
      navItem: 'Zahnerhalt',
      hash: 'zahnerhalt',
    },
    {
      id: 5,
      navItem: 'Oralchirurgie',
      hash: 'oralchirurgie',
    },
    {
      id: 6,
      navItem: 'Implantologie',
      hash: 'implantologie',
    },
  ]

  return (
    <div className='flex flex-col gap-0.5 mt-4 items-start fixed pe-4'>
      {PraxisNav.map((item) => {
        return (
          <Link
            key={item.id}
            href={`#${item.hash}`}
            onClick={() => getNavItem(item.hash)}
            className={`py-2.5 hover:bg-primary/20 hover:text-primary dark:hover:text-primary xl:min-w-60 lg:min-w-52 min-w-full px-4 rounded-md text-base font-medium  ${
              item.hash === navItem ? 'bg-primary text-white' : 'text-black/60'
            }`}>
            {item.navItem}
          </Link>
        )
      })}
    </div>
  )
}
