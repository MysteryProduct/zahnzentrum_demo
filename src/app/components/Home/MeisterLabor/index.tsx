"use client"

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import  HandgefertigterZahntechnik  from '../../Modal/HandgefertigterZahntechnik'
import DigitaleZahntechnik from '../../Modal/DigitaleZahntechnik'
export default function MeisterLabor() {
    const [openHandgefertigter, setOpenHandgefertigter] = useState(false)
    const [openDigitale, setOpenDigitale] = useState(false)
    useEffect(() => {
        const fetchData = async () => {
            try {

            } catch (error) {
                console.error('Error fetching image:', error)
            }
        }
        fetchData()
    }, [])
    return (
        <section id='meisterlabor-section' className='bg-gray-50'>
            <div className='container xl:pt-7 pt-10'>
                <Image
                    src={'/images/Meisterlabor/meister-labor1.jpg'}
                    alt='Meisterlabor'
                    width={475}
                    height={200}
                    className='inline-block m-auto w-auto sm:w-full'
                />
                <div className='mt-10'>
                    <h3 className='font-semibold text-black text-lg md:text-lg sm:text-lg lg:text-2xl text-primary text-center' >
                        Meister-Labor
                    </h3>
                    <p className='font-semibold text-base sm:text-lg md:text-lg lg:text-xl text-center mb-6'>Das zahntechnische Labor in unserer Praxis</p>
                    <div className='mt-6'>
                        <p className='text-black/80 text-left leading-7 text-base sm:text-base md:text-base lg:text-lg'>
                            Wir haben ein zahntechnisches Meister-Labor in unsere Zahnarztpraxis integriert und das bietet entscheidende Vorteile für unsere Patienten: Ein Ansprechpartner, eine Verantwortlichkeit und volle Gewährleistung.
                            Zudem entfallen lange Wege in kooperierende Labore und die entsprechenden Kosten und Zeiten, die dafür in Kauf genommen werden müssten.
                            Unsere Zahntechniker arbeiten vor Ort, so dass Absprachen bequem getroffen werden können und auch die „Anprobe“ gemeinsam erfolgt. Und sollte Ihr Zahnersatz einmal kaputt gehen, können Sie auf rasche Hilfe zählen!
                        </p>
                    </div>
                </div>
                <div className='mt-10 grid grid-cols-1 lg:grid-cols-12 items-center gap-5'>
                    <div className='lg:col-span-6 p-3'>
                        <Image
                            src={'/images/Meisterlabor/meister-labor2.jpg'}
                            alt='Meisterlabor'
                            width={475}
                            height={200}
                            className='inline-block m-auto w-auto sm:w-full rounded-2xl hover:scale-110 transition duration-300'
                            onClick={() => setOpenHandgefertigter(true)}
                        />
                    </div>
                    <div className='lg:col-span-6 p-3 text-center item-center'>
                        <div className='mt-10'>
                            <h3 className='font-semibold text-black  sm:text-lg md:text-lg lg:text-xl text-primary' >
                                Handgefertigter Zahnersatz – ein Handwerk mit Tradition
                            </h3>
                            <button onClick={() => setOpenHandgefertigter(true)} className='mt-4 px-6 py-2 bg-primary text-white hover:bg-primary/90 transition text-lg'>Mehr Erfahren</button>
                        </div>
                    </div>
                </div>
                <div className='mt-10 grid grid-cols-1 lg:grid-cols-12 items-center gap-5 mb-10'>
                    <div className='lg:col-span-6 p-3 order-1 lg:order-2'>
                        <Image
                            src={'/images/Meisterlabor/meister-labor3.webp'}
                            alt='Meisterlabor'
                            width={475}
                            height={200}
                            className='inline-block m-auto w-auto sm:w-full rounded-2xl hover:scale-110 transition duration-300'
                            onClick={() => setOpenDigitale(true)}
                        />
                    </div>
                    <div className='lg:col-span-6 p-3 text-center item-center order-2 lg:order-1'>
                        <div className='mt-10'>
                            <h3 className='font-semibold text-black  sm:text-lg md:text-lg lg:text-xl text-primary' >
                                Digital erstellter Zahnersatz – Innovative Technik mit vielen Vorteilen
                            </h3>
                            <button onClick={() => setOpenDigitale(true)} className='mt-4 px-6 py-2 bg-primary text-white hover:bg-primary/90 transition text-lg'>Mehr Erfahren</button>
                        </div>
                    </div>
                </div>
            </div>

            {openHandgefertigter && (
                <HandgefertigterZahntechnik
                    openProp={openHandgefertigter}            
                    onClose={setOpenHandgefertigter}
                />
            )}
            {openDigitale && (
                <DigitaleZahntechnik
                    openProp={openDigitale}
                    onClose={setOpenDigitale}
                />
            )}
        </section>
    )
}