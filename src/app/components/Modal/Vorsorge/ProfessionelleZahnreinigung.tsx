'use client'

import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import React, { useState } from 'react'
import Image from 'next/image'
interface ModalProps {
    openProp: boolean
    onClose: (open: boolean) => void
}

export default function ProfessionelleZahnreinigung({ openProp, onClose }: ModalProps) {
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
                                                    src={'/images/vorsorge/ProfessionelleZahnreinigung.jpg'}
                                                    alt='gaby'
                                                    width={362}
                                                    height={262}
                                                    className='inline-block m-auto w-auto mt-10 md:mt-5'
                                                />
                                            </div>
                                        </div>
                                        <DialogTitle className="text-lg md:text-xl lg:text-2xl font-medium leading-6 text-gray-900 text-center mb-5">
                                            Professionelle Zahnreinigung
                                            <p className='mt-3 text-black/60 text-lg md:text-lg lg:text-xl'>Weil zwei Mal täglich putzen nicht ausreicht</p>
                                        </DialogTitle>
                                        <div className="mt-2">
                                            <p className=" text-left leading-7 text-base sm:text-base md:text-base lg:text-lg text-black/60">
                                                Kranke Zähne oder entzündetes Zahnfleisch können den gesamten Organismus empfindlich stören und die allgemeine körperliche Gesundheit nachhaltig negativ beeinflussen. 
                                                Studien belegen, dass die regelmäßige Anwendung einer professionellen Zahnreinigung nicht nur einer Erkrankung des Zahnhalteapparates (Parodontitis) vorbeugt, 
                                                sondern auch das Risiko für Lungenentzündungen, Schlaganfälle, Herzinfarkte oder Fehlgeburten signifikant senkt.
                                                <br /><br />
                                                Die Professionelle Zahnreinigung (PZR) ist zwei Mal pro Jahr angeraten. 
                                                Jeden Tag entsteht neuer Zahnbelag, der auch mit sehr sorgfältigem Zähneputzen nicht vollumfänglich entfernt werden kann. 
                                                Die Professionelle Zahnreinigung (PZR) ist für Kinder und Erwachsene die effektivste Methode, um Zähne optimal zu säubern.
                                                <br /><br />
                                                Bei einer PZR werden die Zahnflächen sowie die Zahnzwischenräume gründlich gereinigt und die Oberflächen poliert, 
                                                so dass neben Plaque auch Verfärbungen entfernt werden. Für eine besonders gründliche Reinigung setzen wir Ultraschallgeräte ein, 
                                                um starke Ablagerungen schonend zu beseitigen.
                                                <br /><br />
                                                Mit einer Frequenz von über 20 kHz wird das Ultraschallgerät oberhalb des Zahnfleisches zur Zahnstein-Entfernung eingesetzt. 
                                                Zudem ist Ultraschall auch in der Lage unterhalb des Zahnfleisches – also auf den Wurzeloberflächen – Plaque, Zahnstein und Konkremente sanft abzutragen.
                                                <br /><br />
                                                Mit mikroskopisch kleinen Stößen zerstört der Ultraschall die pathogenen Bakterienwände und sorgt so für eine gesunde Mundflora. 
                                                Nach der professionellen Zahnreinigung erhalten die Zähne eine Fluoridierung, um den Zahnschmelz zu härten und die Zähne widerstandsfähiger gegen Karies zu machen.
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
