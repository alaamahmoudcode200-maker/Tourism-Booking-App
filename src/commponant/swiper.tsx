'use client';
import {FaArrowRight, FaArrowLeft} from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import PropertyDetails from './place';
import 'swiper/css';
import 'swiper/css/navigation';

export default function SwipPlace() {
  return (
    <div className="relative  w-full max-w-5xl mx-auto">
      <div className="absolute top-0 right-0 transform -translate-y-1/2 z-10">
        <button className="custom-prev bg-gray-300 rounded-full shadow-md hover:bg-gray-100">
         <FaArrowLeft className="text-black m-2"/>
        </button>   
        <button className="custom-next bg-gray-300  rounded-full shadow-md hover:bg-gray-100 ml-2">
          <FaArrowRight className="text-black m-2 "/>
        </button>
      </div>
      <Swiper
        navigation={{
          nextEl: '.custom-next',
          prevEl: '.custom-prev',
        }}
        modules={[Navigation]}
        spaceBetween={10}
        slidesPerView={1}
        className="mySwiper"
      >
        <SwiperSlide>
            <PropertyDetails />
        </SwiperSlide>
         <SwiperSlide>
            <PropertyDetails />
        </SwiperSlide>
      </Swiper>
      
    </div>
  );
}