import React from 'react'
import desarrollador from '../assets/programador.png'
import { trabajos } from '../data/proyectos'
import portafolio from '../assets/portafolio.png'
import blog from '../assets/mi-blog.png'
import redSocial from '../assets/redSocial.png'



const Proyects = () => {
  return (
    <div id='proyects' className='proyects'>

      <h1>Mis Proyectos</h1>


      <section className="content">

        {
          trabajos.map(trabajos => {
            return (
              <article className="proyect-item" key={trabajos.id}>
                {trabajos.nombre == "Blog colaborativo" ? <img src={blog}/> : <img src={redSocial}/> }
                <h2 className="title"> {trabajos.nombre}</h2>
                <p className="description">{trabajos.categorias}</p>
                <p className="description">{"Tecnologias: " + trabajos.tecnologias}</p>
                <a href={trabajos.urlRepositorioFront} target="_blank">
                <button className="btnRepository"> Repositorio Front</button>
                </a>
                <a href={trabajos.urlRepositorioBack} target="_blank">
                <button className="btnRepository"> Repositorio Back</button>
                </a>
                <a href={trabajos.urlProyecto} target="_blank">
                  {trabajos.urlProyecto != null && <button className="btnProyect"> Proyecto</button>}
                </a>
              </article>
            )
          })
        }

      </section>

    </div>
  )
}

export default Proyects
