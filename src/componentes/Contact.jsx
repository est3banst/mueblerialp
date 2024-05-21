import React from 'react'
import '../assets/Contact.css'


const Contact = () => {
  return (
    <>
        <form className="form">
    
    <div className="flex">
        <label>
            <input className="input" type="text" placeholder="" required="" />
            <span>Nombre</span>
        </label>

        <label>
            <input className="input" type="text" placeholder="" required="" />
            <span>Apellido</span>
        </label>
    </div>  
            
    <label>
        <input className="input" type="email" placeholder="" required="" />
        <span>Email</span>
    </label> 
        
    <label>
        <input className="input" placeholder="" type="tel" required="" />
        <span>Número de contacto</span>
    </label>
    <label>
        <textarea className="input01" placeholder="" rows="3" required=""></textarea>
        <span>Mensaje</span>
    </label>
    
    <button href="#" className="fancy">
      <span className="top-key"></span>
      <span className="text">Enviar</span>
      <span className="bottom-key-1"></span>
      <span className="bottom-key-2"></span>
    </button>
</form>
    </>
  )
}

export default Contact