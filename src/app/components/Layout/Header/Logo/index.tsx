import Image from 'next/image'
import Link from 'next/link'

const Logo: React.FC = () => {
  return (
    <Link href='/' className='flex items-center gap-4'>
      <Image
        src='/images/Logo/ZzaKK_Logo-floating.png'
        alt='logo'
        width={100}
        height={34}
        className='w-fit'
        quality={100}
      />
    </Link>
  )
}

export default Logo
