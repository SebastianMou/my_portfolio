import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'
import Typewriter from 'typewriter-effect'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>hello, I'm</h5> 
        <h1>Sebastian Mauricio Groger Gutierrez</h1>  
        <h5 className='text-light'>
          <Typewriter
            onInit={(Typewriter) => {
              Typewriter.typeString("Fullstack Developer")
                .pauseFor(2000)
                .deleteAll()
                .typeString("UI/UX Developer")
                .pauseFor(2000)
                .deleteAll()
                .typeString("Fullstack Developer")
                .start()
            }}
          />
        </h5>
        <CTA />
        <HeaderSocials />

        <div className='me'>
          <img src={ME} alt="Sebastian Mauricio Groger Gutierrez" />  
        </div>
        
        <a href="#contact" className='scroll__down'>
            <Typewriter 
              onInit={(Typewriter) => {
                Typewriter.typeString("Scroll Down →").start()
              }}
            />
        </a> 
      </div>
    </header>
  )
}

export default Header
