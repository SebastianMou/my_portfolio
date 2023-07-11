import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {AiFillBook} from 'react-icons/ai'
import {RiServiceFill} from 'react-icons/ri'
import {BiSolidContact} from 'react-icons/bi'

const Nav = () => {
  return (
    <nav>
      <a href="#" className='active'><AiOutlineHome /></a>
      <a href="#about"><AiOutlineUser /></a>
      <a href="#experience"><AiFillBook /></a>
      <a href="#serices"><RiServiceFill /></a>
      <a href="#contact"><BiSolidContact /></a>
    </nav>
  )
}

export default Nav