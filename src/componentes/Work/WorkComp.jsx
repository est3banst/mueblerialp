import React from 'react'
import '../../assets/Trabajos.css'

const WorkComp = (props) => {
  return (
    <div className='articles p-4'>
        <article className='work-article'>
            <figure className='work-figure'>
                <img className='work-image w-full md:object-contain' src={props.src} alt={props.alt} />
            </figure>
            <div className="work-resumen p-6">
                <h2 className='text-base md:text-xl lg:text-2xl'>{props.title}</h2>
                <hr />
                <p className='custom-font font-bold text-sm md:text-base lg:text-xl'> {props.descr}
                </p>
                <p className='custom-font text-xs md:text-sm lg:text-base'>{props.time}</p>
                <p className='custom-font text-xs md:text-sm lg:text-base'>{props.precio}</p>
            </div>       
            </article>

    </div>
  )
}

export default WorkComp