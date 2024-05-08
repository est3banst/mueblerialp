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
      </nav>
    </header>
  )
}

export default Nav