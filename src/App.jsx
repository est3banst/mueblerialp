import React from "react"
import Hero from "./componentes/Hero"
import Trabajos from "./componentes/Work/Trabajos"
import About from "./componentes/About"
import Contact from "./componentes/Contact"
import Nav from './componentes/Nav';
import Compra from "./componentes/Compra"
import Footer from "./componentes/Footer"
import Whatsapp from "./componentes/Whatsapp"

function App() {

  return (
    <>
    <div className="grid w-[100vw] mx-2">
    <Nav/>
    <Hero />
    <About />
    <Compra />
    <Trabajos />
    <Contact />
    <Footer />
    <Whatsapp />
    </div>
    </>
  )
}

export default App
