import React from 'react'
import '../assets/Banner.css'

const Compra = () => {
  return (
    <>
    <div className='business-banner'>
        <div className="svg-container">
          <svg
            viewBox="0 0 1400 700"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M817.502 79.4996C817.502 79.4996 471.288 64.9987 508.395 94.9995C545.503 125 591.503 107 759.003 136.5C1250.34 223.034 668.039 234.994 416.503 192C135.711 167.202 650.004 358.498 1035 268C1152.35 253.448 1361.42 429.964 803.003 370.5C394.503 327 280.856 305.789 226.503 327C165.003 351 1129.5 469.998 1253.5 460.5C1357.5 438.5 1690.5 582 888.503 542L118.503 430C-33.4972 406.5 -217.997 565 872.003 582L1357.5 565C1511.5 626 1623 719.5 118.503 613.5C60.9675 609.446 -289 592 388 727"
              stroke="black"
              strokeWidth="130"
              strokeLinecap="round"
            />
          </svg>
        </div>

        <figure>
        <img src="/imgs/mobcomp.svg" alt="" />
        </figure>

        <div className="brand-container">
          <p className="fading-text">Renová tus espacios</p>
          <p className="fading-text">Muebles que perduran</p>
          <p className="fading-text">Atención personalizada</p>
        </div>
        </div>
  
    </>
  )
}

export default Compra