'use client'
import Image from 'next/image'

import { Icon } from '@iconify/react/dist/iconify.js'
import { useState } from 'react'
import { PraxisNavigation } from './PraxisNavigation'
import ProfessionelleZahnreinigung  from '../Modal/Vorsorge/ProfessionelleZahnreinigung'
import ParodontalVorsorge  from '../Modal/Vorsorge/ParodontalVorsorge'
import Krebsvorsorge  from '../Modal/Vorsorge/KrebsVorsorge'
export const Vorsorge = () => {
    const [praxisNavbarOpen, setPraxisNavbarOpen] = useState(false)
    const [openProfessionelleZahnreinigung, setOpenProfessionelleZahnreinigung] = useState(false)
    const [openParodontalVorsorge, setOpenParodontalVorsorge] = useState(false)
    const [openKrebsvorsorge, setOpenKrebsvorsorge] = useState(false)
    return (
        <>
            <div id='vorsorge' className='md:scroll-m-[180px] scroll-m-28'>
                {praxisNavbarOpen && (
                    <div
                        className='fixed top-0 left-0 w-full h-full bg-black/50 z-40'
                        onClick={() => setPraxisNavbarOpen(false)}
                    />
                )}

                <div className='flex item-center justify-between mt-10 lg:mt-0'>
                    <h3 className=' text-2xl font-semibold mb-0 text-black'>
                        Vorsorge
                    </h3>
                    <button onClick={() => setPraxisNavbarOpen(true)} className='rounded-md hover:cursor-pointer duration-300' aria-label='Toggle mobile menu'>
                        {''}
                        <Icon icon='gg:menu-right' className='text-3xl lg:hidden block' />
                    </button>
                </div>

                <p className='text-black/70 font-medium text-lg'>Gesundheit für Zähne, Mund und Rachen</p>
                <div className='mt-5'>
                    <p className='text-base font-medium text-black/60'>
                        Unsere Vorsorgeuntersuchungen und -behandlungen gliedern sich in drei Bereiche, die wir Ihnen je nach persönlicher Situation empfehlen.
                        Weil es uns wichtig ist, dass Probleme gar nicht erst entstehen, ist die Prophylaxe ein integraler Bestandteil unseres Behandlungskonzepts.
                        Da uns Ihre Mund- und Zahngesundheit am Herzen liegt, bieten wir Ihnen ein Prophylaxe-Programm mit Erinnerungsfunktion an. Dieser sog.
                        Recall wird individuell eingestellt und unterstützt den Behandlungserfolg optimal. Wir erinnern Sie über den Weg, der Ihnen am liebsten ist: Per Post, Anruf oder SMS!
                    </p>
                </div>

                <div className='mt-10 grid grid-cols-1 lg:grid-cols-12 items-center gap-5'>
                    <div className='lg:col-span-6 p-3'>
                        <Image
                            src={'/images/vorsorge/vorsorge-1.webp'}
                            alt='Meisterlabor'
                            width={475}
                            height={200}
                            className='inline-block m-auto w-auto sm:w-full rounded-2xl hover:scale-110 transition duration-300'
                            onClick={() => setOpenProfessionelleZahnreinigung(true)}
                        />
                    </div>
                    <div className='lg:col-span-6 p-3 text-center item-center'>
                        <div className='mt-10'>
                            <h3 className='font-semibold text-black  sm:text-lg md:text-lg lg:text-xl text-primary' >
                                Professionelle Zahnreinigungfür <br></br>Kinder und Erwachsene
                            </h3>
                            <button onClick={() => setOpenProfessionelleZahnreinigung(true)}  className='mt-4 px-6 py-2 bg-primary text-white hover:bg-primary/90 transition text-lg'>Mehr Erfahren</button>
                        </div>
                    </div>
                </div>
                <div className='mt-10 grid grid-cols-1 lg:grid-cols-12 items-center gap-5 mb-10'>
                    <div className='lg:col-span-6 p-3 order-1 lg:order-2'>
                        <Image
                            src={'/images/vorsorge/vorsorge-2.webp'}
                            alt='Meisterlabor'
                            width={475}
                            height={200}
                            className='inline-block m-auto w-auto sm:w-full rounded-2xl hover:scale-110 transition duration-300'
                            onClick={() => setOpenParodontalVorsorge(true)}
                        />
                    </div>
                    <div className='lg:col-span-6 p-3 text-center item-center order-2 lg:order-1'>
                        <div className='mt-10'>
                            <h3 className='font-semibold text-black  sm:text-lg md:text-lg lg:text-xl text-primary' >
                                Parodontitis-Vorsorge <br></br> um Risiken zu minimieren
                            </h3>
                            <button onClick={() => setOpenParodontalVorsorge(true)} className='mt-4 px-6 py-2 bg-primary text-white hover:bg-primary/90 transition text-lg'>Mehr Erfahren</button>
                        </div>
                    </div>
                </div>
                <div className='mt-10 grid grid-cols-1 lg:grid-cols-12 items-center gap-5'>
                    <div className='lg:col-span-6 p-3'>
                        <Image
                            src={'/images/vorsorge/vorsorge-3.webp'}
                            alt='Meisterlabor'
                            width={475}
                            height={200}
                            className='inline-block m-auto w-auto sm:w-full rounded-2xl hover:scale-110 transition duration-300'
                            onClick={() => setOpenKrebsvorsorge(true)}
                        />
                    </div>
                    <div className='lg:col-span-6 p-3 text-center item-center'>
                        <div className='mt-10'>
                            <h3 className='font-semibold text-black  sm:text-lg md:text-lg lg:text-xl text-primary' >
                                Krebsvorsorge – wichtig <br></br> ab der zweiten Lebenshälfte
                            </h3>
                            <button onClick={() => setOpenKrebsvorsorge(true)} className='mt-4 px-6 py-2 bg-primary text-white hover:bg-primary/90 transition text-lg'>Mehr Erfahren</button>
                        </div>
                    </div>
                </div>
                <div className='border-t border-gray-300 my-10'></div>
            </div>

            <div
                className={`lg:hidden block fixed top-0 right-0 h-full w-full bg-white dark:bg-dark shadow-lg transform transition-transform duration-300 max-w-xs ${praxisNavbarOpen ? 'translate-x-0' : 'translate-x-full'
                    } z-50`}>
                <div className='flex items-center justify-between p-4'>
                    <h2 className='text-lg font-bold text-midnight_text dark:text-black'>
                        Docs Menu
                    </h2>
                    <button
                        onClick={() => setPraxisNavbarOpen(false)}
                        aria-label='Close mobile menu'>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='30'
                            height='30'
                            viewBox='0 0 30 30'
                            className='dark:text-black'>
                            <path
                                fill='none'
                                stroke='currentColor'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth='2'
                                d='M6 18L18 6M6 6l12 12'
                            />
                        </svg>
                    </button>
                </div>
                <nav className='px-4'>
                    <PraxisNavigation />
                </nav>
            </div>

            {openProfessionelleZahnreinigung && (
                <ProfessionelleZahnreinigung
                    openProp={openProfessionelleZahnreinigung}
                    onClose={() => setOpenProfessionelleZahnreinigung(false)}
                />
            )}
            {openParodontalVorsorge && (
                <ParodontalVorsorge
                    openProp={openParodontalVorsorge}
                    onClose={() => setOpenParodontalVorsorge(false)}
                />
            )}
            {openKrebsvorsorge && (
                <Krebsvorsorge
                    openProp={openKrebsvorsorge}        
                    onClose={() => setOpenKrebsvorsorge(false)}
                />
            )}
        </>
    )
}