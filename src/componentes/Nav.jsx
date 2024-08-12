import React from 'react'
import '../assets/Nav.css'

const Nav = () => {
  return (
    <header className='component-container'>
      <div className='logo-container'>
        <a href="/">
          <img className='logo' src="/imgs/gmartinezlogo.png" alt="Martinez Logo" />
        </a> </div>
      <nav className='nav-bar'>
        <ul className='nav-bar-ul'>
            <li>Nosotros</li>
            <li>Trabajos</li>
            <li>Contacto</li>
        </ul>

        <div className='burger-menu'>
          <svg 
            width="46px" height="46px" viewBox="0 0 32 32" 
            fill="currentColor" x="128" y="128" role="img" 
            xmlns="http://www.w3.org/2000/svg">
            <g fill="currentColor">
            <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8h24M4 16h24M4 24h24"/></g>
          </svg>
        </div>
      </nav>
    </header>
  )
}

export default Nav