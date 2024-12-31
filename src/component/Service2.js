import React from 'react'
import ma from '../assests/c5.jpeg'
import m4 from '../assests/c9.jpeg'
import m5 from '../assests/main13.jpg'
import m6 from '../assests/NNNN.jpeg'

export const Service2 = () => {
    return (
        <div className="font-sans ">

            {/* Header Section */}




            <section className="relative bg-[#000000] text-white">
                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-40"
                    style={{
                        backgroundImage: `url(${m5})`,
                    }}
                ></div>

                {/* Content */}
                <div className="relative z-10 flex flex-col items-center justify-center h-[90vh] px-4 text-center">
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
            {/* second Section */}


            {/* third Section */}

            <section className="relative z-10 bg-white p-10 flex flex-col lg:flex-row items-center lg:justify-between gap-8">
                {/* Left Section Background */}
                <div className="absolute inset-0 bg-white w-[42%] h-full left-0 "></div>

                {/* Right Section Background */}
                <div className="absolute inset-0 bg-[#f4efe9] w-[65%]  h-[60%] right-0"></div>
                {/* Left Content */}
                <div className="md:ml-[10vw]  z-10 ">
                    <div>
                        <h3 className="md:text-[2.3rem] text-[1.7rem] text-[#433f3f] homeheading font-bold font-[Poppins]">Bridal Makeup Packages</h3>
                        <ul className="mt-2 md:w-[500px] text-[#484848] list-disc pl-5 font-[Poppins] text-[1rem] leading-7">
                            <li><span >Basic Bridal Makeup:</span> $200</li>
                            <li><span >Premium Bridal Makeup with Hairstyling:</span> $350</li>
                            <li><span >Airbrush Bridal Makeup:</span> $400</li>
                            <li><span >Luxury Bridal Makeup Package (Includes Hairstyling and Skin Prep):</span> $550</li>
                            <li><span >Bridal Trial Session:</span> $100</li>
                            <li><span >Pre-Wedding Skin Prep Package:</span> $150</li>
                            <li><span >Party Makeup for Bridesmaids (per person):</span> $120</li>
                            <li><span >Destination Wedding Package (Customized Pricing):</span> Contact Us</li>
                            <li><span >Additional Touch-Up Services (Hourly):</span> $50</li>
                        </ul>

                    </div>

                    <button className="px-6 py-2 bg-black text-white text-sm uppercase tracking-wider hover:bg-gray-800 transition duration-300 mt-6">
                        Book
                    </button>
                </div>

                {/* Right Content */}
                <div className="md:mr-[10vw] relative">
                    {/* Image Container */}
                    <div className="relative">

                        {/* Image */}
                        <img
                            src={m4}
                            alt="Cosmetic Tattooing"
                            className=" md:w-[450px] w-full md:h-[500px] h-[300px]  overflow-hidden object-cover"
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
                            className=" md:w-[450px] w-full  md:h-[500px] h-[300px]  overflow-hidden object-cover"
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
                <div className="w-full lg:w-[42%] z-10  md:py-24 md:mr-[10vw]">
                    <div>
                        <h3 className="md:text-[2.3rem] text-[1.7rem] text-[#433f3f] homeheading font-bold font-[Poppins]">Professional Hairstyles</h3>
                        <ul className=" mt-2 md:w-[500px] text-[#484848] list-disc pl-5 font-[Poppins] text-[1rem] leading-7">
                            <li><span >Classic Haircuts:</span> $50</li>
                            <li><span >Blow-Dry and Styling:</span> $40</li>
                            <li><span >Elegant Updos:</span> $80</li>
                            <li><span >Wedding and Bridal Hairstyles:</span> $120</li>
                            <li><span >Hair Treatments (Keratin/Smoothening):</span> $150</li>
                            <li><span >Custom Hair Coloring:</span> $100+</li>
                            <li><span >Hair Extensions (Consultation Required):</span> $200+</li>
                            <li><span >Special Event Styling:</span> $90</li>
                        </ul>

                    </div>


                    <button className="px-6 py-2 bg-black text-white text-sm uppercase tracking-wider hover:bg-gray-800 transition duration-300 mt-6">
                        Book
                    </button>
                </div>
            </section>

            {/* fifth Section */}


            {/* sixth Section */}

            <section className="relative z-10 bg-white p-10 flex flex-col lg:flex-row items-center lg:justify-between gap-8 mt-12">
                {/* Left Section Background */}
                <div className="absolute inset-0 bg-white w-[42%] h-full left-0 "></div>

                {/* Right Section Background */}
                <div className="absolute inset-0 bg-[#f4efe9] w-[65%]  top-56 right-0 "></div>
                {/* Left Content */}
                <div className="md:ml-[10vw]  z-10 ">
                    <div>
                        <h3 className="md:text-[2.3rem] text-[1.7rem] text-[#433f3f] homeheading font-bold font-[Poppins]">Expert Nail Care</h3>
                        <ul className=" mt-2 md:w-[500px] text-[#484848] list-disc pl-5 font-[Poppins] text-[1rem] leading-7">
                            <li><span >Classic Manicure:</span> $25</li>
                            <li><span >Gel Manicure:</span> $40</li>
                            <li><span >Acrylic Nail Extensions:</span> $60</li>
                            <li><span >Custom Nail Art (per nail):</span> $5+</li>
                            <li><span >Spa Pedicure:</span> $50</li>
                            <li><span >French Tips:</span> $30</li>
                            <li><span >Nail Repair (per nail):</span> $10</li>
                            <li><span >Paraffin Wax Treatment:</span> $20</li>
                        </ul>

                    </div>


                    <button className="px-6 py-2 bg-black text-white text-sm uppercase tracking-wider hover:bg-gray-800 transition duration-300 mt-6">
                        Book
                    </button>
                </div>

                {/* Right Content */}
                <div className="md:mr-[10vw] relative">
                    {/* Image Container */}
                    <div className="relative">

                        {/* Image */}
                        <img
                            src={m6}
                            alt="Cosmetic Tattooing"
                            className=" md:w-[450px] w-full  md:h-[500px] h-[300px]  overflow-hidden object-cover"
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



            <section className="relative z-10 bg-white p-10 flex flex-col lg:flex-row items-center lg:justify-between gap-8">
                {/* Left Section Background */}
                <div className="absolute inset-0 bg-[#d6c7b7] h-[60vh] top-24 right-0"></div>

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
                            className=" md:w-[450px] w-full  md:h-[500px] h-[300px] overflow-hidden object-cover"
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
                <div className="w-full lg:w-[42%] z-10  md:py-24 md:mr-[10vw]">
                    <div>
                        <h3 className="md:text-[2.3rem] text-[1.7rem] text-[#433f3f] homeheading font-bold font-[Poppins]">Other Services</h3>
                        <ul className=" mt-2 md:w-[500px] text-[#484848] list-disc pl-5 font-[Poppins] text-[1rem] leading-7">
                            <li><span >Eyebrow Shaping and Tinting:</span> $30</li>
                            <li><span >Lash Extensions (Classic):</span> $80</li>
                            <li><span >Lash Extensions (Volume):</span> $100</li>
                            <li><span >Facial Treatments (Hydrating or Anti-Aging):</span> $60</li>
                            <li><span >Waxing Services (Full Body or Specific Areas):</span> $50+</li>
                            <li><span >Makeup for Special Occasions:</span> $100</li>
                            <li><span >Skin Consultation and Care Routine Setup:</span> $75</li>
                            <li><span >Henna Application for Hands or Hair:</span> $40+</li>
                        </ul>

                    </div>


                    <button className="px-6 py-2 bg-black text-white text-sm uppercase tracking-wider hover:bg-gray-800 transition duration-300 mt-6">
                        Book
                    </button>
                </div>
            </section>
        </div>
    )
}
