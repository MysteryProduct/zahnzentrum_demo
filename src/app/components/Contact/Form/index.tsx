'use client'
import React from 'react'
import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt,faPhone,faClock,faParking,faFileText } from '@fortawesome/free-solid-svg-icons'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    phnumber: '',
    outlet: '',
    time: '',
    people: '',
    Message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [showThanks, setShowThanks] = useState(false)
  const [loader, setLoader] = useState(false)
  const [isFormValid, setIsFormValid] = useState(false)

  useEffect(() => {
    const isValid = Object.values(formData).every(
      (value) => value.trim() !== ''
    )
    setIsFormValid(isValid)
  }, [formData])
  const handleChange = (e: any) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }
  const reset = () => {
    formData.fullname = ''
    formData.email = ''
    formData.phnumber = ''
    formData.outlet = ''
    formData.time = ''
    formData.people = ''
    formData.Message = ''
  }
  const handleSubmit = async (e: any) => {
    e.preventDefault()
    setLoader(true)

    fetch('https://formsubmit.co/ajax/bhainirav772@gmail.com', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({
        FullName: formData.fullname,
        Email: formData.email,
        PhoneNo: formData.phnumber,
        Outlet: formData.outlet,
        Time: formData.time,
        People: formData.people,
        Message: formData.Message,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setSubmitted(true)
          setShowThanks(true)
          reset()

          setTimeout(() => {
            setShowThanks(false)
          }, 5000)
        }

        reset()
      })
      .catch((error) => {
        setLoader(false)
        console.log(error.message)
      })
  }
  return (
    <section id='kontakt' className='scroll-mt-20'>
      <div className='container'>
        <p className='text-primary text-2xl font-normal mb-3 tracking-widest uppercase text-center'>
          Zahnzentrum am Kunst-Karree
        </p>
        <h2 className='mb-9 font-bold tracking-tight text-center'>
          Herzlich willkommen
        </h2>
        <div className='mb-12'>
          <p className='text-normal text-xl'>
            Ihr Zahnarzt hat Sie für einen oralchirurgischen oder implantologischen Eingriff an uns überwiesen?
            Oder möchten Sie einen Termin zur Vorsorge, Kontrolle, bzw.
            einen ästhetischen Eingriff? Sie sind in jedem Fall richtig bei uns!
          </p>
          <p className='text-normal text-xl mt-6'>
            Wir sind eine Bestellpraxis. Das bedeutet, dass wir Termine sehr exakt vergeben und Sie nie länger als maximal 10 Minuten warten müssen.
            Pünktlichkeit auf beiden Seiten ist hierfür die Voraussetzung.
            Kommen Sie zu Ihrem ersten Termin gerne eine Viertelstunde früher, damit wir alle Formalitäten in Ruhe erledigen können.
          </p>
          <p className='text-normal text-xl mt-6 mb-15'>
            Wir freuen uns auf Ihren Besuch im Zahnzentrum am Kunst-Karree!
          </p>
        </div>
        <div className='mb-10 grid grid-cols-1 md:grid-cols-3 gap-8'>
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-1">
              <FontAwesomeIcon icon={faMapMarkerAlt} className='text-primary text-3xl lg:text-2xl inline-block' />
            </div>
            <div className="col-start-2 col-end-12">
              <p className='text-lg font-bold'>Zahnzentrum am Kunst-Karree</p>
              <p className='text-lg'>Marie-Curie-Straße 5 21337 Lüneburg</p>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-1">
              <FontAwesomeIcon icon={faPhone} className='text-primary text-3xl lg:text-2xl inline-block' />
            </div>
            <div className="col-start-2 col-end-12">
              <p className='text-lg font-bold'>	Kontakt aufnehmen</p>
              <p className='text-lg text-primary'>04131 400640</p>
              <p className='text-normal text-primary'>info@zahnzentrum-am-kunstkarree.de</p>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-4 grid-rows-2 row-span-2">
            <div className="col-span-1">
              <FontAwesomeIcon icon={faClock} className='text-primary text-3xl lg:text-2xl inline-block' />
            </div>
            <div className="col-start-2 col-end-12 row-span-2">
              <p className='text-lg font-bold'>Öffnungszeiten</p>
              <table className='text-lg w-full mt-2 mb-4'>
                <tbody>
                  <tr className='border-b'>
                    <td className='pr-4'>Mo. und Mi.</td>
                    <td>8 bis 18 Uhr</td>
                  </tr>
                  <tr className='border-b'>
                    <td className='pr-4'>Di. und Do.</td>
                    <td>8 bis 20 Uhr</td>
                  </tr>
                  <tr className='border-b'>
                    <td className='pr-4'>Fr.</td>
                    <td>8 bis 16 Uhr</td>
                  </tr>
                </tbody>  
              </table>
              <p className='text-lg'>Außerhalb dieser Zeiten nur nach persönlicher Absprache</p>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-1">
              <FontAwesomeIcon icon={faParking} className='text-primary text-3xl lg:text-2xl inline-block' />
            </div>
            <div className="col-start-2 col-end-12">
              <p className='text-lg font-bold'>	Entspannt parken</p>
              <p className='text-lg'>Kostenlose Parkplätze</p>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-1">
              <FontAwesomeIcon icon={faFileText} className='text-primary text-3xl lg:text-2xl inline-block' />
            </div>
            <div className="col-start-2 col-end-12">
              <p className='text-lg font-bold'>Zeit sparen</p>
              <p className='text-lg text-primary'>Anamnesebogen ausfüllen</p>
              <a href='/Zahnzentrum_am_Kunstkarree_Anamnesebogen.pdf' download className='text-lg text-primary inline-block hover:underline'>Sie sind Neu-Patient?</a>
            </div>
          </div>
        </div>
        <div className='relative border px-6 py-2 rounded-3xl'>
          <form
            onSubmit={handleSubmit}
            className='flex flex-wrap w-full m-auto justify-between'>
            <div className='sm:flex gap-6 w-full'>
              <div className='mx-0 my-2.5 flex-1'>
                <label htmlFor='fname' className='pb-3 inline-block text-base'>
                  Vollständiger Name
                </label>
                <input
                  id='fname'
                  type='text'
                  name='fullname'
                  value={formData.fullname}
                  onChange={handleChange}
                  placeholder='John Doe'
                  className='w-full text-base px-4 rounded-2xl py-2.5 border-solid border transition-all duration-500 focus:border-primary focus:outline-0'
                />
              </div>
              <div className='mx-0 my-2.5 flex-1'>
                <label htmlFor='email' className='pb-3 inline-block text-base'>
                  E-Mail *
                </label>
                <input
                  id='email'
                  type='email'
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                  placeholder='john.doe@example.com'
                  className='w-full text-base px-4 rounded-2xl py-2.5 border-solid border transition-all duration-500 focus:border-primary focus:outline-0'
                />
              </div>
              <div className='mx-0 my-2.5 flex-1'>
                <label
                  htmlFor='Phnumber'
                  className='pb-3 inline-block text-base'>
                  Telefon
                </label>
                <input
                  id='Phnumber'
                  type='tel'
                  name='phnumber'
                  placeholder='+1234567890'
                  value={formData.phnumber}
                  onChange={handleChange}
                  className='w-full text-base px-4 rounded-2xl py-2.5 border-solid border transition-all duration-500 focus:border-primary focus:outline-0'
                />
              </div>
            </div>
            
            <div className='sm:flex gap-3 w-full'>

            </div>
            <div className='w-full mx-0 my-2.5 flex-1'>
              <label htmlFor='message' className='text-base inline-block'>
                Ihre Nachricht
              </label>
              <textarea
                id='message'
                name='Message'
                value={formData.Message}
                onChange={handleChange}
                className='w-full mt-2 rounded-2xl px-5 py-3 border-solid border transition-all duration-500 focus:border-primary focus:outline-0'
                placeholder='Anything else you wanna communicate'></textarea>
            </div>
            <div className='mx-0 my-2.5 w-full'>
              <button
                type='submit'
                disabled={!isFormValid || loader}
                className={`border leading-none px-6 text-lg font-medium py-4 rounded-full 
                    ${!isFormValid || loader
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    : 'bg-primary border-primary text-white hover:bg-transparent hover:text-primary cursor-pointer'
                  }`}>
                Submit
              </button>
            </div>
          </form>
          {showThanks && (
            <div className='text-white bg-primary rounded-full px-4 text-lg mb-4.5 mt-3 absolute flex items-center gap-2'>
              Thanks! Your table is booked. See you soon.
              <div className='w-3 h-3 rounded-full animate-spin border-2 border-solid border-white border-t-transparent'></div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default ContactForm
