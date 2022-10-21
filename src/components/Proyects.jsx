import React from 'react'
import desarrollador from '../assets/programador.png'
import { trabajos } from '../data/proyectos'


const Proyects = () => {
  return (
    <div id='proyects' className='proyects'>

      <h1>Mis Proyectos</h1>


      <section className="content">

        {
          trabajos.map(trabajos => {
            return (
              <article className="proyect-item" key={trabajos.id}>
                <img src={desarrollador} />
                <h2 className="title"> {trabajos.nombre}</h2>
                <p className="description">{trabajos.categorias}</p>
                <p className="description">{"herramientas: " + trabajos.tecnologias}</p>
                <button className="btnProyect"> Ver proyecto</button>
                <button className="btnRepository"> Ver repositorio</button>
              </article>
            )
          })
        }

      </section>

    </div>
  )
}

export default Proyects
