import React from 'react'
import './Afterparallex.css'
import everything from './everything2.webp'
import playstore from './playstore.jpg'
import apple from './apple.png'

const Afterparallex = () => {
  return (
    <div className='bg-yellow-500'>
      <div className="afterparallexcont h-[auto] lg:h-[100vh] flex w-[80%] m-auto">
        <div className="afterpright flex flex-col justify-center items-center basic-[1/2]">
            <h1 className='text-5xl m-2'>Download Mobile App</h1>
            <h1 className='text-5xl m-2'>And save Up to 20%</h1>
            <p className='m-2 font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, ipsum.</p>
            <div className="baapcont flex">
                <div className="baapleft p-2 m-5  w-[200px] flex bg-black  border-2 border-white text-white">
                    <img className='h-[50px] w-[70px] p-2' src={playstore} alt="" />
                    <div className="baapp">
                        <h1 className=''>Get it on</h1>
                        <h1 className=''>Google play</h1>
                    </div>
                </div>
                <div className="baapright p-2 m-5  w-[200px] flex bg-black border-2 border-white  text-white">
                    <img className='h-[50px] w-[70px] p-2' src={apple} alt="" />
                    <div className="baapp">
                        <h1 className=''>Get it on</h1>
                        <h1 className=''>App Store</h1>
                    </div>
                </div>
            </div>
            
        </div>
        <div className="afterpleft flex flex-col justify-center items-center basic-[1/2]">
            <img className='h-[70vh]' src={everything} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Afterparallex
