import React from 'react'
import '../../assets/Trabajos.css'

const WorkComp = (props) => {
  return (
    <div className='articles'>
        <article className='work-article'>
            <figure className='work-figure'>
                <img className='work-image w-full md:object-contain' src={props.src} alt={props.alt} />
            </figure>
            <div className="work-resumen">
                <h2 className='text-xl md:text-2xl lg:text-3xl'>{props.title}</h2>
                <p className='custom-font text-base md:text-xl lg:text-2xl'> {props.descr}
                </p>
                <p className='custom-font text-xs md:text-base lg:text-xl'>{props.time}</p>
                <p className='custom-font text-xs md:text-base lg:text-xl'>{props.precio}</p>
            </div>       
            </article>

    </div>
  )
}

export default WorkComp