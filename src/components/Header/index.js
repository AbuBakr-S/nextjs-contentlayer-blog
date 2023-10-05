"use client"
import Logo from './Logo'
import Link from 'next/link'
import { GithubIcon, LinkedInIcon, SunIcon, MoonIcon, TwitterIcon } from '../Icons'
import siteMetadata from '../../utils/siteMetaData'
import { useThemeSwitch } from '../Hooks/useThemeSwitch'
import { useState } from 'react'
import { cx } from '../../utils/helpers'

export const Header = () => {
  const [theme, setTheme] = useThemeSwitch();
  const [click, setClick] = useState();

  const toggle = () => setClick(!click);
  console.log('Test')
  return (
    <div className="w-full p-4 px-5 sm:px-10 flex items-center justify-between">
      <Logo />
      {/* Mobile Navigation Closed */}
      <button className="inline-block sm:hidden z-50" onClick={toggle} aria-label="Hamburger Menu">
        <div className="w-6 cursor-pointer transition-all ease duration-300">
          <div className="relative">
            <span className="absolute top-0 right-0 inline-block w-full h-0.5 bg-dark dark:bg-light rounded transition-all ease duration-200"
              style={{
                transform: click ? "rotate(-45deg) translateY(0)" : "rotate(0deg) translateY(6px)"
                }}
            >
              &nbsp;
            </span>
            <span className="absolute top-0 right-0 inline-block w-full h-0.5 bg-dark dark:bg-light rounded transition-all ease duration-200"
              style={{
                opacity: click ? 0 : 1
              }}
            >
              &nbsp;
            </span>
            <span className="absolute top-0 right-0 inline-block w-full h-0.5 bg-dark dark:bg-light rounded transition-all ease duration-200"
              style={{
                transform: click ? "rotate(45deg) translateY(0)" : "rotate(0deg) translateY(-6px)"
              }}
            >&nbsp;</span>
          </div>
        </div>
      </button>
      {/* Mobile Navigation Open */}
      <nav className=" w-max py-3 px-6 sm:px-8 border border-solid border-dark rounded-full font-medium capitalize  items-center flex  sm:hidden
        fixed top-6 right-1/2 translate-x-1/2 bg-light/80 backdrop-blur-sm z-50
        transition-all ease duration-300
        "
        style={{
          top: click ? "1rem" : "-5rem"
        }}
      >
        <Link href="/" className="mr-2">Home</Link>
        <Link href="/about" className="mx-2">About</Link>
        <Link href="/contact" className="mx-2">Contact</Link>
        <button onClick={() => setTheme(theme === "light" ? "dark" : "light")  }
        className={cx("w-6 h-6 ease ml-2 flex items-center justify-center rounded-full p-1", theme === "light" ? "bg-dark text-light" :
        "bg-light text-dark" )}
        aria-label="theme-switcher"
        >
          {
            theme === "light" ? <MoonIcon className={"fill-dark"} />  : <SunIcon className={"fill-dark"} />
          }
        </button>
      </nav>
      {/* Navigation */}
      <nav className="w-max py-3 px-8 border border-solid rounded-full font-medium capitalize items-center hidden sm:flex
      fixed top-6 right-1/2 translate-x-1/2 bg-light/80 backdrop-blur-sm z-50">
        <Link className="mr-2" href="/">Home</Link>
        <Link className="mx-2" href="/about">About</Link>
        <Link className="mx-2" href="/contact">Contact</Link>
        <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
          <SunIcon />
        </button>
      </nav>
      <div className="hidden sm:flex items-center">
        {/* External links */}
        <a className="inline-block w-6 h-6 mr-4" href={siteMetadata.linkedin}><LinkedInIcon className="hover:scale-125 transition-all ease duration-200" /></a>
        <a className="inline-block w-6 h-6 mr-4" href={siteMetadata.twitter}><TwitterIcon className="hover:scale-125 transition-all ease duration-200 dark:bg-light" /></a>
        <a className="inline-block w-6 h-6 mr-4" href={siteMetadata.github}><GithubIcon className="hover:scale-125 transition-all ease duration-200 dark:fill-light" /></a>
      </div>
    </div>
  )
}

export default Header