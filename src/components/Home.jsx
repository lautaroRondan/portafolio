import React from 'react'
import desarrollador from '../assets/programador.png'

const Home = () => {
  return (
      <header id='home' className='home'>

        <div className="datos">

          <h1>Hola!! Soy Lautaro Rondan</h1>
          <h3>Soy Full Stack Developer</h3>
          <p>Me caracterizo en la creacion de sitios web <br /> con ReactJS, NodeJS y otras tecnologias</p>

        </div>
        <div className="imgDesarrollador">
          <img src={desarrollador} />
        </div>


      </header>

  )
}


export default Home