'use client'

import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import React, { useState } from 'react'
import Image from 'next/image'
interface ModalProps {
    openProp: boolean
    onClose: (open: boolean) => void
}

export default function Bleaching({ openProp, onClose }: ModalProps) {
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
                                                    src={'/images/aesthetik/Bleaching.jpg'}
                                                    alt='gaby'
                                                    width={362}
                                                    height={262}
                                                    className='inline-block m-auto w-auto mt-10 md:mt-5'
                                                />
                                            </div>
                                        </div>
                                        <DialogTitle className="text-lg md:text-xl lg:text-2xl font-medium leading-6 text-gray-900 text-center mb-5">
                                            Bleaching
                                            <p className='mt-3 text-black/60 text-lg md:text-lg lg:text-xl'>Strahlend weiße Zähne</p>
                                        </DialogTitle>
                                        <div className="mt-2">
                                            <p className=" text-left leading-7 text-base sm:text-base md:text-base lg:text-lg text-black/60">
                                                Weiße Zähne sind nicht nur schön; sie verleihen auch einen Ausdruck von Vitalität, 
                                                Gesundheit und Erfolg. Aber nur die wenigsten Menschen haben natürlich weiße Zähne. 
                                                Moderne Bleaching-Verfahren in der Zahnarztpraxis sind sehr schonend und mit freiverkäuflichem Bleaching nicht zu vergleichen.
                                                <br /><br />
                                                Da sie die Zahnsubstanz nicht angreifen, kann sogar jährlich gebleacht werden. 
                                                Im Zahnzentrum am Kunst-Karree können wir Zähne auch intern bleachen, 
                                                wenn das Zahninnere färbend durchschimmert. Weit häufiger werden Zähne extern – also von außen – gebleacht.
                                                <br /><br />
                                                Bräunliche Veränderungen an Zähnen entstehen durch den Genuss von stark färbenden Lebensmitteln wie Kaffee, Tee, Cola, Rotwein oder Fruchtsäfte. 
                                                Starker Nikotin-Konsum kann Zähne Grau wirken lassen. Um möglichst schonend vorzugehen, decken wir im ersten Schritt das Zahnfleisch exakt ab.
                                                <br /><br />
                                                Danach tragen wir die Bleaching-Flüssigkeit je nach individueller Situation auf die Zähne auf und bestrahlen sie anschließend mit Laserlicht. 
                                                Diesen Vorgang wiederholen wir bei Bedarf mehrmals und können so in einer Sitzung auch um mehrere Farbnuancen aufhellen.
                                                <br /><br />
                                                Vor jedem Bleaching sollte eine Professionelle Zahnreinigung durchgeführt werden. Sind die Zähne von Belägen und Plaque befreit, 
                                                kann die Bleaching-Flüssigkeit besser in den Zahn eindringen und eine stärkere Wirkung entfalten.
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
