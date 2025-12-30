'use client'
import Image from 'next/image';
import { useState } from 'react'
import ParodontitisTherapie from '../Modal/Zahnerhalt/ParodontitisTherapie';
import Wurzelbehandlung from '../Modal/Zahnerhalt/Wurzelbehandlung';
import Fuellungen from '../Modal/Zahnerhalt/Fuellungen';
import MilchzahnFuellungen from '../Modal/Zahnerhalt/MilchzahnFuellungen';
export const Zahnerhalt = () => {
    const [openParodontitisTherapie, setOpenParodontitisTherapie] = useState(false);
    const [openWurzelbehandlung, setOpenWurzelbehandlung] = useState(false);
    const [openFuellungen, setOpenFuellungen] = useState(false);
    const [openMilchzahnFuellungen, setOpenMilchzahnFuellungen] = useState(false);

    return (
        <>
            <div className='md:scroll-m-[180px] scroll-m-28' id='zahnerhalt'>
                <h3 className=' text-black text-2xl font-semibold mt-8'>Zahnerhalt</h3>
                <p className='text-black/70 font-medium text-lg'>Konservierende Zahnmedizin</p>
                <div className='mt-5'>
                    <p className='text-base font-medium text-black/60'>
                        Unser Ziel ist immer der Erhalt Ihrer eigenen Zähne, da nichts besser sein kann, als das was die Natur Ihnen gegeben hat.
                        Es entspricht unserem ethischen Grundsatz alle Maßnahmen der konservierenden – also erhaltenden Zahnmedizin – einzusetzen,
                        um dieses Ziel zu erreichen.
                        <br></br><br></br>
                        Aus diesem Grund ist auch die Vorsorge ein integraler Bestandteil unseres Praxiskonzepts.
                        Erst wenn der Erhalt von Zähnen und Zahnfleisch nicht mehr möglich ist, kommen unsere weiteren Spezialgebiete Oralchirurgie
                        und Implantologie zum Einsatz.
                    </p>
                </div>

                <div className='mt-10 grid grid-cols-1 lg:grid-cols-12 items-center gap-5'>
                    <div className='lg:col-span-6 p-3'>
                        <Image
                            src={'/images/zahnerhalt/zahnerhalt-1.webp'}
                            alt='Meisterlabor'
                            width={475}
                            height={200}
                            className='inline-block m-auto w-auto sm:w-full rounded-2xl hover:scale-110 transition duration-300'
                            onClick={() => setOpenFuellungen(true)}
                        />
                    </div>
                    <div className='lg:col-span-6 p-3 text-center item-center'>
                        <div className='mt-10'>
                            <h3 className='font-semibold text-black  sm:text-lg md:text-lg lg:text-xl text-primary' >
                                Defekte unsichtbar <br></br>korrigieren
                            </h3>
                            <button onClick={() => setOpenFuellungen(true)} className='mt-4 px-6 py-2 bg-primary text-white hover:bg-primary/90 transition text-lg'>Mehr Erfahren</button>
                        </div>
                    </div>
                </div>
                <div className='mt-10 grid grid-cols-1 lg:grid-cols-12 items-center gap-5 mb-10'>
                    <div className='lg:col-span-6 p-3 order-1 lg:order-2'>
                        <Image
                            src={'/images/zahnerhalt/zahnerhalt-2.webp'}
                            alt='Meisterlabor'
                            width={475}
                            height={200}
                            className='inline-block m-auto w-auto sm:w-full rounded-2xl hover:scale-110 transition duration-300'
                            onClick={() => setOpenMilchzahnFuellungen(true)}
                        />
                    </div>
                    <div className='lg:col-span-6 p-3 text-center item-center order-2 lg:order-1'>
                        <div className='mt-10'>
                            <h3 className='font-semibold text-black  sm:text-lg md:text-lg lg:text-xl text-primary' >
                                Auch kleine Zähne <br></br>brauchen Fürsorge
                            </h3>
                            <button onClick={() => setOpenMilchzahnFuellungen(true)} className='mt-4 px-6 py-2 bg-primary text-white hover:bg-primary/90 transition text-lg'>Mehr Erfahren</button>
                        </div>
                    </div>
                </div>
                <div className='mt-10 grid grid-cols-1 lg:grid-cols-12 items-center gap-5'>
                    <div className='lg:col-span-6 p-3'>
                        <Image
                            src={'/images/zahnerhalt/zahnerhalt-3.webp'}
                            alt='Meisterlabor'
                            width={475}
                            height={200}
                            className='inline-block m-auto w-auto sm:w-full rounded-2xl hover:scale-110 transition duration-300'
                            onClick={() => setOpenWurzelbehandlung(true)}
                        />
                    </div>
                    <div className='lg:col-span-6 p-3 text-center item-center'>
                        <div className='mt-10'>
                            <h3 className='font-semibold text-black  sm:text-lg md:text-lg lg:text-xl text-primary' >
                                Stark erkrankte <br></br>Zähne retten
                            </h3>
                            <button onClick={() => setOpenWurzelbehandlung(true)} className='mt-4 px-6 py-2 bg-primary text-white hover:bg-primary/90 transition text-lg'>Mehr Erfahren</button>
                        </div>
                    </div>
                </div>
                <div className='mt-10 grid grid-cols-1 lg:grid-cols-12 items-center gap-5 mb-10'>
                    <div className='lg:col-span-6 p-3 order-1 lg:order-2'>
                        <Image
                            src={'/images/zahnerhalt/zahnerhalt-4.webp'}
                            alt='Meisterlabor'
                            width={475}
                            height={200}
                            className='inline-block m-auto w-auto sm:w-full rounded-2xl hover:scale-110 transition duration-300'
                            onClick={() => setOpenParodontitisTherapie(true)}
                        />
                    </div>
                    <div className='lg:col-span-6 p-3 text-center item-center order-2 lg:order-1'>
                        <div className='mt-10'>
                            <h3 className='font-semibold text-black  sm:text-lg md:text-lg lg:text-xl text-primary' >
                                Parodontitis <br></br>sicher eindämmen
                            </h3>
                            <button onClick={() => setOpenParodontitisTherapie(true)} className='mt-4 px-6 py-2 bg-primary text-white hover:bg-primary/90 transition text-lg'>Mehr Erfahren</button>
                        </div>
                    </div>
                </div>
                <div className='border-t border-gray-300 my-10'></div>
            </div>
            {openFuellungen && (
                <Fuellungen openProp={openFuellungen} onClose={(value: boolean) => setOpenFuellungen(value)} />
            )}
            {openMilchzahnFuellungen && (
                <MilchzahnFuellungen openProp={openMilchzahnFuellungen} onClose={(value: boolean) => setOpenMilchzahnFuellungen(value)} />
            )}
            {openWurzelbehandlung && (
                <Wurzelbehandlung openProp={openWurzelbehandlung} onClose={(value: boolean) => setOpenWurzelbehandlung(value)} />
            )}
            {openParodontitisTherapie && (
                <ParodontitisTherapie openProp={openParodontitisTherapie} onClose={(value: boolean) => setOpenParodontitisTherapie(value)} />
            )}
        </>
    )
}
