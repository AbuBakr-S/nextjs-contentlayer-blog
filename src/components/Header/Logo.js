import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import profileImage from '@/public/profile-img.png'

const Logo = () => {
  return (
    <Link className="flex items-center text-dark gap-4 dark:text-light" href="/">
      <div className="w-12 md:w-16 rounded-full overflow-hidden border border-solid border-dark dark:border-gray  mr-2 md:mr-4">
        <Image src={profileImage} alt="Abubakar" size="33vw" className="w-full h-auto rounded-full" />
      </div>
      <span className="font-bold dark:font-semibold text-lg md:text-xl">Abubakar Siddique</span>
    </Link>
  )
}

export default Logo