import React from 'react'
import '../assets/Hero.css'

const Hero = () => {
  return (
    <main className='main-hero'>
      <video 
      autoPlay
      muted
      loop
      src="/imgs/bigslabcom.mp4"></video>
            <section className='cta-hero'>
            <a className='anchor-cta' href="tel:+59898775976">
                Contáctanos hoy    
               <svg className='contact-svg' width="49px" height="49px" viewBox="0 0 20 20" fill="currentColor" x="171.5" y="171.5" 
               xmlns="http://www.w3.org/2000/svg">
                <g fill="currentColor"><path fill="currentColor"
                d="M17.256 12.253c-.096-.667-.611-1.187-1.274-1.342c-2.577-.604-3.223-2.088-3.332-3.734C12.193 7.092 11.38 7 10 7s-2.193.092-2.65.177c-.109 1.646-.755 3.13-3.332 3.734c-.663.156-1.178.675-1.274 1.342l-.497 3.442C2.072 16.907 2.962 18 4.2 18h11.6c1.237 0 2.128-1.093 1.953-2.305l-.497-3.442zM10 15.492c-1.395 0-2.526-1.12-2.526-2.5s1.131-2.5 2.526-2.5s2.526 1.12 2.526 2.5s-1.132 2.5-2.526 2.5zM19.95 6c-.024-1.5-3.842-3.999-9.95-4C3.891 2.001.073 4.5.05 6s.021 3.452 2.535 3.127c2.941-.381 2.76-1.408 2.76-2.876C5.345 5.227 7.737 4.98 10 4.98s4.654.247 4.655 1.271c0 1.468-.181 2.495 2.76 2.876C19.928 9.452 19.973 7.5 19.95 6z"/>
                </g>
                </svg> 
                </a>
            <p>Y charlamos tu siguiente proyecto</p>
            <small>Horario de atención: 8:00 - 17:00</small>
            </section>
    </main>
  )
}

export default Hero