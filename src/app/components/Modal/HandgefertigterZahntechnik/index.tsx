'use client'

import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import React, { useState } from 'react'
import Image from 'next/image'
interface ModalProps {
    openProp: boolean
    onClose: (open: boolean) => void
}

export default function HandgefertigterZahntechnik({ openProp, onClose }: ModalProps) {
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
                                                    src={'/images/MeisterLabor/HandgefertigterZahnersatz.jpg'}
                                                    alt='gaby'
                                                    width={362}
                                                    height={262}
                                                    className='inline-block m-auto w-auto mt-10 md:mt-5'
                                                />
                                            </div>
                                        </div>
                                        <DialogTitle className="text-lg md:text-xl lg:text-2xl font-medium leading-6 text-gray-900 text-center mb-5">
                                            Handgefertigter Zahntechnik
                                            <p className='mt-3 text-black/60 text-lg md:text-lg lg:text-xl'>Ein Kunsthandwerk mit Tradition</p>
                                        </DialogTitle>
                                        <div className="mt-2">
                                            <p className=" text-left leading-7 text-base sm:text-base md:text-base lg:text-lg text-black/60">
                                                Nicht zuletzt ist die Qualität des Zahnersatzes wesentlich für den Erfolg der gesamten Behandlung. 
                                                Wir sind Perfektionisten – und wenn es um die Zahntechnik geht, gilt das ganz besonders. 
                                                Denn wenn ein Zahnersatz nicht 100prozentig passen sollte, fällt dies immer auf uns Zahnärzte und Chirurgen zurück. 
                                                Wir arbeiten ausschließlich mit keramischen Materialien, um ganzheitlichen Ansprüchen an eine metallfreie Zahnversorgung zu genügen. 
                                                Und weil uns die Zahnästhetik ein wichtiges Anliegen ist, erstellen unsere Zahntechniker hochästhetischen Zahnersatz auch von Hand.
                                                <br /><br />
                                                Bei unserem handgefertigten Zahnersatz konzentrieren wir uns ausschließlich auf Vollkeramik. 
                                                Für eine metallfreie Zahnversorgung stehen uns verschiedene Vorgehensweisen zur Verfügung: Zirkonoxyid-Keramik verwenden wir beispielsweise für Kronen und Brücken. 
                                                Inlays und Onlays können wir aus geschichteter Feldspat-Keramik erstellt werden, da dieses Material eine perfekte Optik aufweist. 
                                                Ebenso verwenden wir auch Lithium-Disilikat-Glaskeramik, wenn der Fokus auf die Stabilität gelegt wird. Diese Auswahl ermöglicht uns, je nach Indikation und persönlicher Präferenz immer das passende Material für Sie zu wählen. 
                                                Handgefertigter Zahnersatz wird im Labor erstellt und kann deshalb erst in einer Folgesitzung eingesetzt werden. Jedes Teil ist ein Unikat.
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
