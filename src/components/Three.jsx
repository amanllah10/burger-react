import React from 'react'
import pizza from './pizza.png'
import './Three.css'
import salad from './salad.png'
import delievery_bike from './delivery-bike.png'

const Three = () => {
  return (
    <div className="threecontfather bg-yellow-500">

    <div className='threecont grid grid-cols-3 w-[70%] m-auto'>
      <div className="one flex flex-col justify-center items-center m-8">
        <img src={pizza} alt="" />
        <h1 className='text-2xl font-bold m-2'>Original</h1>
        <p className='text-center'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id cum inventore esse ducimus, sit doloremque?</p>
      </div>
      <div className="one flex flex-col justify-center items-center m-8">
        <img src={salad} alt="" />
        <h1 className='text-2xl font-bold m-2'>Quality Foods</h1>
        <p className='text-center'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id cum inventore esse ducimus, sit doloremque?</p>
      </div>
      <div className="one flex flex-col justify-center items-center m-8">
        <img src={delievery_bike} alt="" />
        <h1 className='text-2xl font-bold m-2'>Fast Delievery</h1>
        <p className='text-center'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id cum inventore esse ducimus, sit doloremque?</p>
      </div>
    </div>
    </div>
  )
}

export default Three
