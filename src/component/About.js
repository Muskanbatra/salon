import React from 'react'
import a1 from '../assests/a1.jpeg'
import a3 from '../assests/a3.jpeg'
import a4 from '../assests/m1.png'
import a5 from '../assests/m2.png'
import a6 from '../assests/m3.png'
import { Footer } from './Footer'
export const About = () => {
  return (
    <>
      <div className='about'>
        <div className='ahead'>
          <div className='abouthead1'>
            <h1>THE HI-GLOW BEAUTY TEAM</h1>
          </div>
          <div className='abouthead2'>
            <span>about our team</span>
          </div>
        </div>
      </div>
      <div className='about2'>
        <div className='about2image'>
          <img src={a1}></img>
        </div>
        <div className='about2cont'>
          <div className='about2head'>
            <h1>OUR MISSION</h1>
          </div>
          <div className='about2head2'>
            <span>serving beauty with love</span>
          </div>
          <div className='about2para'>
            <p>Our Mission, To create a world where our consumers have access to a finely curated, authentic assortment of products and services that delight and elevate the human spirit. Manoj joined Nykaa as VP Operations and Chief Supply Chain Officer and has ensured the processes and operations run like clockwork.</p>
            <p>
              We share one vision- to bring inspiration and joy to people everywhere, every day. Born out of a desire to make beauty a mainstream choice, the journey began in 2012 as a digitally native, consumer-tech company</p>
          </div>
          <div className='contactbutton'>
            <button>View Our Services</button>
          </div>

        </div>
      </div>
      <div className='about2'>

        <div className='about2cont'>
          <div className='about2head'>
            <h1>MEET OUR CEO</h1>
          </div>
          <div className='about2head2'>
            <span>Bree Zorko</span>
          </div>
          <div className='about2para'>
            <p>Bree Zorko is the founder of hi-glow beauty salon.Her Mission-To create a world where our consumers have access to a finely curated, authentic assortment of products and services that delight and elevate the human spirit. Manoj joined Nykaa as VP Operations and Chief Supply Chain Officer and has ensured the processes and operations run like clockwork.</p>
            <p>
              Her vision- to bring inspiration and joy to people everywhere, every day. Born out of a desire to make beauty a mainstream choice, the journey began in 2012 as a digitally native, consumer-tech company</p>
          </div>
          <div className='contactbutton'>
            <button>Book Your Appointment</button>
          </div>

        </div>
        <div className='about21image'>
          <img src={a3}></img>
        </div>
      </div>
      <div className='about4'>
        <div className='about4head'>
          <span>EXPLORE HI-GLOW BEAUTY SALON</span>
        </div>
        <div className='aboutimages'>
          <div className='about4image1'>
            <img src={a4}></img>
          </div>
          <div className='about4image2'>
            <img src={a5}></img>
          </div>
          <div className='about4image1'>
            <img src={a6}></img>
          </div>
        </div>

      </div>
      <Footer />
    </>
  )
}
