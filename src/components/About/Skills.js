import React from 'react'

const SkillList = [
  "react",
  "javaScript",
  "typescript",
  "tailwind css",
  "next.js",
  "figma",
  "web design",
  "wireframing",
  "SEO",
];

const Skills = () => {
  return (
    <section className="w-full flex flex-col p-5 xs:p-10 sm:p-12 md:p-16 lg:p-20 border-b-2 border-solid border-dark dark:border-light
    text-dark dark:text-light">
      <h3 className="sm:text-3xl md:text-4xl font-semibold text-accent dark:text-accentDark">My Skills</h3>
      <ul className="flex flex-wrap gap-5 mt-8 justify-center xs:justify-start">
        {SkillList.map((skill, index) => (
          <li 
            key={index}
            className="font-semibold inline-block capitalize text-base xs:text-sm md:text-lg py-2 xs:py-3 sm:py-4 lg:py-4 px-4 xs:px-6 sm:px-8 lg:px-12 border-2 border-solid border-dark dark:border-light rounded mr-3 mb-3 xs:mr-4 xs:mb-4  md:mr-6 md:mb-6 hover:scale-105 transition-all ease duration-200 cursor-pointer dark:font-normal"
          >
            {skill}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Skills