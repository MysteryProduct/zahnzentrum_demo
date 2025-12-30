import {Praxis} from '@/app/components/Praxis/'
import { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Zahnersatz | Praxis Gaby Schillinger',
  description: 'Zahnersatz aus unserer Gold- und Amalgam-freien Praxis. Hochästhetische Materialien, langzeitstabiler Zahnersatz, vollkeramische Lösungen im eigenen Meister-Labor.',
}

export default function Page() {
  return (
    <>
      <Praxis />
    </>
  )
}
