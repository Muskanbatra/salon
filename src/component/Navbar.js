import React from 'react'
import { Link } from 'react-router-dom'
import a1 from '../assests/logo.png'


export const Navbar = () => {
  return (
    <>
    <div className='nav h-[80px] justify-center items-center'>
     
        <span className='navhead'> The brown studio</span>
   
        <div className='tab'>
            <div><Link to={"/"}>Home</Link></div>
            <div><Link to={"/services"}>Services</Link></div>
            <div><Link to={"/about"}>About</Link></div>
            <div><Link to={"/contact"}>Contact</Link></div>
        </div>
    </div>
    </>
  )
}
