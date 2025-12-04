'use client'

import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { ImageType } from '@/app/types/image'
interface ModalProps {
  openProp: boolean
  onClose: (open: boolean) => void
}

export default function PraxisKonzept({ openProp, onClose }: ModalProps) {
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
                      Bezahlbare Medizin für Jedermann
                    </DialogTitle>
                    <div className="mt-3">
                      <p className="text-lg text-gray-500 sm:text-start">
                        Wir bieten ein sehr umfangreiches Behandlungsspektrum an: Alles aus einer Hand und das auf hohem Niveau unter Einsatz modernster Technik.
                        So reicht unser Portfolio von der Vorsorge für Kinder und Erwachsene, über die erhaltende Zahnmedizin bis zur Oralchirurgie.
                      </p>
                      <p className="text-lg text-gray-500 mt-3 sm:text-start">
                        Und auch bei implantologischen Eingriffen sind wir gerne für Sie da.
                        Ein besonderer Pluspunkt ist ein in die Praxis integriertes zahntechnisches Meister-Labor,
                        das die Behandlungen für unsere Patienten noch einfacher,
                        sicherer und zeitschonender gestaltet – und zudem die Umwelt schont.
                        Wir verwenden moderne, allergiefreie und biokompatible Materialien.
                      </p>

                      <p className="text-lg text-gray-500 mt-3 sm:text-start">
                        Als metallfreie Praxis verzichten wir ganz bewusst auf Gold und Amalgam.
                        Zum optimalen Schutz Ihrer Gesundheit haben wir sehr hohe Hygienestandards etabliert,
                        setzen auf innovative Technik und digitalen Workflow,
                        wodurch sehr schonende Eingriffe möglich werden.
                      </p>

                      <p className="text-lg text-gray-500 mt-3 sm:text-start">
                        Diese bieten wir auch in Vollnarkose an, z.B. für Angstpatienten,
                        bei umfassenden Versorgungen, Weisheitszahn-Entfernungen oder bei der Behandlung von Menschen mit Einschränkungen, bzw.
                        bestimmten Krankheitsbildern.
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
