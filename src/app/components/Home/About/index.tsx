'use client'

import Image from 'next/image'

const About = () => {
  return (
    <section className='relative' id='aboutus'>
      <div className='container px-4'>
        {/* <div className='absolute right-0 bottom-[-18%] xl:block hidden'>
          <Image
            src='/images/Cook/burger.webp'
            alt='burger-image'
            width={463}
            height={622}
          />
        </div> */}
        <div className='grid grid-cols-1 lg:grid-cols-12 my-16 space-x-5'>
          <div className='lg:col-span-6 flex lg:justify-start justify-center sm:mb-10'>
            <Image
              src='/images/hero/img-hero3.PNG'
              alt='nothing'
              width={450}
              height={608}
            />
          </div>
          <div className='lg:col-span-6 flex flex-col justify-center items-center lg:items-start'>
            <p className='text-primary text-lg font-normal mb-3 tracking-widest uppercase lg:text-start text-center'>
              About Us
            </p>
            <h2 className='lg:text-start text-center'>
              Unser Service für Sie
            </h2>
            <p className='text-black/50 text-lg font-normal my-5 text-start'>
              Unser Ziel ist, dass Sie eine nachhaltige Zahn- und Mundgesundheit in unserer Praxis erhalten. 
              Dabei sind uns eine strukturierte und umfassende Planung sowie die Hochwertigkeit in der Ausführung besonders wichtig. 
              Hierfür stehen wir unseren Patienten mit einem 10köpfigen Praxisteam
            </p>
            <p className='text-black/50 text-lg font-normal mb-10 text-start'>
              bereits seit dem Jahr 2000 zur Seite. 
              Fachlich erwartet Sie eine langjährige Erfahrung, gepaart mit einem hohen Grad an Technik. 
              Emotional zeichnet uns eine sehr persönliche, fast familiäre Atmosphäre und ein hohes soziales Engagement aus. 
              Schön, dass Sie uns nun kennenlernen möchten!
            </p>
            {/* <button className='text-xl font-medium rounded-full text-white py-3 px-8 duration-300 bg-primary w-fit border border-primary hover:bg-transparent hover:text-primary hover:cursor-pointer'>
              Learn more
            </button> */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
