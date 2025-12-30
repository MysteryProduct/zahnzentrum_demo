'use client'
import Image from 'next/image';
import { useState } from 'react'
import Inlays from '../Modal/Zahnersatz/Inlays';
import ErsteHilfe from '../Modal/Zahnersatz/ErsteHilfe';
import ZahnersatzModal from '../Modal/Zahnersatz/Zahnersatz';
export const Zahnersatz = () => {
    const [isInlaysOpen, setIsInlaysOpen] = useState(false);
    const [isZahnersatzOpen, setIsZahnersatzOpen] = useState(false);
    const [isErsteHilfeOpen, setIsErsteHilfeOpen] = useState(false);
    return (
        <>
            <div className='md:scroll-m-[180px] scroll-m-28' id='zahnersatz'>
                <h3 className=' text-black text-2xl font-semibold mt-8'>Zahnersatz</h3>
                <p className='text-black/70 font-medium text-lg'>aus unserer Gold- und Amalgam-freien Praxis</p>
                <div className='mt-5'>
                    <p className='text-base font-medium text-black/60'>
                        Zahndefekte können mit hochästhetischen Materialien ausgeglichen werden und selbst bei fehlenden Zähnen können wir mit Brücken oder 
                        implantatgetragenen Versorgungen Zahnersatz langzeitstabil fest verankern. 
                        Wir setzen auf vollkeramische Lösungen und erstellen unseren Zahnersatz im eigenen Meister-Labor. 
                        Die räumliche Nähe garantiert stets eine gute Erreichbarkeit und eine einfache Kommunikation zwischen Ihnen, 
                        uns und dem Labor. Und so können wir genau das Material für Sie wählen, das zu Ihren Wünschen und Anforderungen am Besten passt.
                    </p>
                </div>

                <div className='mt-10 grid grid-cols-1 lg:grid-cols-12 items-center gap-5'>
                    <div className='lg:col-span-6 p-3'>
                        <Image
                            src={'/images/zahnersatz/Zahnersatz-1.webp'}
                            alt='Meisterlabor'
                            width={475}
                            height={200}
                            className='inline-block m-auto w-auto sm:w-full rounded-2xl hover:scale-110 transition duration-300'
                            onClick={() => setIsInlaysOpen(true)}
                        />
                    </div>
                    <div className='lg:col-span-6 p-3 text-center item-center'>
                        <div className='mt-10'>
                            <h3 className='font-semibold text-black  sm:text-lg md:text-lg lg:text-xl text-primary' >
                                Kronen, Brücken, Inlays – <br></br>Defekte ausgleichen
                            </h3>
                            <button onClick={() => setIsInlaysOpen(true)} className='mt-4 px-6 py-2 bg-primary text-white hover:bg-primary/90 transition text-lg'>Mehr Erfahren</button>
                        </div>
                    </div>
                </div>
                <div className='mt-10 grid grid-cols-1 lg:grid-cols-12 items-center gap-5 mb-10'>
                    <div className='lg:col-span-6 p-3 order-1 lg:order-2'>
                        <Image
                            src={'/images/zahnersatz/Zahnersatz-2.webp'}
                            alt='Meisterlabor'
                            width={475}
                            height={200}
                            className='inline-block m-auto w-auto sm:w-full rounded-2xl hover:scale-110 transition duration-300'
                            onClick={() => setIsZahnersatzOpen(true)}
                        />
                    </div>
                    <div className='lg:col-span-6 p-3 text-center item-center order-2 lg:order-1'>
                        <div className='mt-10'>
                            <h3 className='font-semibold text-black  sm:text-lg md:text-lg lg:text-xl text-primary' >
                                Zahnersatz bei Zahnlosigkeit – <br></br>unser Spezialgebiet
                            </h3>
                            <button onClick={() => setIsZahnersatzOpen(true)} className='mt-4 px-6 py-2 bg-primary text-white hover:bg-primary/90 transition text-lg'>Mehr Erfahren</button>
                        </div>
                    </div>
                </div>
                <div className='mt-10 grid grid-cols-1 lg:grid-cols-12 items-center gap-5'>
                    <div className='lg:col-span-6 p-3'>
                        <Image
                            src={'/images/zahnersatz/Zahnersatz-3.webp'}
                            alt='Meisterlabor'
                            width={475}
                            height={200}
                            className='inline-block m-auto w-auto sm:w-full rounded-2xl hover:scale-110 transition duration-300'
                            onClick={() => setIsErsteHilfeOpen(true)}
                        />
                    </div>
                    <div className='lg:col-span-6 p-3 text-center item-center'>
                        <div className='mt-10'>
                            <h3 className='font-semibold text-black  sm:text-lg md:text-lg lg:text-xl text-primary' >
                                Soforthilfe bei <br></br>Prothesenbruch
                            </h3>
                            <button onClick={() => setIsErsteHilfeOpen(true)} className='mt-4 px-6 py-2 bg-primary text-white hover:bg-primary/90 transition text-lg'>Mehr Erfahren</button>
                        </div>
                    </div>
                </div>
                <div className='border-t border-gray-300 my-10'></div>
            </div>
            {isInlaysOpen && <Inlays openProp={isInlaysOpen} onClose={(open: boolean) => setIsInlaysOpen(open)} />}
            {isZahnersatzOpen && <ZahnersatzModal openProp={isZahnersatzOpen} onClose={(open: boolean) => setIsZahnersatzOpen(open)} />}
            {isErsteHilfeOpen && <ErsteHilfe openProp={isErsteHilfeOpen} onClose={(open: boolean) => setIsErsteHilfeOpen(open)} />}
        </>
    )
}
