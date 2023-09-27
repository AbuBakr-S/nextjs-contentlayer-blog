import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import profileImage from '@/public/profile-img.png'

const Logo = () => {
  return (
    <Link className="flex items-center text-dark gap-4" href="/">
      <div className="w-16 rounded-full overflow-hidden border border-solid border-dark">
        <Image src={profileImage} alt="Abubakar" className="w-full h-auto rounded-full" />
      </div>
      <span className="font-bold text-xl">Abubakar Siddique</span>
    </Link>
  )
}

export default Logo