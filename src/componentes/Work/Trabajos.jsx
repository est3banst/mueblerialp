import React from 'react'
import WorkComp from './WorkComp'
import Bed from '/imgs/works/kidbed.jpeg'
import Ropero from '/imgs/works/wardrobe.jpeg'
import RopKid from '/imgs/works/wardkid.jpeg'

const Trabajos = () => {
  return (
    <>
    <WorkComp
    src={Bed}
    alt='Cama infantil'
    title='Cama Infantil'
    descr='Cama infantil con cajonera'
        />
    <WorkComp 
    src={Ropero}
    alt='Ropero 5 Puertas Blanco'
    title='Placard 5 Puertas'
    descr='Placard 5 puertas con cajones'
        />
    <WorkComp 
    src={RopKid}
    alt='Ropero 2 Puertas'
    title='Placard 2 Puertas'
    descr='Placard puertas corredizas con estantes'/>
    </>
  )
}

export default Trabajos