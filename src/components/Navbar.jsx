import React from 'react'
import './Navbar.css'
import logo from './logo.png'

const Navbar = () => {
  return (
    <div className='text-white flex justify-between w-[85vw] m-auto '>
      <img className='navimg w-[150px] h-[70px]' src={logo} alt="" />
      <div className="navright">
        <ul className='flex'>
            <li className='m-5 font-bold'>Home</li>
            <li className='m-5 font-bold'>About</li>
            <li className='m-5 font-bold'>Our Menu</li>
            <li className='m-5 font-bold'>Shop</li>
            <li className='m-5 font-bold'>Blog</li>
            <li className='m-5 font-bold'>Contact</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
