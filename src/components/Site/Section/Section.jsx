import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import "./Section.css"
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/grid';
import { Grid, Pagination } from 'swiper/modules';
import 'swiper/css/pagination';

import SectionCard from '../SectionCard/SectionCard';
import { useSelector } from 'react-redux';
const Section = () => {
    const {data}=useSelector(state=>state.data)
    console.log(data)
    return (
        <div className='Section_bc_image'>
            <div className="container">
                {/* ... */}
                <div>
                    <Swiper
                        slidesPerView={2}
                        grid={{
                            rows: 2,
                        }}
                        spaceBetween={30}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Grid, Pagination]}
                        className="gridSwiper"
                    >
                        {data?.map((item, index) => (
                            <SwiperSlide className="gridSwiperSlider" key={index}>
                                <SectionCard item={item} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
}

export default Section