'use client'

import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import React, { useState } from 'react'
import Image from 'next/image'
interface ModalProps {
    openProp: boolean
    onClose: (open: boolean) => void
}

export default function Inlays({ openProp, onClose }: ModalProps) {
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
                                                    src={'/images/zahnersatz/inlays.jpg'}
                                                    alt='gaby'
                                                    width={362}
                                                    height={262}
                                                    className='inline-block m-auto w-auto mt-10 md:mt-5'
                                                />
                                            </div>
                                        </div>
                                        <DialogTitle className="text-lg md:text-xl lg:text-2xl font-medium leading-6 text-gray-900 text-center mb-5">
                                            Inlays, Kronen, Brücken
                                            <p className='mt-3 text-black/60 text-lg md:text-lg lg:text-xl'>Beste Qualität aus dem eigenen Meister-Labor</p>
                                        </DialogTitle>
                                        <div className="mt-2">
                                            <p className=" text-left leading-7 text-base sm:text-base md:text-base lg:text-lg text-black/60">
                                                Je nach Ausmaß des Defektes können wir zwischen diversen prothetischen Möglichkeiten wählen. 
                                                Hierzu arbeiten wir mit modernen, biokompatiblen, keramischen Materialien. 
                                                Diese Werkstoffe bieten den entscheidenden Vorteil, dass sie keine allergischen Reaktionen auslösen und zudem sehr natürlich wirken.
                                                <br /><br />
                                                Der digitale Workflow in unserer Zahnarztpraxis und ein eigenes zahntechnisches Labor erlauben uns je nach gewählter 
                                                Alternative den Zahnersatz von Hand zu fertigen oder digital zu erstellen und in nur einer Sitzung einzusetzen. 
                                                Bei vollkeramischen Versorgungen kopieren wir den natürlichen Zahn nicht nur optisch, sondern auch in seiner Funktion, 
                                                Mechanik und Biologie.
                                                <br /><br />
                                                Durch eine aufwändige Klebetechnik bei der Eingliederung von Inlays oder Onlays erhält der Zahn seine 
                                                biomechanischen Eigenschaften wieder zurück. Bei stark geschädigten Zähnen können wir mit einer Krone, 
                                                die wie ein Käppchen über den Restzahn gestülpt wird, für einen sicheren Halt und Stabilität sorgen.
                                                <br /><br />
                                                Brücken kommen immer dann zum Einsatz, wenn Zähne fehlen und zudem die benachbarten Zähne behandlungsbedürftig sind 
                                                und somit der Defekt und die Lücke ausgeglichen werden können. Fehlt ein Zahn, versorgen wir die Lücke mit einem Implantat, 
                                                um die Nachbarzähne zu schützen. Wir arbeiten immer so schonend wie möglich, um den langfristigen Erhalt Ihrer 
                                                eigenen Zähne zu gewährleisten.
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
