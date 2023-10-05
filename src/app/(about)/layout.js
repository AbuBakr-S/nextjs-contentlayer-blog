import React from 'react'
import InsightRoll from '../../components/About/InsightRoll'

const insights = [
  "Almost 2 years Experience as a Trainee Frontend Engineer",
  "Completed Software Engineering Immersive Bootcamp at General Assembly",
  "Achieved Graph Developer - Associate Certification"
];

const AboutLayout = ({ children }) => {
  return (
    <main className="w-full flex flex-col items-center justify-between">
      <InsightRoll insights={insights} />
      {children}
    </main>
  )
}

export default AboutLayout