"use client"

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import img1 from "@/assets/slider/slider1.png"
import img_1 from "@/assets/slider/slider1.1.png"
import img2 from "@/assets/slider/slider2.png"
import img_2 from "@/assets/slider/slider2.1.png"
import img3 from "@/assets/slider/slider3.png"
import img_3 from "@/assets/slider/slider3.1.png"
import img4 from "@/assets/slider/slider4.png"
import img_4 from "@/assets/slider/slider4.1.png"
import img5 from "@/assets/slider/slider5.png"
import img_5 from "@/assets/slider/slider5.1.png"
import img6 from "@/assets/slider/slider6.png"
import img_6 from "@/assets/slider/slider6.1.png"
import img7 from "@/assets/slider/slider7.png"
import img_7 from "@/assets/slider/slider7.1.png"

const path = [[img1, img_1], [img2, img_2], [img3, img_3], [img4, img_4], [img5, img_5], [img6, img_6], [img7, img_7]]
function MainSlider() {
    return (
        <div className='mainSlider'>
            <Swiper
                pagination={true}
                modules={[Pagination, Autoplay]}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                className="mySwiper">
                {
                    path.map((item, i) =>
                    (<SwiperSlide key={i}>
                       <div className='sliderImg'>
                         <img className='img1' src={item[0].src} alt="sekil yoxdur" />
                         <img className='img2' src={item[1].src} alt="sekil yoxdur" />
                       </div>
                    </SwiperSlide>))
                }
            </Swiper>
        </div>
    )
}

export default MainSlider