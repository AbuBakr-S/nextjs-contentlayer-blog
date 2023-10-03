import React from "react";
import AboutCoverSection from "../../../components/About/AboutCoverSection";
import Skills from "../../../components/About/Skills";
import Link from "next/link";

export const metadata = {
  title: "About Me",
  description: `Here are some details about my self.`,
};


const About = () => {
  return (
    <>
      <AboutCoverSection />
      <Skills />
      <h3 className="mt-8 font-semibold text-lg md:text-1xl self-start mx-5 xs:mx-10 sm:mx-12 md:mx-16 lg:mx-20 text-dark dark:text-light dark:font-normal"> 
      Have a project in mind? Reach out to me 📞 from <Link href="/contact"  className="!underline underline-offset-4"   >here</Link> and let's make it happen.
      </h3>
    </>
  )
}

export default About