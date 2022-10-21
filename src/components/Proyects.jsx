import React from 'react'
import desarrollador from '../assets/programador.png'

const Proyects = () => {
  return (
    <div id='proyects' className='proyects'>

      <h1>Mis Proyectos</h1>
      <section className="content">
        <article className="proyect-item">
          <img src={desarrollador} />
          <h2 className="title"> Desarrollo web</h2>
          <p className="description">Master JavaScript</p>

          <button className="btnProyect"> Ver proyecto</button>
          <button className="btnRepository"> Ver repositorio</button>
        </article>

        <article className="proyect-item">
          <img src={desarrollador} />
          <h2 className="title"> Desarrollo web</h2>
          <p className="description">Master JavaScript</p>

          <button className="btnProyect"> Ver proyecto</button>
          <button className="btnRepository"> Ver repositorio</button>
        </article>

        <article className="proyect-item">
          <img src={desarrollador} />
          <h2 className="title"> Desarrollo web</h2>
          <p className="description">Master JavaScript</p>

          <button className="btnProyect"> Ver proyecto</button>
          <button className="btnRepository"> Ver repositorio</button>
        </article>

        <article className="proyect-item">
          <img src={desarrollador} />
          <h2 className="title"> Desarrollo web</h2>
          <p className="description">Master JavaScript</p>

          <button className="btnProyect"> Ver proyecto</button>
          <button className="btnRepository"> Ver repositorio</button>
        </article>
      </section>






      {/* {
            trabajos.map(trabajos=>{
              return(
                <article key={trabajos.id}>
                  <div classNameName='mask'> 
                      <img src='\images\facebook.jpg' alt="sa"></img>
                  </div>
                  <span>{trabajos.categorias}</span>
                  <h2><Link to={trabajos.url}>{trabajos.nombre}</Link></h2>
                  <h3>{trabajos.tecnologias}</h3>
                  </article>
              )
            })

          } */}


    </div>
  )
}

export default Proyects
