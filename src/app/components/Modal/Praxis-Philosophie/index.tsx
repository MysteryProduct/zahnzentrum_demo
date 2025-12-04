'use client'

import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { ImageType } from '@/app/types/image'
interface ModalProps {
  openProp: boolean
  onClose: (open: boolean) => void
}

export default function PraxisPhilosophie({ openProp, onClose }: ModalProps) {
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
              className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:max-w-4xl data-closed:sm:translate-y-0 data-closed:sm:scale-95"
            >
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 sm:mt-0 sm:ml-4 sm:text-left">
                    <DialogTitle className="text-xl text-center text-base font-normal text-gray-900">
                      Warum sich auch Angstpatienten bei uns wohlfühlen
                    </DialogTitle>
                    <div className="mt-3">
                      <p className="text-lg text-gray-500 sm:text-start">
                       Für uns sind alle Menschen gleich, deshalb spielt der Versicherungsstatus auch keine Rolle. 
                       Viel wichtiger ist uns ein zuverlässiges, respektvolles und korrektes Miteinander.
                      </p>
                      <p className="text-lg text-gray-500 mt-3 sm:text-start">
                        Dies ist auch der Grund für unser sehr gutes Termin-Management. 
                        Mit über 20 Praxisjahren vertrauen uns Patienten bereits seit Generationen. Wir sind bodenständig geblieben und setzen dennoch auf Innovation:
                      </p>

                      <p className="text-lg text-gray-500 mt-3 sm:text-start">
                        Wir leben den volldigitalen Workflow, da wir davon überzeugt sind, dass Kompetenz, Erfahrung und Hightech die beste Kombination für eine erfolgreiche Behandlung ist.
                      </p>

                      <p className="text-lg text-gray-500 mt-3 sm:text-start">
                        Bei aller Technik darf auch die persönliche Komponente nicht fehlen. Nachhaltigkeit, 
                        Vertrauen und Menschlichkeit sind wichtige Aspekte unserer Arbeit. 
                        Ein hoher Servicegrad zeichnet uns aus und deshalb können Sie auch in kritischen Situationen innerhalb einer Stunde auf Hilfe zählen, 
                        z.B. bei Prothesenbruch oder Unfällen.
                      </p>

                      <p className="text-lg text-gray-500 mt-3 sm:text-start">
                        Und dieser Servicegedanke erstreckt sich auf viele weitere Bereiche, wie z.B. 
                        die Möglichkeit zur Finanzierung oder online Termine zu buchen, dem barrierefreien Praxis-Zugang, kostenlosen Parkplätzen, 
                        lange Öffnungszeiten und vielem mehr.
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
