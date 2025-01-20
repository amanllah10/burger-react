import React from 'react'
import './Mainupper.css'
import hero_2 from './hero-2.png'


const Mainupper = () => {
    return (
        <div className='mainuppercont h-[70vh] '>
            <div className="rlcont text-white h-[70vh] font-bold w-[90vw] m-auto flex ">
                <div className="leftmainupper ">
                    <img src={hero_2} alt="" className='' />
                </div>

                <div className="rightmainupper flex flex-col justify-center items-center ">
                    <h1 className='text-7xl'>New</h1>
                    <h1 className='text-7xl'>Burger</h1>
                    <h2 className='text-3xl mt-4 mb-4'>With onion</h2>
                    <p className='text-center mb-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, quia?</p>
                    <button className='border-2 border-black p-2 transition-all hover:bg-red-600 duration-100 text-white'>Order Now</button>
                </div>
            </div>
        </div>
    )
}

export default Mainupper
