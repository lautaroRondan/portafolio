import React from 'react'
import emailjs from '@emailjs/browser'
import { useRef } from 'react';

const Contact = () => {

  const form = useRef();

  const enviarEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ijcnh7f', 'template_qizxdpl', form.current, 'hSyAX4R2koZ5JcUMY')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    contactform.reset();
  };

  return (

    <div id='contact' className='contact'>

      <h1>Contactame</h1>

      <form id='contactform' className='formContact' ref={form} onSubmit={enviarEmail} >
        <input type="text" placeholder="Nombre" name="from_name" />
        <input type="text" placeholder="Email" name="reply_to" />
        <textarea placeholder='Motivos del contacto' name="message" />
        <input type="submit" value="Enviar" />
      </form>

    </div>
  )
}

export default Contact
