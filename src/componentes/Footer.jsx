import React from 'react'

const Footer = () => {
  return (
    <>
    <footer className='bg-[#f5efe8] h-[50vh] flex flex-col justify-between p-6'>
    <div className='flex flex-col'>
    <p className='text-xl md:text-2xl lg:text-3xl'>Servicios de carpinteria profesionales y de calidad</p>
    <p className='text-base md:text-lg lg:text-xl'>Trabajos en todo el país</p>
    <a href="">
      Servicios
      </a>
    <a href="">
      Galería
      </a>
    <a href="">
      Contacto
    </a>
    </div>
    <div>
      <small>CARPINTERIA MARTINEZ &copy; {new Date().getFullYear()}</small>
      </div>
    </footer>
    </>
  )
}

export default Footer