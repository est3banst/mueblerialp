import '../assets/Nav.css'
import React, { useState, useEffect } from "react";
import { MotionConfig, motion } from "framer-motion";



const Nav = () => {
  let isMobile;
  const [isVisible, setVisible] = useState(false);
  const [isFixed, setFixed] = useState(false);


  const setItFixed = () => {
    setFixed(!isFixed);
  }
  const settingVisible = () => {
    setItFixed();
    setVisible(!isVisible)
  }
  const headerFixed = isFixed ? 'fixed top-0 left-0 z-[9999]' : '';

  const [width, setWidth] = useState(window.innerWidth);
  isMobile = width < 520 ? true : false;
  const menuResponsive = isVisible ? 'visible' : '';

  const handleWindowSizeChange = () => {
      setWidth(window.innerWidth);
      isMobile = window.innerWidth < 520 ? true : false;
  };

   useEffect(() => {
        
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        };
    }, [width]);

  return (
    <>
    <header className={`container-bg px-6 flex w-full items-center justify-between ${headerFixed}`}>
     <div className='flex items-center w-full justify-center'>
        <a 
        className='flex items-center justify-center w-full'
        href="/">
          <img className='object-contain h-28' src="/imgs/gmartinezlogo-removebg.png" alt="Martinez Logo" />
        </a> 
        <nav className='flex w-full h-full justify-center items-center'>
        <ul className='nav-bar-ul'>
            <li className='menu-sections flex gap-1'>Nosotros<b>
              &rarr;
              </b>
              </li>
            <li className='menu-sections flex gap-1'>Trabajos
              
              <b>&rarr;</b>
            
            </li>
            <li className='menu-sections flex gap-1'>Contacto
            <b>&rarr;</b>
            
            </li>
        </ul>
      </nav>
      </div>
      {isMobile && <div className='custom-bk flex justify-center h-auto w-full m-auto'
        onClick={settingVisible}>
        <AnimatedHamburgerButton />
        </div>}
    
    </header>
    <div className={`h-[100vh] menu-responsivo ${menuResponsive}`}>
      <div className='flex flex-col items-center'>
      <a className='menu-sections' href="">nosotros 
        <svg width="24px" height="24px" viewBox="0 0 32 32" fill="currentColor" x="128" y="128" role="img" xmlns="http://www.w3.org/2000/svg"><g fill="currentColor"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m22 6l8 10l-8 10m8-10H2"/></g></svg>
      </a>
      <a className='menu-sections' href="">trabajos 
        <svg width="24px" height="24px" viewBox="0 0 32 32" fill="currentColor" x="128" y="128" role="img" xmlns="http://www.w3.org/2000/svg"><g fill="currentColor"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m22 6l8 10l-8 10m8-10H2"/></g></svg>
      </a>
      <a className='menu-sections' href="">contacto 
        <svg width="24px" height="24px" viewBox="0 0 32 32" fill="currentColor" x="128" y="128" role="img" xmlns="http://www.w3.org/2000/svg"><g fill="currentColor"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m22 6l8 10l-8 10m8-10H2"/></g></svg>
      </a>
      </div>

      <div className='flex p-5'>
        <small className='text-xs md:text-base'>Muebles personalizados, con la máxima atención en los detalles</small>
      </div>
    </div>
    </>
  )
}

const AnimatedHamburgerButton = () => {
  const [active, setActive] = useState(false);
  return (
    <MotionConfig
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
    >
      <motion.button
        initial={false}
        animate={active ? "open" : "closed"}
        onClick={() => setActive((pv) => !pv)}
        className="relative h-20 w-20 rounded-full bg-white/0 transition-colors hover:bg-white/20"
      >
        <motion.span
          variants={VARIANTS.top}
          className="absolute h-1 w-10 bg-neutral-900"
          style={{ y: "-50%", left: "50%", x: "-50%", top: "35%" }}
        />
        <motion.span
          variants={VARIANTS.middle}
          className="absolute h-1 w-10 bg-neutral-900"
          style={{ left: "50%", x: "-50%", top: "50%", y: "-50%" }}
        />
        <motion.span
          variants={VARIANTS.bottom}
          className="absolute h-1 w-5 bg-neutral-900"
          style={{
            x: "-50%",
            y: "50%",
            bottom: "35%",
            left: "calc(50% + 10px)",
          }}
        />
      </motion.button>
    </MotionConfig>
  );
};

const VARIANTS = {
  top: {
    open: {
      rotate: ["0deg", "0deg", "45deg"],
      top: ["35%", "50%", "50%"],
    },
    closed: {
      rotate: ["45deg", "0deg", "0deg"],
      top: ["50%", "50%", "35%"],
    },
  },
  middle: {
    open: {
      rotate: ["0deg", "0deg", "-45deg"],
    },
    closed: {
      rotate: ["-45deg", "0deg", "0deg"],
    },
  },
  bottom: {
    open: {
      rotate: ["0deg", "0deg", "45deg"],
      bottom: ["35%", "50%", "50%"],
      left: "50%",
    },
    closed: {
      rotate: ["45deg", "0deg", "0deg"],
      bottom: ["50%", "50%", "35%"],
      left: "calc(50% + 10px)",
    },
  },
};

export default Nav