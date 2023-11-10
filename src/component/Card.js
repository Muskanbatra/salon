import React from 'react'

export const Card = ({data}) => {
  return (
    <>
    <div className='cardtag'>
        <div className='cardimg'>
            <img src= {data.image}/>
        </div>
        <div className='serviceb'>
            <button>{data.service}</button>
        </div>
        
    </div>
    </>
  )
}
