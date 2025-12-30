import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import React, { useState } from 'react'
import Image from 'next/image'
interface ModalProps {
    openProp: boolean
    onClose: (open: boolean) => void
}

export default function ParodontitisTherapie({ openProp, onClose }: ModalProps) {
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
                                                    src={'/images/zahnerhalt/parodontitis-therapie.jpg'}
                                                    alt='gaby'
                                                    width={362}
                                                    height={262}
                                                    className='inline-block m-auto w-auto mt-10 md:mt-5'
                                                />
                                            </div>
                                        </div>
                                        <DialogTitle className="text-lg md:text-xl lg:text-2xl font-medium leading-6 text-gray-900 text-center mb-5">
                                            Parodontitis-Therapie
                                            <p className='mt-3 text-black/60 text-lg md:text-lg lg:text-xl'>Wenn der Zahnhalteapparat erkrankt ist</p>
                                        </DialogTitle>
                                        <div className="mt-2">
                                            <p className=" text-left leading-7 text-base sm:text-base md:text-base lg:text-lg text-black/60">
                                                Eine Parodontitis ist eine chronische Erkrankung des Zahnhalteapparates. Sie ist sehr ernst zu nehmen, 
                                                da eine Parodontitis zum Verlust von Zähnen, Knochen und Zahnfleisch führen kann. 
                                                Eine Parodontitis wird immer durch Bakterien ausgelöst. Erbliche Faktoren, Immunschwäche, 
                                                Diabetes oder Schwangerschaft können den Verlauf beschleunigen.
                                                <br /><br />
                                                Ebenso können unausgewogene Ernährung, schlechte Zahnpflege, Karies, starker Tabakkonsum oder Piercings begünstigende Faktoren sein. 
                                                Um eine Parodontitis frühzeitig zu erkennen, bieten wir einen Parodontitis-Check-Up im Rahmen der Vorsorge an.
                                                <br /><br />
                                                Ist eine Parodontitis ausgebrochen, gilt es rasch und sehr konsequent zu handeln. 
                                                Zuerst müssen Plaque und Zahnstein äußerst gründlich entfernt, kranke Zähne extrahiert, 
                                                wurzelbehandelt oder saniert werden, um alle Bakterienherde aus dem Mundraum zu entfernen. 
                                                Mit Spüllösungen oder Antibiotika kann das Keimwachstum ebenfalls reduziert werden.
                                                <br /><br />
                                                Bei der geschlossenen Therapie werden unterhalb des Zahnfleischrandes Beläge und Konkremente mit Küretten, 
                                                Ultraschall oder Laser entfernt. Diese Behandlung muss meist mehrmals wiederholt werden.
                                                <br /><br />
                                                Reicht dies nicht aus oder sind die Defekte bereits sehr groß, ist es angeraten die Bereiche chirurgisch zu 
                                                behandeln sowie Knochen aufzubauen und das Zahnfleisch mit Membranen zu versorgen.
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
