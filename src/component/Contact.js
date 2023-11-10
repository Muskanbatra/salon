import React from 'react'
import contact from '../assests/contact.jpeg'
import { Footer } from './Footer'
import TextField from '@mui/material/TextField';
import { FaInstagram } from 'react-icons/fa';
import { BiLogoFacebook } from 'react-icons/bi';
import { AiOutlineTwitter } from 'react-icons/ai';
export const Contact = () => {
  return (
    <>
      <div className='contact'>
        <div className='contactimg'>
          <img src={contact}></img>
        </div>

        <div className='contacthead'>
          <h1>Contact Us </h1>
          <div className='contactcont'>
            <div className='contact1'>
              <div className='contactfield'>
                <TextField  id="standard-basic" label="Full Name" variant="standard" />
                <TextField id="standard-basic" label="E-Mail" variant="standard" margin="dense" />
                <TextField id="standard-basic" label="Message" variant="standard" margin="dense" />
               
              </div>
              <div className='contactbutton'>
                <button>Contact Us</button>
              </div>
            </div>

            <div className='contact2'>
              <div>
                <h2>Contact</h2>
                <span>higlowbeauty@gmail.com</span>
              </div>
              <div className='based'>
                <h2>Based in</h2>
                <span>Jalandhar,Punjab</span>
              </div>
              <div className='iconcontact'>
              <div>
              <FaInstagram/>
              </div>
              <div>
                <BiLogoFacebook/>
              </div>
              <div>
             <AiOutlineTwitter/>
              </div>
              </div>

            </div>
          </div>

        </div>


      </div>

      <Footer />
    </>
  )
}
