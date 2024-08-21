import React from 'react';
import Nav from './Nav';
import '../assets/Hero.css';

const Hero = () => {
  return (
    <>
    <main className='main-hero'>
    <Nav></Nav>
      <video 
      autoPlay
      muted
      loop
      src="/imgs/bigslabcom.mp4"></video>
            <section className='cta-hero'>
            <a className='anchor-cta' href="tel:+59898775976">
                Contáctanos hoy    
                </a>
            <p>Y charlamos tu siguiente proyecto</p>
            <small>Horario de atención: 8:00 - 17:00</small>
            </section>
    </main>
  </>
  )
}

export default Hero