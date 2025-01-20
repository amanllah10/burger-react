import React from 'react'
import './Home.css'
import Navbar from './Navbar'
import hero_2 from './hero-2.png'
import Mainupper from './Mainupper'
import Text from './Text'
import Three from './Three'
import Products from './Products'
import Advertise from './Advertise'
import Showburger from './Showburger'
import Afterparallex from './Afterparallex'
import Pizzabg from './Pizzabg'
import Footerupper from './Footerupper'
import Footer from './Footer'

const Home = () => {
    return (
        <>
            <div className='homecont'>
                <Navbar />
                <Mainupper />
            </div>
            <div className="main">
                <Text />
            </div>
            <div className="mainlower">
                <Three/>
            </div>
            <div className="product">
                <Products/>
            </div>
            <div className="advertise">
                <Advertise/>
            </div>
            <div className="showburger">
                <Showburger/>
            </div>
            <div className="parallex">
                hi
            </div>
            <div className="afterparallex">
                <Afterparallex/>
            </div>
            <div className="pizzabg">
                <Pizzabg/>
            </div>
            <div className="footerupper">
                <Footerupper/>
                <Footer/>
            </div>
        </>

    )
}

export default Home
