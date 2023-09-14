import React from "react";
import { testimonials } from "../data"; // import reviews data


import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "../swiper.css"

// import Module

import { Autoplay, Pagination } from "swiper";



const ReviewSlider = () => {
  return (
    <>
      <Swiper
        pagination={{
          clickable: true,
        }}
          
        scrollbar={{ draggable: true }}
      
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        

        modules={[Autoplay, Pagination]
        }


       
       
      >
        {testimonials.map((item, index) => {
          const { authorImg, authorText, authorName, authorPosition } = item;
          return <SwiperSlide key={index} >
            <div className="flex flex-col items-center gap-4 ">
              <div className="w-48 h-48  lg:w-[328px] lg:h-[328px]">
                <img className="rounded-3xl drop-shadow-xl" src={authorImg} />
              </div>
            <div className="flex flex-col max-w-3xl mb-12">
              <h5 className="font-body lg:text-xl text- mb-8 italic font-normal text-gray-400">{authorText}</h5>
              <div>
                <p className="text-lg text-accent">
                  {authorName}
                </p>
                <p>
                  {authorPosition}
                </p>
              </div>

            </div>
             
            </div>
          </SwiperSlide>;
        })}
      </Swiper>
    </>
  );
};

export default ReviewSlider;
