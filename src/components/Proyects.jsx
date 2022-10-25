import React from 'react'
import desarrollador from '../assets/programador.png'
import { trabajos } from '../data/proyectos'
import portafolio from '../assets/portafolio.png'
import blog from '../assets/mi-blog.png'



const Proyects = () => {
  return (
    <div id='proyects' className='proyects'>

      <h1>Mis Proyectos</h1>


      <section className="content">

        {
          trabajos.map(trabajos => {
            return (
              <article className="proyect-item" key={trabajos.id}>
                {trabajos.nombre == "Portafolio" && <img src={portafolio} />}
                {trabajos.nombre == "Blog" && <img src={blog}/>}
                <h2 className="title"> {trabajos.nombre}</h2>
                <p className="description">{trabajos.categorias}</p>
                <p className="description">{"herramientas: " + trabajos.tecnologias}</p>
                <a href={trabajos.urlProyecto} target="_blank">
                <button className="btnProyect"> Ver proyecto</button>
                </a>
                <a href={trabajos.urlRepositorio} target="_blank">
                <button className="btnRepository"> Ver repositorio</button>
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
