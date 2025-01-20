import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div>
      <div className="footerchildcont grid grid-cols-4 place-content-center m-10">
        <div className="four flex flex-col justify-center items-center m-5">
            <h1 className='text-3xl font-bold'>Location</h1>
            <p className='text-gray-400'>55050 waterford distrcit</p>
            <p className='text-gray-400'>Dr Miami FL 331544</p>
            <p className='text-gray-400'>United States</p>
        </div>
        <div className="four flex flex-col justify-center items-center m-5">
            <h1 className='text-3xl font-bold'>Working Hours</h1>
            <p className='text-gray-400'>Monday to Friday 9:00 to 5:00</p>
            <p className='text-gray-400'>Friday to Saturday 10:00 to 5:00</p>
            <p className='text-gray-400'>sunday to sunday 4:00 to 5:00</p>
        </div>
        <div className="four flex flex-col justify-center items-center m-5">
            <h1 className='text-3xl font-bold'>Order Now</h1>
            <p className='text-gray-400'>Lorem ipsum dolor sit amet.</p>
            <p className='text-blue-800 font-bold text-3xl'>88824212</p>
        </div>
        <div className="four flex flex-col justify-center items-center m-5">
            <h1 className='text-3xl font-bold'>Follow us</h1>
            <p className='text-gray-400'>amanullah107676@gmail.com</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
