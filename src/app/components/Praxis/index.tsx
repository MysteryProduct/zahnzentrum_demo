
import { PraxisNavigation } from './PraxisNavigation' 
import {Vorsorge} from './Vorsorge'
import { Aesthetik } from './Aesthetik'
import { Zahnersatz } from './Zahnersatz'
import { Zahnerhalt } from './Zahnerhalt'
export const Praxis = () => {
  return (
    <div className=''>
      <div className='container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) p-6 lg:pt-44 pt-16'>
        <div className='grid grid-cols-12 gap-6'>
          <div className='lg:col-span-3 col-span-12 lg:block hidden'>
            <PraxisNavigation />
          </div>
          <div className='lg:col-span-9 col-span-12'>
            <Vorsorge />
            <Aesthetik />
            <Zahnersatz />
            <Zahnerhalt />
          </div>
        </div>
      </div>
    </div>
  )
}
