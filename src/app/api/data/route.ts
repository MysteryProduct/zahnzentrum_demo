import { NextResponse } from 'next/server'

import { HeaderItem } from '@/app/types/menu'
import { FeaturesType } from '@/app/types/features'
import { ExpertChiefType } from '@/app/types/expertchief'
import { FooterLinkType } from '@/app/types/footerlink'
import { FullMenuType } from '@/app/types/fullmenu'
import { ImageType } from '@/app/types/image'
import { PraxisTeamType } from '@/app/types/praxisteam'
import { PatientType } from '@/app/types/patient'
const HeaderData: HeaderItem[] = [
  { label: 'Start', href: '/' },
  { label: 'About Us', href: '/#aboutus' },
  { label: 'Praxis Team', href: '/#praxisteam' },
  { label: 'Kontakt', href: '/#kontakt' },
  // { label: 'Docs', href: '/documentation' },
]
const PatientData: PatientType[] = [
  {
    title : 'Hoher Servicegrad',
    description : 'Durch das angegliederte Labor können wir innerhalb einer Stunde Zähne wiederherstellen oder beim Bruch einer Prothese sofort erste Hilfe leisten. Und nach großen Eingriffen ist bei uns ein Anruf Chefsache!',
    imgSrc : '/images/Patien/Hoher-Service.svg'
  },
  {
    title : 'Digitale Technik', 
    description : 'Zähne präparieren, scannen, designen, fräsen und einsetzen – Dank einem digitalen Praxis-Workflow können wir noch präziser, sicherer und zudem umweltfreundlicher für Sie da sein.',
    imgSrc : '/images/Patien/Digitale-Technik.svg'
  },
  {
    title : 'Bezahlbare Medizin',
    description : 'Für uns sind alle Menschen gleich und deshalb spielt auch der Versicherungsstatus keine Rolle. Unser Ziel ist eine hohe zahnmedizinische Versorgung zu vernünftigen Preisen, da uns die Zahngesundheit am Herzen liegt.',
    imgSrc : '/images/Patien/Bezahlbare-Medizin.svg'
  },
]
const FeaturesData: FeaturesType[] = [
  {
    imgSrc: '/images/Features/Entspannt.svg',
    heading: 'Entspannte Behandlung',
    subheading: 'in Vollnarkose',
  },
  {
    imgSrc: '/images/Features/Erfahrung-Angst.svg',
    heading: 'Langjährige Erfahrung',
    subheading:'im Umgang mit Angst',
  },
  {
    imgSrc: '/images/Features/Soziales-Engagement.svg',
    heading: 'Soziales Engagement',
    subheading:'Humanismus als Prinzip',
  },
  {
    imgSrc: '/images/Features/Digitaler-Workflow.svg',
    heading: 'Digitaler Workflow',
    subheading:
      'für mehr Präzision',
  },
  {
    imgSrc: '/images/Features/Hygiene.svg',
    heading: 'Sehr hoher Hygienestandard',
    subheading:'für Ihre Sicherheit',
  },
  {
    imgSrc: '/images/Features/Metalfrei.svg',
    heading: 'Metallfreie Praxis',
    subheading:'für beste Gesundheit',
  }
]

const ExpertChiefData: ExpertChiefType[] = [
  {
    profession: 'Senior Chef',
    name: 'Marco Benton',
    imgSrc: '/images/Expert/boyone.png',
  },
  {
    profession: 'Junior Chef',
    name: 'Elena Rivera',
    imgSrc: '/images/Expert/girl.png',
  },
  {
    profession: 'Junior Chef',
    name: 'John Doe',
    imgSrc: '/images/Expert/boytwo.png',
  },
]
const PraxisTeamData: PraxisTeamType[] = [
  {
    profession: 'Praxisinhaber',
    name: 'Dr. Ralf Bechly',
    imgSrc: '/images/PraxisTeam/praxisteam-1.png',
    detail : 'In über 20 Jahren zahnärztlicher Tätigkeit konnte ich viel Erfahrung sammeln und habe mich zudem auf die Implantologie und die Oralchirurgie spezialisiert. Eine große Passion ist das Reisen und dies verbinde ich seit Jahren mit meiner anderen Leidenschaft – der Zahnmedizin. So habe ich im Ausland bereits viele Menschen zahnärztlich behandelt, Krankenstationen errichtet und Schulen versorgt. Ich bin Gründungsmitglied der Ethno-Zahnmedizin; einer Fachgruppe der Deutschen Gesellschaft für Zahn-, Mund- und Kieferheilkunde. Bei meiner Arbeit lege ich großen Wert auf ethisch-korrektes Verhalten, weshalb ich nur medizinisch notwendige Eingriffe durchführe, hinter denen ich auch voll und ganz stehe.',
  },
  {
    profession: 'Angestellte Zahnärztin',
    name: 'Thu Ha Burmester',
    imgSrc: '/images/PraxisTeam/praxisteam-2.png',
    detail : 'Nach der Ausbildung zur zahnmedizinischen Fachangestellten absolvierte ich noch eine Lehre zur Zahntechnikerin. Im Anschluss studierte ich in Würzburg Zahnmedizin und sammelte praktische Erfahrung als angestellte Zahnärztin. Insbesondere das Know-how aus der zahntechnischen Ausbildung erleichtert mir heute die Planung und Durchführung von komplexen und umfangreichen Versorgungen. Hervorzuheben ist bei meiner Tätigkeit die Durchführung ästhetisch anspruchsvoller Frontzahn-Restaurationen, die ich in unserem Fotostudio mittels einer speziellen Software plane, designe und umsetze. Ich bin dadurch in der Lage sehr individuell auf die Wünsche jedes Patienten einzugehen.',
  },
  {
    profession: 'Praxismanagerin',
    name: 'Nora Jacobsen',
    imgSrc: '/images/PraxisTeam/praxisteam-3.png',
    detail : '',
  },
  {
    profession: 'Prophylaxe',
    name: 'Julia Prochnau',
    imgSrc: '/images/PraxisTeam/praxisteam-4.png',
    detail : '',
  },
  {
    profession: 'Chirurgische Assistenz',
    name: 'Isabell Lange',
    imgSrc: '/images/PraxisTeam/praxisteam-5.png',
    detail : '',
  },
  {
    profession: 'Rechnungswesen',
    name: 'Lina Legin',
    imgSrc: '/images/PraxisTeam/praxisteam-6.png',
    detail : '',
  },

  {
    profession: 'Stuhlassistenz',
    name: 'Christin Rauschenberg',
    imgSrc: '/images/PraxisTeam/praxisteam-7.png',
    detail : '',
  },
  {
    profession: 'Hygienebeauftragte',
    name: 'Brit van Nahl',
    imgSrc: '/images/PraxisTeam/praxisteam-8.png',
    detail : '',
  },
  {
    profession: 'Auszubildende',
    name: 'Viviane Kurz',
    imgSrc: '/images/PraxisTeam/praxisteam-9.png',
    detail : '',
  },
  
]

const imageHomeData: ImageType[] = [
  {
    detail: 'Team',
    name: 'Marco Benton',
    imgSrc: '/images/Home/Startseitenheader-Team.jpg',
  },
  {
    detail: 'Startseite',
    name: 'Elena Rivera',
    imgSrc: '/images/Home/Startseite_Header_2.jpg',
  },
  {
    detail: 'Startseite',
    name: 'Elena Rivera',
    imgSrc: '/images/Home/Startseite_Header_3.jpg',
  },
]

const FullMenuData: FullMenuType[] = [
  {
    name: 'Grilled Salmon',
    price: '$18.99',
    description: 'Served with lemon butter sauce and grilled vegetables.',
  },
  {
    name: 'Caesar Salad',
    price: '$9.99',
    description: 'Crisp romaine with parmesan, croutons, and Caesar dressing.',
  },
  {
    name: 'Margherita Pizza',
    price: '$13.49',
    description: 'Classic pizza with tomato, mozzarella, and fresh basil.',
  },
  {
    name: 'Tomato Basil Soup',
    price: '$6.99',
    description: 'Creamy tomato soup with a hint of garlic and fresh basil.',
  },
  {
    name: 'Chocolate Lava Cake',
    price: '$7.99',
    description:
      'Warm chocolate cake with a molten center served with vanilla ice cream.',
  },
  {
    name: 'Spaghetti Carbonara',
    price: '$15.25',
    description:
      'Spaghetti tossed with eggs, pancetta, parmesan, and black pepper.',
  },
  {
    name: 'Tiramisu',
    price: '$8.50',
    description:
      'Layered espresso-soaked ladyfingers with mascarpone and cocoa.',
  },
]

const FooterLinkData: FooterLinkType[] = [
  {
    section: 'Company',
    links: [
      { label: 'Home', href: '/' },
      { label: 'About Us', href: '/#aboutus' },
      { label: 'Menu', href: '/#menu' },
      { label: 'Reserve Table', href: '/#reserve' },
    ],
  },
  {
    section: 'Support',
    links: [
      { label: 'Help/FAQ', href: '/' },
      { label: 'Press', href: '/' },
      { label: 'Affiliates', href: '/' },
      { label: 'Hotel owners', href: '/' },
      { label: 'Partners', href: '/' },
    ],
  },
]

export const GET = () => {
  return NextResponse.json({
    HeaderData,
    FeaturesData,
    ExpertChiefData,
    FullMenuData,
    FooterLinkData,
    imageHomeData,
    PraxisTeamData,
    PatientData,
  })
}
