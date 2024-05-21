import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
function CaruselSwiper({ img }) {
    return (
        <Swiper
            pagination={true}
            modules={[Pagination, Autoplay]}
            loop={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            className="mySwiper">
            <SwiperSlide className='sliderH3'><div><img src={img} alt="mehsul sekili" /></div></SwiperSlide>
            <SwiperSlide className='sliderH3'><div><img src={img} alt="mehsul sekili" /></div></SwiperSlide>
            <SwiperSlide className='sliderH3'><div><img src={img} alt="mehsul sekili" /></div></SwiperSlide>
        </Swiper>
    )
}

export default CaruselSwiper