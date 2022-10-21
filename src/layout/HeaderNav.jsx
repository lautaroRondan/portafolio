import React from 'react'
import { NavLink } from 'react-router-dom'

export const HeaderNav = () => {
  return (
    <div className='header'>
        <div className='logo'>
            <span>LR</span>
            <h3>Lautaro Rondan</h3>
        </div>
      
      <nav>
        <ul>
            <li>
                <a href='#home' >Inicio</a>
            </li>
            <li>
                <a href='#proyects'>Proyectos</a>
            </li>
            <li>
                <a href='#technology'>Tecnologia</a>
            </li>
            <li>
                <a href='#contact'>Contacto</a>
            </li>
        </ul>
      </nav>
    </div>
  )
}


