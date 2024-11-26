import React from 'react';
import '../assets/Hero.css';

const Hero = () => {
  return (
    <>
    <main className='main-hero'>
      <video 
      autoPlay
      muted
      loop
      src="/imgs/bigslabcom.mp4"></video>
            <section className='flex flex-col items-center justify-center w-max p-4 md:p-6 lg:p-8 cta-hero'>
            <a className='anchor-cta flex w-max my-3 text-2xl md:text-3xl lg:text-4xl' href="tel:+59898775976">
                Contáctanos hoy    
                </a>
            <p>Y charlamos tu siguiente proyecto</p>
            <small>Lunes a viernes, horario de atención: 8:00 - 17:00</small>
            </section>
    </main>
  </>
  )
}

export default Hero