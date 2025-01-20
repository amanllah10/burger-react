import React from 'react'
import './Product.css'
import burger_11 from './burger-11.jpg'
import burger_12 from './burger-12.jpg'
import burger_13 from './burger-13.jpg'
import burger_14 from './burger-14.jpg'
import burger_15 from './burger-15.jpg'
import burger_16 from './burger-16.jpg'
import burger_17 from './burger-17.jpg'

const Products = () => {
  return (
    <div className='productcontfather '>
      <div className="productcont mt-20">
        <div className="textcont flex flex-col justify-center items-center">
            <h1 className='text-center font-bold text-3xl sm:text-7xl m-3 text-red-600 '>Our Crazy Burgers</h1>
            <p className='text-gray-400 w-[90%] sm:w-[50%] text-center font-bold'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi, nesciunt! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus, asperiores?</p>
        </div>
        <div className="productcontchild">
            <div className="pchilds">
                <img src={burger_11} alt="" />
                <h1 className = 'text-3xl'>Qeema burger</h1>
                <p>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p>
                <button className='border-2 border-black p-2 m-3 w-[100px] bg-purple-300 flex justify-center items-center text-red-600 '>35$</button>
            </div>
            <div className="pchilds">
                <img src={burger_12} alt="" />
                <h1 className = 'text-3xl'>Zinger burger</h1>
                <p>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p>
                <button className='border-2 border-black p-2 m-3 w-[100px] bg-purple-300 flex justify-center items-center text-red-600 '>35$</button>
            </div>
            <div className="pchilds">
                <img src={burger_13} alt="" />
                <h1 className = 'text-3xl'>Chicken burger</h1>
                <p>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p>
                <button className='border-2 border-black p-2 m-3 w-[100px] bg-purple-300 flex justify-center items-center text-red-600 '>35$</button>
            </div>
            <div className="pchilds">
                <img src={burger_14} alt="" />
                <h1 className = 'text-3xl'>Karahi burger</h1>
                <p>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p>
                <button className='border-2 border-black p-2 m-3 w-[100px] bg-purple-300 flex justify-center items-center text-red-600 '>35$</button>
            </div>
            <div className="pchilds">
                <img src={burger_15} alt="" />
                <h1 className = 'text-3xl'>Qorma burger</h1>
                <p>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p>
                <button className='border-2 border-black p-2 m-3 w-[100px] bg-purple-300 flex justify-center items-center text-red-600 '>35$</button>
            </div>
            <div className="pchilds">
                <img src={burger_16} alt="" />
                <h1 className = 'text-3xl'>Shami burger</h1>
                <p>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p>
                <button className='border-2 border-black p-2 m-3 w-[100px] bg-purple-300 flex justify-center items-center text-red-600 '>35$</button>
            </div>
            <div className="pchilds">
                <img src={burger_17} alt="" />
                <h1 className = 'text-3xl'>Kabab burger</h1>
                <p>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p>
                <button className='border-2 border-black p-2 m-3 w-[100px] bg-purple-300 flex justify-center items-center text-red-600 '>35$</button>
            </div>
            <div className="pchilds">
                <img src={burger_13} alt="" />
                <h1 className = 'text-3xl'>Big burger</h1>
                <p>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p>
                <button className='border-2 border-black p-2 m-3 w-[100px] bg-purple-300 flex justify-center items-center text-red-600 '>35$</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Products
