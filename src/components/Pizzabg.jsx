import React from 'react'
import './Pizzabg.css'
import auth1 from './review-author-1.jpg'
import auth2 from './review-author-2.jpg'
import auth3 from './review-author-3.jpg'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper"; // Import modules


import "swiper/css"; // Main Swiper styles
import "swiper/css/navigation"; // For navigation module
import "swiper/css/pagination"; // For pagination module



const Pizzabg = () => {
  return (
    <div>
    <Swiper
      modules={[Navigation, Pagination]} // Enable modules
      navigation // Add navigation buttons
      pagination={{ clickable: true }} // Add pagination
      spaceBetween={50} // Space between slides
      slidesPerView={1} // Number of slides visible at a time
    >
      <SwiperSlide>
        <div className="pizzacont mt-10 flex text-white flex-col justify-center items-center">
            <img className='h-[50px] rounded-full' src={auth1} alt="" />
            <p className='w-[50%] p-2 text-2xl m-auto'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet nulla id magni accusantium asperiores nam porro hic, repudiandae assumenda ullam.</p>
            <h1>Kamilla</h1>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="pizzacont mt-10 flex text-white flex-col justify-center items-center">
            <img className='h-[50px] rounded-full' src={auth2} alt="" />
            <p className='w-[50%] p-2 text-2xl m-auto'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet nulla id magni accusantium asperiores nam porro hic, repudiandae assumenda ullam.</p>
            <h1>Jhon</h1>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="pizzacont mt-10 flex text-white flex-col justify-center items-center">
            <img className='h-[50px] rounded-full' src={auth3} alt="" />
            <p className='w-[50%] p-2 text-2xl m-auto'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet nulla id magni accusantium asperiores nam porro hic, repudiandae assumenda ullam.</p>
            <h1>Trump</h1>
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
  )
}

export default Pizzabg
