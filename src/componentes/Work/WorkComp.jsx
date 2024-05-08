import React from 'react'
import '../../assets/Trabajos.css'

const WorkComp = (props) => {
  return (
    <div className='articles'>
        <article className='work-article'>
            <figure className='work-figure'>
                <img className='work-image' src={props.src} alt={props.alt} />
            </figure>
            <div className="work-resumen">
                <h2>{props.title}</h2>
                <p> {props.descr}
                </p>
            </div>
        </article>

    </div>
  )
}

export default WorkComp