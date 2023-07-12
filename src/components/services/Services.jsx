import React from 'react'
import './services.css' 
import {AiOutlineCheck} from 'react-icons/ai'
const Services = () => {
  return (
    <section id='services'>
      <h5>what i offer</h5>
      <h2>Services</h2>

      <div className='container services__container'>
        <article className='service'>
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className='service__list'>
            <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet!</p>
            </li>
            <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet!</p>
            </li>
            <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet!</p>
            </li>
            <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet!</p>
            </li>
          </ul>
        </article>
        {/* Web Development */}
        <article className='service'>
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet!</p>
            </li>
            <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet!</p>
            </li>
            <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet!</p>
            </li>
            <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet!</p>
            </li>
          </ul>
        </article>
        {/* Content Creation */}
        <article className='service'>
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>

          <ul className='service__list'>
            <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet!</p>
            </li>
            <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet!</p>
            </li>
            <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet!</p>
            </li>
            <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet!</p>
            </li>
          </ul>
        </article>
        {/* END OF UI/UX */}
      </div>

    </section>
  )
}

export default Services