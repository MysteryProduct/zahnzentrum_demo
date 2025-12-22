'use client'
import { PatientType } from '@/app/types/patient'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'

const Patient = () => {
    const [patientDetails, setPatientDetails] = useState<PatientType[]>([])
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('/api/data')
                if (!res.ok) throw new Error('Failed to fetch')
                const data = await res.json()
                setPatientDetails(data.PatientData)
            } catch (error) {
                console.error('Error fetching services:', error)
            }
        }
        fetchData()
    }, [])
    return (
        <section className="py-12" style={{ backgroundColor: '#df6853' }}>
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 text-white text-center">Was Patienten an uns besonders schätzen</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {patientDetails.map((patient, index) => (
                        <div key={index}>
                            <div className="grid grid-cols-4 gap-4 items-center">
                                <div className="col-span-1">
                                    <Image src={patient.imgSrc} alt={patient.title} width={80} height={80} />
                                </div>
                                <div className="col-start-2 col-end-5 text-white font-bold text-xl">{patient.title}</div>
                            </div>
                            <p className="mt-4 mb-15 text-white">{patient.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
export default Patient