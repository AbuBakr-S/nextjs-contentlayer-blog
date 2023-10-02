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
      <h3 className="text-3xl font-semibold text-accent">My Skills</h3>
      <ul className="flex flex-wrap gap-5 mt-8">
        {SkillList.map((skill, index) => (
          <li 
            key={index}
            className="font-semibold border w-fit px-5 py-4 capitalize text-base hover:scale-105 transition-all ease duration-200 cursor-pointer"
          >
            {skill}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Skills