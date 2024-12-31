import React from 'react'

export const Footer = () => {
  return (
    <>
      <div className='footerContainer' >
        <div className='topheading text-white' >
          <span className=' text-white'>muskan batra</span>
        </div>

        <div className='secTopheading' >
          <span>
            TRUSTED SALON SINCE 2015
          </span>
        </div>

        <div className='grid md:grid-cols-4 md:block hidden'>
          <div className='Subtohead' >
            <span>LET'S GET SOCIAL!</span>
          </div>
          <div className='Subtoheadsec' >
            <span>WHERE TO FIND US</span>
          </div>
        </div>

        <div className='grid md:grid-cols-4 grid-cols-2 gap-3' >
          <div className='servicesTab' >
            <div>
              <span>Instagram</span>
            </div>
            <div>
              <span>Facebook</span>
            </div>
            <div>
              <span>Twitter</span>
            </div>
            <div>
              <span>LinkedIn</span>
            </div>
          </div>

          <div className='servicesTab' >
            <div>
              <span>AMSTERDAM</span>
            </div>
            <div>
              <span>Van Diemenstraat 38
              </span>
            </div>
            <div>
              <span>1013NH Amsterdam
              </span>
            </div>
            <div>
              <span>The Netherlands</span>
            </div>
          </div>

          <div className='servicesTab' >
            <div>
              <span>OSLO</span>
            </div>
            <div>
              <span>Trondheimsveien 135
              </span>
            </div>
            <div>
              <span>0570 Oslo
              </span>
            </div>
            <div>
              <span>Norway</span>
            </div>
          </div>

          <div className='servicesTab' >
            <div>
              <span>LONDON
              </span>
            </div>
            <div>
              <span>23 Englefield Rd
              </span>
            </div>
            <div>
              <span>London N1 4JX
              </span>
            </div>
            <div>
              <span>United Kingdom</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
