import React from 'react'
import image from '../assests/Untitled design.png'
import piclogo from '../assests/G.png'
import mb from '../assests/m1.jpeg'
import mp from '../assests/m2.jpeg'
import mn from '../assests/m3.jpeg'
import ma from '../assests/m4.jpeg'
import h1 from '../assests/h1.jpeg'
import h2 from '../assests/h2.jpeg'
import h3 from '../assests/h3.jpeg'
import h4 from '../assests/h4.jpeg'
import s1 from '../assests/s1.jpeg'
import s2 from '../assests/s2.jpeg'
import s3 from '../assests/s3.jpeg'
import s4 from '../assests/s4.jpeg'
import n1 from '../assests/n1.jpeg'
import n2 from '../assests/n2.jpeg'
import n3 from '../assests/n3.jpeg'
import n4 from '../assests/n4.jpeg'
import { Footer } from './Footer'

export const Home = () => {
  return (
    <>
      <div className='container'>

        <div className='mb'>
          <div className='piclogo'>
            <img src={piclogo}></img>
          </div>
          <div className='conthead'><span>Welcome to offical website of </span></div>
          <div className='conthead'><span>hi-glow beauty salon </span></div>

          <div className='contbutton'>
            <button>Book an Appointment</button>
          </div>
        </div>

        <div className='img'>
          <img src={image}></img>

        </div>

      </div>
      <div className='makeup'>
        <div className='makeuphead'><h1>Get your perfect look on your special occassions</h1></div>

        <div className='makeuppiccont'>
          <div className='makeuppic'>
            <img src={mp}></img>
          </div>
          <div className='makeuppic'>
            <img src={mb}></img>

          </div>
          <div className='makeuppic'>
            <img src={mn}></img>
          </div>
          <div className='makeuppic'>
            <img src={ma}></img>
          </div>
          
        </div>
      </div>

      <div className='makeup'>
        <div className='makeuphead'><h1>Get the perfect hairstyle with our hair related services</h1></div>

        <div className='makeuppiccont'>
          <div className='makeuppic'>
            <img src={h4}></img>
          </div>
          <div className='makeuppic'>
            <img src={h1}></img>

          </div>
          <div className='makeuppic'>
            <img src={h2}></img>
          </div>
          <div className='makeuppic'>
            <img src={h3}></img>
          </div>
        </div>
      </div>

      <div className='makeup'>
        <div className='makeuphead'><h1>Get beautiful nails with our nail related services </h1></div>

        <div className='makeuppiccont'>
          <div className='makeuppic'>
            <img src={n1}></img>
          </div>
          <div className='makeuppic'>
            <img src={n2}></img>

          </div>
          <div className='makeuppic'>
            <img src={s3}></img>
          </div>
          <div className='makeuppic'>
            <img src={s4}></img>
          </div>
        </div>
      </div>
      <div className='makeup'>
        <div className='makeuphead'><h1>Every type of skin treatment available with manicure and padicure </h1></div>

        <div className='makeuppiccont'>
          <div className='makeuppic'>
            <img src={s1}></img>
          </div>
          <div className='makeuppic'>
            <img src={s2}></img>

          </div>
          <div className='makeuppic'>
            <img src={n3}></img>
          </div>
          <div className='makeuppic'>
            <img src={n4}></img>
          </div>
        </div>
      </div>

      <Footer/> 
    </>
  )


}





