'use client'
import Image from 'next/image';
import { useState } from 'react'
import Bleaching from '../Modal/Aesthetik/Bleaching';
import FrontzahnDesign from '../Modal/Aesthetik/FrontzahnDesign';
import Veneers from '../Modal/Aesthetik/Veneers';
export const Aesthetik = () => {
    const [openBleaching, setOpenBleaching] = useState(false);
    const [openFrontzahnDesign, setOpenFrontzahnDesign] = useState(false);
    const [openVeneers, setOpenVeneers] = useState(false);
    return (
        <>
            <div className='md:scroll-m-[180px] scroll-m-28' id='aesthetik'>
                <h3 className=' text-black text-2xl font-semibold mt-8'>Ästhetische Zahnmedizin</h3>
                <p className='text-black/70 font-medium text-lg'>Für ein bezauberndes Lächeln</p>
                <div className='mt-5'>
                    <p className='text-base font-medium text-black/60'>
                        Die Zahnästhetik hat in unserer modernen Gesellschaft einen hohen Stellenwert.
                        Das äußere Erscheinungsbild korreliert oft mit Selbstzufriedenheit und Selbstbewusstsein.
                        Bei zahnärztlichen Behandlungen beachten wir deshalb nicht nur die Funktion, sondern generell auch ästhetische Aspekte.
                        Die Ästhetische Zahnmedizin bietet jedoch zusätzliche Möglichkeiten, Zähne auf eine schonende Art und Weise noch harmonischer,
                        strahlender und ansprechender zu optimieren. Häufig sind es kleine Veränderungen, mit denen wir eine große Wirkung erzielen.
                    </p>
                </div>

                <div className='mt-10 grid grid-cols-1 lg:grid-cols-12 items-center gap-5'>
                    <div className='lg:col-span-6 p-3'>
                        <Image
                            src={'/images/aesthetik/Aesthetik-1.webp'}
                            alt='Meisterlabor'
                            width={475}
                            height={200}
                            className='inline-block m-auto w-auto sm:w-full rounded-2xl hover:scale-110 transition duration-300'
                            onClick={() => setOpenBleaching(true)}
                        />
                    </div>
                    <div className='lg:col-span-6 p-3 text-center item-center'>
                        <div className='mt-10'>
                            <h3 className='font-semibold text-black  sm:text-lg md:text-lg lg:text-xl text-primary' >
                                Bleaching für strahlend <br></br>weiße Zähne
                            </h3>
                            <button onClick={() => setOpenBleaching(true)} className='mt-4 px-6 py-2 bg-primary text-white hover:bg-primary/90 transition text-lg'>Mehr Erfahren</button>
                        </div>
                    </div>
                </div>
                <div className='mt-10 grid grid-cols-1 lg:grid-cols-12 items-center gap-5 mb-10'>
                    <div className='lg:col-span-6 p-3 order-1 lg:order-2'>
                        <Image
                            src={'/images/aesthetik/Aesthetik-2.webp'}
                            alt='Meisterlabor'
                            width={475}
                            height={200}
                            className='inline-block m-auto w-auto sm:w-full rounded-2xl hover:scale-110 transition duration-300'
                            onClick={() => setOpenFrontzahnDesign(true)}
                        />
                    </div>
                    <div className='lg:col-span-6 p-3 text-center item-center order-2 lg:order-1'>
                        <div className='mt-10'>
                            <h3 className='font-semibold text-black  sm:text-lg md:text-lg lg:text-xl text-primary' >
                                Digitale Technik für <br></br> hochästhetische Frontzähne
                            </h3>
                            <button onClick={() => setOpenFrontzahnDesign(true)} className='mt-4 px-6 py-2 bg-primary text-white hover:bg-primary/90 transition text-lg'>Mehr Erfahren</button>
                        </div>
                    </div>
                </div>
                <div className='mt-10 grid grid-cols-1 lg:grid-cols-12 items-center gap-5'>
                    <div className='lg:col-span-6 p-3'>
                        <Image
                            src={'/images/aesthetik/Aesthetik-3.webp'}
                            alt='Meisterlabor'
                            width={475}
                            height={200}
                            className='inline-block m-auto w-auto sm:w-full rounded-2xl hover:scale-110 transition duration-300'
                            onClick={() => setOpenVeneers(true)}
                        />
                    </div>
                    <div className='lg:col-span-6 p-3 text-center item-center'>
                        <div className='mt-10'>
                            <h3 className='font-semibold text-black  sm:text-lg md:text-lg lg:text-xl text-primary' >
                                Veneers – schnelle Hilfe <br></br>für schöne Zähne
                            </h3>
                            <button onClick={() => setOpenVeneers(true)} className='mt-4 px-6 py-2 bg-primary text-white hover:bg-primary/90 transition text-lg'>Mehr Erfahren</button>
                        </div>
                    </div>
                </div>
                <div className='border-t border-gray-300 my-10'></div>
            </div>
            {openBleaching && (
                <Bleaching
                    openProp={openBleaching}
                    onClose={setOpenBleaching}
                />
            )}
            {openFrontzahnDesign && (
                <FrontzahnDesign
                    openProp={openFrontzahnDesign}
                    onClose={setOpenFrontzahnDesign}
                />
            )}
            {openVeneers && (
                <Veneers
                    openProp={openVeneers}
                    onClose={setOpenVeneers}
                />
            )}
        </>
    )
}
