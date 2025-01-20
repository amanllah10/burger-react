import React from 'react'
import './Showburger.css'
import showburger from './showburger.jpg'

const Showburger = () => {
    return (
        <div className='showburgercont mt-[10vh] w-[80%] m-auto flex'>
            <div className="img">

                <img className='h-[80vh] ' src={showburger} alt="" />
            </div>
            <div className="pandh1 flex flex-col justify-center items-center">
                <h1 className='text-5xl m-5'>Nothing Bring People Together Like a Good Burger</h1>
                <p className='m-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate temporibus aperiam natus eveniet beatae quo omnis architecto odit, cum ab deserunt quisquam libero quis. Quaerat.</p>
                <li className='m-5'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit sed, neque dolores architecto necessitatibus odio.</li>
                <li className='m-5'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit sed, neque dolores architecto necessitatibus odio.</li>
                <li className='m-5'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit sed, neque dolores architecto necessitatibus odio.</li>
            </div>
        </div>
    )
}

export default Showburger
