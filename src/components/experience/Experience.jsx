import React from 'react'
import './experience.css'
import {AiFillCheckCircle} from 'react-icons/ai'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills i have</h5>
      <h2>my experience</h2>
      <br />
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">

            <article className='experience__detail'>
                <AiFillCheckCircle className='experience__detail-icon' />
              <div>
                <h4><b>HTML 5</b></h4>
                <small className='text-light'>Experience</small>
              </div>
            </article>
            <article className='experience__detail'>
              <AiFillCheckCircle className='experience__detail-icon' />
              <div>
                <h4><b>CSS</b></h4>
                <small className='text-light'>Experience</small>
              </div>
            </article>
            <article className='experience__detail'>
              <AiFillCheckCircle className='experience__detail-icon' />
              <div>
                <h4><b>BootStrap 5</b></h4>
                <small className='text-light'>Experience</small>
              </div>
            </article>
            <article className='experience__detail'>
              <AiFillCheckCircle className='experience__detail-icon' />
              <div>
                <h4><b>JavaScript</b></h4>
                <small className='text-light'>Basic</small>
              </div>
            </article>
            <article className='experience__detail'>
              <AiFillCheckCircle className='experience__detail-icon' />
              <div>
                <h4><b>React</b></h4>
                <small className='text-light'>Basic</small>
              </div>
            </article>
            
          </div>
        </div>
        <div className="experience__backend">
        <h3>Backend Development</h3>
          <div className="experience__content">
            <article className='experience__detail'>
              <AiFillCheckCircle className='experience__detail-icon' />
              <div>
                <h4><b>Django</b></h4>
                <small className='text-light'>Experience</small>
              </div>
            </article>
            <article className='experience__detail'>
              <AiFillCheckCircle className='experience__detail-icon' />
              <div>
                <h4><b>Python3</b></h4>
                <small className='text-light'>Experience</small>
              </div>
            </article>
            <article className='experience__detail'>
              <AiFillCheckCircle className='experience__detail-icon' />
              <div>
                <h4><b>PostgreSQL</b></h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__detail'>
              <AiFillCheckCircle className='experience__detail-icon' />
              <div>
                <h4><b>Heroku</b></h4>
                <small className='text-light'>Experience</small>
              </div>
            </article>
            <article className='experience__detail'>
              <AiFillCheckCircle className='experience__detail-icon' />
              <div>
                <h4><b>Amazon Web Services</b></h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience