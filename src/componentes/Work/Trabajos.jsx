import React from 'react';
import WorkComp from './WorkComp';
import Bed from '/imgs/works/kidbed.jpeg';
import Ropero from '/imgs/works/wardrobe.jpeg';
import RopKid from '/imgs/works/wardkid.jpeg';
import BedMont from '/imgs/works/bed-montes.png';
import Aparador from '/imgs/works/aparador-m.jpeg';
import RoperoBr from '/imgs/works/roper-br.jpeg';

const Trabajos = () => {
  return (
    <>
    <div className='grid items-center justify-center gap-3 md:gap-6 md:p-4 md:m-3 grid-cols-[repeat(auto-fit,_minmax(280px,_1fr))]'>
    <WorkComp 
    src={BedMont}
    alt='Cama Infantil Montessori'
    title='Cama Montessori'
    descr='Cama Montessori con Ropero'
    time='Tiempo estimado 12 dias'
    precio='Medidas estandar: $17.500'
    />
    <WorkComp
    src={RoperoBr}
    alt='Ropero 8 puertas 6 cajones'
    title='Ropero 8 puertas MDF'
    descr='Ropero 8 puertas MDF laminado, herrajes telescópicos'
    time='Tiempo estimado 14 dias'
    precio='Medidas estandar: $23.500'
    />
    <WorkComp
    src={Aparador}
    alt='Aparador 4 cajones 5 puertas más estantes'
    title='Aparador 4 cajones'
    descr='Aparador 4 cajones, en madera(Pino, Eucalipto, Álamo), tiradores a elección'
    time='Tiempo estimado 12 dias'
    precio='Medidas estandar: $25.000'
    />
    <WorkComp
    src={Bed}
    alt='Cama infantil'
    title='Cama Infantil'
    descr='Cama infantil con cajonera'
    time='Tiempo estimado 12 dias'
    precio='Medidas estandar: $15.000'
        />
    <WorkComp 
    src={Ropero}
    alt='Ropero 5 Puertas Blanco'
    title='Placard 5 Puertas'
    descr='Placard 5 puertas con cajones'
    time='Tiempo estimado 17 dias'
    precio='Medidas estandar: $42.000'
        />
    <WorkComp 
    src={RopKid}
    alt='Ropero 2 Puertas'
    title='Placard 2 Puertas'
    descr='Placard puertas corredizas con estantes'
    time='Tiempo estimado 11 dias'
    precio='Medidas estandar: $19.200'/>
   
   </div>
   </>
   
  )
}

export default Trabajos