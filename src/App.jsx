import React from "react"
import Hero from "./componentes/Hero"
import Trabajos from "./componentes/Work/Trabajos"
import About from "./componentes/About"
import Contact from "./componentes/Contact"
import Compra from "./componentes/Compra"
import Whatsapp from "./componentes/Whatsapp"
import { Client } from "./componentes/Client"

function App() {

  return (
    <>
    <Hero />
    <Compra />
    <Trabajos />

    <About />
    <Client />
    <Contact />
    <Whatsapp />
    </>
  )
}

export default App
