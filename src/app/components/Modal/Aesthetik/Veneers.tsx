'use client'

import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import React, { useState } from 'react'
import Image from 'next/image'
interface ModalProps {
    openProp: boolean
    onClose: (open: boolean) => void
}

export default function Veneers({ openProp, onClose }: ModalProps) {
    const [open, setOpen] = useState(openProp)

    const handleClose = (value: boolean) => {
        setOpen(value)
        onClose(value)
    }
    
    return (
        <div>
            <Dialog open={open} onClose={() => handleClose(false)} className="relative z-10">
                <DialogBackdrop
                    transition
                    className="fixed inset-0 bg-gray-800/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
                />

                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <DialogPanel
                            transition
                            className="relative p-2 transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:max-w-4xl data-closed:sm:translate-y-0 data-closed:sm:scale-95"
                        >
                            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                <div className="sm:flex sm:items-start">
                                    <div className="mt-3 sm:mt-0 sm:ml-4 sm:text-left">
                                        <div className='my-10 text-center backdrop-blur-md bg-white/50 rounded-3xl'>
                                            <div className='relative'>
                                                <Image
                                                    src={'/images/aesthetik/veneers.jpg'}
                                                    alt='gaby'
                                                    width={362}
                                                    height={262}
                                                    className='inline-block m-auto w-auto mt-10 md:mt-5'
                                                />
                                            </div>
                                        </div>
                                        <DialogTitle className="text-lg md:text-xl lg:text-2xl font-medium leading-6 text-gray-900 text-center mb-5">
                                            Veneers
                                            <p className='mt-3 text-black/60 text-lg md:text-lg lg:text-xl'>Perfekte Helfer für schöne Zähne</p>
                                        </DialogTitle>
                                        <div className="mt-2">
                                            <p className=" text-left leading-7 text-base sm:text-base md:text-base lg:text-lg text-black/60">
                                                Es gibt viele Gründe, warum eine Veränderung der Frontzähne gewünscht wird: Stehen Zähne zu weit auseinander 
                                                wie bei einem Diastema, sind sie zu kurz, haben eine unschöne Form, sind fleckig, unterschiedlich, 
                                                zu dunkel oder ist eine Ecke abgebrochen.
                                                <br /><br />
                                                In all’ diesen Fällen sind keramische Verblendschalen, die sog. 
                                                Veneers eine hervorragende Möglichkeit schnell, einfach und höchst effektiv in nur einer Sitzung für eine harmonische Zahnform und -farbe zu sorgen. 
                                                Veneers kommen im Frontzahnbereich und ebenso im Seitenzahnbereich erfolgreich zum Einsatz.
                                                <br /><br />
                                                Mit Veneers können selbst kleine Fehlstellungen ohne eine kieferorthopädische Therapie korrigiert werden. 
                                                Im Gegensatz zu Kronen wird mit Veneers nur ein geringer Anteil der natürlichen Hartsubstanz abgeschliffen. 
                                                Es gibt verschiedene Veneer-Typen zwischen denen wir je nach individueller Situation, 
                                                Anatomie der Zähne und persönlichem Geschmack gemeinsam auswählen können.
                                                <br /><br />
                                                Veneers wirken aufgrund ihrer Lichtdurchlässigkeit sehr natürlich, so dass sie sich harmonisch in das bestehende Zahnbild einfügen. 
                                                In vielen Fällen merken Außenstehende nicht einmal, dass sich etwas verändert hat, sondern nur dass das Lächeln schöner, 
                                                ebenmäßiger und strahlender wirkt.
                                                <br /><br />
                                                In unserer volldigitalen Praxis können wir anhand einer Foto-Simulation die Frontzähne am Computer designen. 
                                                Für unsere Patienten bietet das den entscheidenden Vorteil, dass sie vorher sehen können, 
                                                wie schön das Ergebnis am Ende der Behandlung aussehen wird
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                <button
                                    type="button"
                                    data-autofocus
                                    onClick={() => handleClose(false)}
                                    className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-xs inset-ring inset-ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                                >
                                    Close
                                </button>
                            </div>
                        </DialogPanel>
                    </div>
                </div>
            </Dialog>
        </div>
    )
}
