import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {BiLogoDjango} from 'react-icons/bi'
import {BsAwardFill} from 'react-icons/bs'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="about me" />
          </div>
        </div>

        <div className="about_content">
          <div className="about__cards">
            
            <article className="about__card">
              <BsAwardFill className='about__icon'/>
              <h5>Experience</h5>
              <small>1+ year Experience in djagno <BiLogoDjango/></small>
            </article>

            <article className="about__card">
              <BsAwardFill className='about__icon'/>
              <h5>Clients</h5>
              <small>1+ year Experience in djagno <BiLogoDjango/></small>
            </article>

            <article className="about__card">
              <BsAwardFill className='about__icon'/>
              <h5>Products</h5>
              <small>1+ year Experience in djagno <BiLogoDjango/></small>
            </article>

          </div>

          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore porro quae ut itaque dolores nulla voluptatem unde nisi inventore dolorum, harum excepturi praesentium eligendi, fuga dignissimos doloribus repellat maiores odio!</p>
          <div className="center-elements">
            <a href="#contact" className='btn btn-primary'>lats talk</a>
          </div>
          
        </div>
      </div>
    </section>
  )
}

export default About