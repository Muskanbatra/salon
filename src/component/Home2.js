import React from "react";
import ma from '../assests/main5.jpg'
import m3 from '../assests/main4.jpg'
import m4 from '../assests/main6.jpg'
import m5 from '../assests/main13.jpg'
import m6 from '../assests/NNNN.jpeg'

export const Home2 = () => {
  return (
    <div className="font-sans ">

      {/* Header Section */}
      <section className="flex flex-col lg:flex-row ">
        {/* Left Section */}

        <div className="bg-[#202020] text-white lg:w-1/2 flex flex-col justify-center p-10 relative ">
          <div className="md:ml-20 ">
            <h1 className="md:text-[70px] text-[40px]  font-light homeheading">
              the
            </h1>
            <h1 className="md:text-[70px] text-[40px] font-light md:mt-[-40px]  ">
              BROW STUDIO
            </h1>
            <div className=" flex flex-row items-center mt-3" >
              <button className="bg-[#f4efe9] font-bold text-black px-8 py-4 mt-5 text-sm uppercase " >
                Book Appointment
              </button>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="relative lg:w-1/2  ">
          <img
            src={m3}// Replace with actual image
            alt="Model"
            className="w-full md:h-[100vh] h-[60vh] object-cover"
          />
        </div>
      </section>

      {/* second Section */}
      <section className="relative ">
        {/* Left Section Background */}
        <div className="absolute inset-0 bg-white w-[42%] left-0 "></div>

        {/* Right Section Background */}
        <div className="absolute inset-0 bg-[#f4efe9] w-[65%] h-full right-0"></div>

        {/* Centered Text */}
        <div className="relative z-10 px-5 text-center ">

          <h2 className="text-[1.8rem] text-[#433f3f] font-bold homeheading pt-16">Hair Salon in The City</h2>
          <p className="about2para mt-2 md:w-[600px] text-[#7e7b7b] mx-auto">
            Experience elegance and precision at our award-winning hair studio, nestled in the heart of
            the city. Transforming your look with the artistry and care you deserve.
          </p>

          {/* Right-aligned Heading */}
          <div className="flex justify-end mt-12 pr-10  md:mr-20  ">
            <h1 className="md:text-[4.5rem] text-[3rem] font-serif text-[#433f3f] homehead mt-4">OUR EXPERTISE</h1>
          </div>

        </div>
      </section>

      {/* third Section */}

      <section className="relative z-10 bg-white p-10 flex flex-col lg:flex-row items-center lg:justify-between gap-8">
        {/* Left Section Background */}
        <div className="absolute inset-0 bg-white w-[42%] h-full left-0 "></div>

        {/* Right Section Background */}
        <div className="absolute inset-0 bg-[#f4efe9] w-[65%]  h-[60%] right-0"></div>
        {/* Left Content */}
        <div className="md:ml-[10vw]  z-10 ">
          <div>
            <h3 className="md:text-[2.3rem] text-[1.7rem] text-[#433f3f] homeheading font-bold">Bridal  Makeup</h3>
            <p className="about2para mt-2 md:w-[500px] text-[#7e7b7b]">
              Your wedding day is one of the most cherished moments of your life, and we are here to make it truly unforgettable. Our specialized bridal services are designed to bring out your natural glow and enhance your beauty for the big day. From flawless makeup application to intricate hairstyling, we tailor every detail to complement your wedding theme and personal style. Our team of experts ensures that you walk down the aisle with confidence, radiating elegance and poise. Using premium products and the latest techniques, we create a timeless look that lasts all day, so you can focus on creating memories while looking stunning in every photograph. Let us be a part of your journey to create the perfect bridal look, crafted to reflect your individuality and the magic of the occasion.
            </p>
          </div>

          <button className="px-6 py-2 bg-black text-white text-sm uppercase tracking-wider hover:bg-gray-800 transition duration-300 mt-6">
            Book
          </button>
        </div>

        {/* Right Content */}
        <div className="mr-[10vw] relative">
          {/* Image Container */}
          <div className="relative">

            {/* Image */}
            <img
              src={m4}
              alt="Cosmetic Tattooing"
              className=" md:h-[500px] h-[300px]  w-full rounded-tr-[50%] rounded-tl-[50%] overflow-hidden object-cover"
            />
          </div>
          {/* Dots */}
          <div className="absolute bottom-0  top-9 left-0  w-20 h-20 grid grid-cols-6 grid-rows-6  ">
            {[...Array(36)].map((_, i) => (
              <span key={i} className="w-1 h-1 bg-[#433f3f]"></span>
            ))}
          </div>
        </div>
      </section>

      {/* fourth Section */}

      <section className="relative z-10 bg-white p-10 flex flex-col lg:flex-row items-center lg:justify-between gap-8">
        {/* Left Section Background */}
        <div className="absolute inset-0 bg-[#d6c7b7] h-full right-0"></div>

        <div className="absolute inset-0 bg-white w-[42%] h-full left-0  "></div>

        {/* Right Section Background */}


        {/* Right Content */}
        <div className="w-full lg:w-[52%] relative">
          {/* Image Container */}
          <div className="relative md:ml-[10vw]">

            <div className="absolute w-full h-full rounded-tl-[50%] rounded-tr-[50%] rounded-bl-none rounded-br-none -top-10 -z-10"></div>
            {/* Image */}
            <img
              src={ma}
              alt="Cosmetic Tattooing"
              className=" md:w-[500px] md:h-[500px] h-[300px] w-full  overflow-hidden object-cover"
            />
          </div>
          {/* Dots */}
          <div className="absolute bottom-0 right-0   w-20 h-20 grid grid-cols-6 grid-rows-6 ">
            {[...Array(36)].map((_, i) => (
              <span key={i} className="w-1 h-1 bg-[#433f3f]"></span>
            ))}
          </div>
        </div>


        {/* Left Content */}
        <div className="w-full lg:w-[42%] z-10  md:py-24 py-2 md:mr-[10vw]">
          <div>
            <h3 className="md:text-[2.3rem] text-[1.7rem] text-[#433f3f] homeheading font-bold">Professional Hairstyles</h3>
            <p className="about2para mt-2 md:w-[500px] text-[#7e7b7b]">
              Your hair is a reflection of your style and personality, and we are here to make sure it always looks its best. Whether you’re preparing for a special occasion or looking for a fresh, everyday look, our hairstyling services are tailored to suit your individual needs. From chic cuts and trendy styles to elegant updos and voluminous waves, we create looks that enhance your features and complement your lifestyle. Our skilled stylists use advanced techniques and high-quality products to ensure your hair is not only stunning but also healthy and well-maintained. Experience the transformation that comes with a perfectly styled look, designed to give you confidence and turn heads wherever you go.
            </p>
          </div>


          <button className="px-6 py-2 bg-black text-white text-sm uppercase tracking-wider hover:bg-gray-800 transition duration-300 mt-6">
            Book
          </button>
        </div>
      </section>

      {/* fifth Section */}

      <section className="relative bg-[#000000] text-white">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage: `url(${m5})`,
          }}
        ></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-[80vh] px-4 text-center">
          <h1 className="md:text-[2.3rem] text-[1.7rem] text-[#ffffff] homeheading ">
            Enhance your natural beauty,
            <br />

            while reducing the time needed for makeup

          </h1>
          <button className="mt-6 px-6 py-3 text-sm font-medium text-gray-900 bg-white rounded hover:bg-gray-300">
            Get in Touch
          </button>
        </div>
      </section>

      {/* sixth Section */}

      <section className="relative z-10 bg-white p-10 flex flex-col lg:flex-row items-center lg:justify-between gap-8">
        {/* Left Section Background */}
        <div className="absolute inset-0 bg-white w-[42%] h-full left-0 "></div>

        {/* Right Section Background */}
        <div className="absolute inset-0 bg-[#f4efe9] w-[65%]  h-[60%] right-0"></div>
        {/* Left Content */}
        <div className="md:ml-[10vw]  z-10 ">
          <div>
            <h3 className="md:text-[2.3rem] text-[1.7rem] text-[#433f3f] homeheading font-bold">Expert Nail Care</h3>
            <p className="about2para mt-2 md:w-[500px] text-[#7e7b7b]">
              Beautiful nails are the perfect finishing touch to any look, and our nail services are designed to deliver just that. Whether you’re after a classic manicure, a trendy nail art design, or a durable gel finish, we provide a range of options tailored to your style. Our skilled technicians focus on precision and creativity, ensuring your nails are not only stunning but also healthy and well-cared for. Using high-quality products and the latest techniques, we deliver results that are both flawless and long-lasting. From everyday elegance to bold, statement-making designs, we help you express your personality through your nails, giving you the confidence to shine in any setting.
            </p>
          </div>


          <button className="px-6 py-2 bg-black text-white text-sm uppercase tracking-wider hover:bg-gray-800 transition duration-300 mt-6">
            Book
          </button>
        </div>

        {/* Right Content */}
        <div className="mr-[10vw] relative">
          {/* Image Container */}
          <div className="relative">

            {/* Image */}
            <img
              src={m6}
              alt="Cosmetic Tattooing"
              className=" md:w-[500px] md:h-[500px] h-[300px] w-full  overflow-hidden object-cover"
            />
          </div>
          {/* Dots */}
          <div className="absolute bottom-0 left-0  w-20 h-20 grid grid-cols-6 grid-rows-6  ">
            {[...Array(36)].map((_, i) => (
              <span key={i} className="w-1 h-1 bg-[#433f3f]"></span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

