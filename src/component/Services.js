import React from 'react'
import { Card } from './Card'
import color from '../assests/m.png'
import c1 from '../assests/c1.jpeg'
import c2 from '../assests/c2.jpeg'
import c3 from '../assests/c3.jpeg'
import c4 from '../assests/c4.jpeg'
import c5 from '../assests/c5.jpeg'
import c6 from '../assests/c6.jpeg'
import c7 from '../assests/c7.jpeg'
import c8 from '../assests/c8.jpeg'
import c9 from '../assests/c9.jpeg'
import { Footer } from './Footer'
export const Services = () => {

  const data = [
    {
      id: 1,
      image: c1,
      service: "MAKEUP"
    },

    {
      id: 2,
      image: c2,
      service: "HAIRSTYLES"
    },

    {
      id: 3,
      image: c3,
      service: "HAIR TREATMENTS"
    },

    {
      id: 4,
      image: c4,
      service: "FACIALS"
    },

    {
      id: 5,
      image: c5,
      service: "MEHNDI"
    },

    {
      id: 6,
      image: c6,
      service: "HAIR COLOR"
    },
    {
      id: 7,
      image: c7,
      service: "WAXING"
    },
    {
      id: 8,
      image: c8,
      service: "THREADING"
    },
    {
      id: 9,
      image: c9,
      service: "BRIDAL PACKAGE"
    },






  ]


  return (

    <>
      <div className='service'>
        <div className='serviceheading'>
          <span>OUR SERVICES</span>
        </div>



        <div className='card'>
          {
            data.map((item, index) => (
              <Card data={item} key={index} />
            )
            )
          }
        </div>

      </div>


      <Footer/> 

    </>
  )
}
