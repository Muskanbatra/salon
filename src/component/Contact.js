import React from 'react'
import contact from '../assests/contact.jpeg'
import TextField from '@mui/material/TextField';
import { FaInstagram } from 'react-icons/fa';
import { BiLogoFacebook } from 'react-icons/bi';
import { AiOutlineTwitter } from 'react-icons/ai';
export const Contact = () => {
  return (
    <>
      <div className='h-screen md:max-w-[1200px] max-w-[90%] m-auto  md:mt-0 mt-10 '>
        <div className=' grid md:grid-cols-2 grid-cols-1 justify-center items-center '>
          <div className='contactimg py-12 md:block hidden '>
            <img src={contact} className='h-[38rem] w-[32rem] ' ></img>
          </div>

          <div className='contacthead   '>
            <h1 className='mb-10 md:text-[3rem] text-[2rem]'>Contact Us </h1>
            <div className='contactcont flex md:flex-row flex-col  gap-12'>
              <div className='md:w-[50%]'>
                <div className=' flex flex-col w-full md:gap-5 gap-3'>
                  <TextField id="standard-basic" label="Full Name" variant="standard" />
                  <TextField id="standard-basic" label="E-Mail" variant="standard" margin="dense" />
                  <TextField id="standard-basic" label="Message" variant="standard" margin="dense" />

                </div>
                <div className='contactbutton md:mt-[5rem] mt-[2rem] '>
                  <button class="md:text-[1.5rem] text-[1rem] font-pangolin border-none md:px-8 px-4 py-2 bg-[#272525] text-white rounded-full ">
                    Contact Us</button>
                </div>
              </div>

              <div className='contact2'>
                <div>
                  <h2>Contact</h2>
                  <span>higlowbeauty@gmail.com</span>
                </div>
                <div className='md:mt-[3rem] mt-[2rem]'>
                  <h2>Based in</h2>
                  <span>Jalandhar,Punjab</span>
                </div>
                <div className='flex flex-row gap-3 md:text-[2rem] text-[1.5rem]  md:mt-12 mt-6'>
                  <div>
                    <FaInstagram />
                  </div>
                  <div>
                    <BiLogoFacebook />
                  </div>
                  <div>
                    <AiOutlineTwitter />
                  </div>
                </div>

              </div>
            </div>

          </div>


        </div>

      </div>
    </>
  )
}
