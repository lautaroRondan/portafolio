import React from 'react'
import react from '../assets/react.png'
import css from '../assets/css-3.png'
import html from '../assets/html-5.png'
import js from '../assets/js.png'
import node from '../assets/nodejs.png'
import mongo from '../assets/mongodb.png'


const Technology = () => {
  return (
    <div id='technology' className='technology'>


      <h1>Mis Habilidades</h1>

      <div className="slider">

        <div className="slide-track">

          <div className="slide">
            <img src={html} />
          </div>

          <div className="slide">
            <img src={css} />
          </div>

          <div className="slide">
            <img src={js} />
          </div>

          <div className="slide">
            <img src={node} />
          </div>

          <div className="slide">
            <img src={react} />
          </div>

          <div className="slide">
            <img src={mongo} />
          </div>

          <div className="slide">
            <img src={html} />
          </div>

          <div className="slide">
            <img src={css} />
          </div>

          <div className="slide">
            <img src={js} />
          </div>

          <div className="slide">
            <img src={node} />
          </div>

          <div className="slide">
            <img src={react} />
          </div>

          <div className="slide">
            <img src={mongo} />
          </div>

        </div>

      </div>

    </div>
  )
}


export default Technology