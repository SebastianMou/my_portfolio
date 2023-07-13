import React from 'react'
import './contact.css'
import {AiOutlineMail} from 'react-icons/ai'
import {AiOutlineMessage} from 'react-icons/ai'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_wl84et88', 'template_mls1gez8', form.current, '94t8p48jWLrohg3nD8')
    
    e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Get in Tough</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">

        <div className="content__options">
          <article className='contact__option'>
            <AiOutlineMail className='contact__option-icons'/>
            <h3>Email</h3>
            <h5>Sebastian_Mou@protonmail.com</h5>
            <a href="mailto:Sebastian_Mou@protonmail.com" target='_blank'>send a message</a>
          </article>
          <article className='contact__option'>
            <AiOutlineMessage className='contact__option-icons'/>
            <h3>Messager</h3>
            <h5>Sebastain Mauricio</h5>
            <a href="https://m.me/sebastain.mauricio" target='_blank'>send a message</a>
          </article>
          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icons'/>
            <h3>Whatsapp</h3>
            <h5>52+ 744-505-5734</h5>
            <a href="https://wa.me/527445055734" target='_blank'>send a message</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required ></textarea>

          <button type='submit' className='btn btn-primary'>Sean Message</button>
        </form>

      </div>
    </section>
  )
}

export default Contact