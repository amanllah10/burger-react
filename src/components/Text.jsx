import React from 'react'
import './Text.css'

const Text = () => {
  return (
    <div className=' textcont m-10 flex flex-col justify-center items-center'>
      <h1 className='text-3xl sm:text-pink-500 sm:text-7xl  font-bold text-center w-[90%] lg:w-[70%]  m-5 '>The Burger Taste Better When You Eat it With Your Family</h1>
      <p className='text-gray-400 text-center w-[90%] lg:w-[50%] mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium autem totam laboriosam temporibus magni voluptas itaque eius fugit cupiditate distinctio.</p>
      <button className='border-2 border-black m-2 p-3 hover:bg-red-600 transition-all duration-1000 hover:text-white hover:font-bold '>Taste Now</button>
    </div>
  )
}

export default Text
