import React from 'react'
import LottieAnimation from '../../../components/Contact/LottieAnimation'
import ContactForm from '../../../components/Contact/ContactForm'

const Contact = () => {
  return (
    <section className="w-full h-[75vh] border-solid border-b-2 dark:border-light flex flex-col md:flex-row items-center justify-center text-dark dark:text-light">
      <div className="inline-block w-2/5 h-full border-r-2 border-solid border-dark"><LottieAnimation /></div>
      <div className="w-3/5 flex flex-col items-start justify-center px-16 pb-8">
        <h2 className="font-bold text-4xl">Let's Connect!</h2>
        <ContactForm />
      </div>
    </section>
  )
}

export default Contact