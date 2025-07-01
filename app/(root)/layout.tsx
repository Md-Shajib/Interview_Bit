import Link from 'next/link';
import Image from 'next/image';
import { ReactNode } from 'react'

const RootLayout = ({children}:{children: ReactNode}) => {
  return (
    <div className='root-layout'>
      <nav className='flex items-center justify-between bg-primary-900 text-white'>
        <Link href='/' className='flex items-center gap-2'>
          <Image alt='Logo' src="/logo.png" height={32} width={38}/>
          <h2 className='text-primary-100'>VivaBit</h2>
        </Link>
        <ul className='flex items-center gap-4 list-none'>
          <li>
            <Link href='/interview' className='text-primary-100'>Interview</Link>
          </li>
          <li>
            <Link href='/about' className='text-primary-100'>About</Link>
          </li>
          <li>
            <Link href='/contact' className='text-primary-100'>Contact</Link>
          </li>
        </ul>
        <Image
          alt='Profile Image'
          src="/profile-01.png"
          height={50}
          width={50}
          className='rounded-full'
          style={{objectFit: 'cover'}}
        />
      </nav>
      {children}
    </div>
  )
}

export default RootLayout;
