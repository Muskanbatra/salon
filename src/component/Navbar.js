import React from 'react'
import { Link } from 'react-router-dom'


export const Navbar = () => {
  return (
    <>
    <div className='nav'>
        <div className='logo'>
            <span> Hi - Glow  Beauty    Salon</span>
        </div>
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
