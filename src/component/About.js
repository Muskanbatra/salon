import React from 'react'
import a1 from '../assests/a1.jpeg'
import a3 from '../assests/a3.jpeg'
import a4 from '../assests/m1.png'
import a5 from '../assests/m2.png'
import a6 from '../assests/m3.png'
export const About = () => {
  return (
    <>
      <div className='about md:pb-[18rem] py-16 md:pt-[16rem] '>
        <div className='ahead'>
          <div className='abouthead1'>
            <h1 className='md:text-[3rem] text-[2rem]'>THE HI-GLOW BEAUTY TEAM</h1>
          </div>
          <div className='abouthead2'>
            <span className='md:text-[2rem] text-[1rem]'>about our team</span>
          </div>
        </div>
      </div>
      <div className='about2 bg-white'>

        <div className='about2 grid md:grid-cols-2  grid-cols-1  md:max-w-[1200px] max-w-[90%] m-auto justify-center items-center'>
          <div class="about2image md:mx-[6rem] md:my-[4rem] mt-7">
            <img src={a1} class="md:h-[35rem] h-[300px] w-full md:rounded-t-[200px] object-cover" ></img>
          </div>
          <div className='md:mr-3 md:py-0 py-5 '>
            <div className='about2head'>
              <h1 className='md:text-[3rem] text-[2rem]'>OUR MISSION</h1>
            </div>
            <div className='about2head2'>
              <span className='md:text-[1.5rem] text-[1rem]'>serving beauty with love</span>
            </div>
            <div className='about2para'>
              <p>Our Mission, To create a world where our consumers have access to a finely curated, authentic assortment of products and services that delight and elevate the human spirit. Manoj joined Nykaa as VP Operations and Chief Supply Chain Officer and has ensured the processes and operations run like clockwork.</p>
              <p>
                We share one vision- to bring inspiration and joy to people everywhere, every day. Born out of a desire to make beauty a mainstream choice, the journey began in 2012 as a digitally native, consumer-tech company</p>
            </div>
            <div className=' mt-[3rem]'>
              <button class="md:text-[1.5rem] text-[1rem] font-pangolin border-none md:px-8 px-4 py-2 bg-[#272525] text-white rounded-full ">
                View Our Services</button>
            </div>

          </div>
        </div>
      </div>
      <div className=' bg-[#f4efe9]'>

        <div className='about2 grid md:grid-cols-2  grid-cols-1  md:max-w-[1200px] max-w-[90%] m-auto justify-between items-center md:py-16 py-5 '>

          <div className='md:mr-3 '>
            <div className='about2head'>
              <h1 className='md:text-[3rem] text-[2rem]' >MEET OUR CEO</h1>
            </div>
            <div className='about2head2'>
              <span className='md:text-[1.5rem] text-[1rem]'>Bree Zorko</span>
            </div>
            <div className='about2para'>
              <p>Bree Zorko is the founder of hi-glow beauty salon.Her Mission-To create a world where our consumers have access to a finely curated, authentic assortment of products and services that delight and elevate the human spirit. Manoj joined Nykaa as VP Operations and Chief Supply Chain Officer and has ensured the processes and operations run like clockwork.</p>
              <p>
                Her vision- to bring inspiration and joy to people everywhere, every day. Born out of a desire to make beauty a mainstream choice, the journey began in 2012 as a digitally native, consumer-tech company</p>
            </div>
            <div className=' md:mt-[3rem] mt-[2rem]'>
              <button class="md:text-[1.5rem] text-[1rem] font-pangolin border-none md:px-8 px-4 py-2 bg-[#272525] text-white rounded-full ">
                Book Your Appointment</button>
            </div>

          </div>
          <div className='my-5 md:mx-12'>
            <img src={a3} className='md:h-[500px] object-cover h-[300px] w-full'></img>
          </div>
        </div>
      </div>
      <div className='max-w-[1200px] m-auto justify-center items-center pt-16 pb-24'>
        <div className='about4head text-center mb-9 '>
          <span className='md:text-[2.5rem] text-[2rem]'>EXPLORE HI-GLOW BEAUTY SALON</span>
        </div>
        <div className='aboutimages grid md:grid-cols-3 grid-cols-1 gap-6 md:mt-4'>
          <div className='about4image1 '>
            <img src={a4} className='object-cover h-[450px] md:block hidden'></img>
          </div>
          <div className='about4image2'>
            <img src={a5} className='object-cover md:h-[500px] h-[300px] w-full'></img>
          </div>
          <div className='about4image1'>
            <img src={a6} className='object-cover h-[450px] md:block hidden'></img>
          </div>
        </div>

      </div>
    </>
  )
}
