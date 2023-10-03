import React from 'react'
import Logo from './Logo'
import Link from 'next/link'
import { GithubIcon, LinkedInIcon, SunIcon, TwitterIcon } from '../Icons'

export const Header = () => {
  return (
    <div className="w-full p-4 px-10 flex items-center justify-between">
      <Logo />
      <nav className="w-max py-3 px-8 border border-solid rounded-full font-medium capitalize flex items-center 
      fixed top-6 right-1/2 translate-x-1/2 bg-light/80 backdrop-blur-sm z-50">
        <Link className="mr-2" href="/">Home</Link>
        <Link className="mx-2" href="/about">About</Link>
        <Link className="mx-2" href="/contact">Contact</Link>
        <button>
          <SunIcon />
        </button>
      </nav>
      <div>
        {/* External links */}
        <a className="inline-block w-6 h-6 mr-4" href="https://www.linkedin.com/in/abzsiddique/"><LinkedInIcon className="hover:scale-125 transition-all ease duration-200" /></a>
        <a className="inline-block w-6 h-6 mr-4" href="https://twitter.com/a_siddique_17"><TwitterIcon className="hover:scale-125 transition-all ease duration-200" /></a>
        <a className="inline-block w-6 h-6 mr-4" href="https://github.com/AbuBakr-S"><GithubIcon className="hover:scale-125 transition-all ease duration-200" /></a>
      </div>
    </div>
  )
}

export default Header