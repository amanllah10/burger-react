import React from 'react'
import './Advertise.css'
import ads_1 from './ads-1.jpg'
import ads_2 from './ads-2.jpg'

const Advertise = () => {
    return (
        <div className='advertisecont w-[80%] m-auto flex'>
            <div className="advertiseleft flex">
                <img className='img1 ' src={ads_1} alt="" />
                <div className="aikaur flex flex-col justify-center items-center">
                    <h1 className='text-4xl'>Get Your</h1>
                    <h1 className='text-4xl'>Chees fries</h1>
                    <button className='m-3 bg-red-600 text-white border-2 border-black p-2'>Learn more</button>
                </div>
            </div>
            <div className="advertiseright flex">
                <img className='img2 ' src={ads_2} alt="" />
                <div className="aikaur flex flex-col justify-center items-center">
                    <h1 className='text-4xl'>Get Your</h1>
                    <h1 className='text-4xl'>Chees fries</h1>
                    <button className='m-3 bg-red-600 text-white border-2 border-black p-2'>Learn more</button>
                </div>
            </div>
        </div>
    )
}

export default Advertise
