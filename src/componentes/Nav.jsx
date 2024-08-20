import React from 'react'
import '../assets/Nav.css'
import { useState } from 'react'

const Nav = () => {
  const [isVisible, setVisible] = useState(false);
  const menuResponsive = isVisible ? 'visible' : '';

  const settingVisible = () => {
    console.log("happen")
    setVisible(!isVisible)
  }
  return (
    <>
    <header className='component-container'>
      <div className='logo-container'>
        <a href="/">
          <img className='logo' src="/imgs/gmartinezlogo.png" alt="Martinez Logo" />
        </a> </div>
      <nav className='nav-bar'>
        <ul className='nav-bar-ul'>
            <li className='menu-sections'>Nosotros
              </li>
            <li className='menu-sections'>Trabajos
            
            </li>
            <li className='menu-sections'>Contacto
            
            </li>
        </ul>

        <div className='burger-menu'>
          <svg onClick={settingVisible}
            width="46px" height="46px" viewBox="0 0 32 32" 
            fill="currentColor" x="128" y="128" role="img" 
            xmlns="http://www.w3.org/2000/svg">
            <g fill="currentColor">
            <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8h24M4 16h24M4 24h24"/></g>
          </svg>
        </div>
      </nav>
    </header>
    <div  className={`menu-responsivo ${menuResponsive}`}>
      <a className='menu-sections' href="">nosotros <svg width="24px" height="24px" viewBox="0 0 32 32" fill="currentColor" x="128" y="128" role="img" xmlns="http://www.w3.org/2000/svg"><g fill="currentColor"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m22 6l8 10l-8 10m8-10H2"/></g></svg>
      </a>
      <a className='menu-sections' href="">trabajos <svg width="24px" height="24px" viewBox="0 0 32 32" fill="currentColor" x="128" y="128" role="img" xmlns="http://www.w3.org/2000/svg"><g fill="currentColor"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m22 6l8 10l-8 10m8-10H2"/></g></svg>
      </a>
      <a className='menu-sections' href="">contacto <svg width="24px" height="24px" viewBox="0 0 32 32" fill="currentColor" x="128" y="128" role="img" xmlns="http://www.w3.org/2000/svg"><g fill="currentColor"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m22 6l8 10l-8 10m8-10H2"/></g></svg>
      </a>
    </div>
    </>
  )
}

export default Nav