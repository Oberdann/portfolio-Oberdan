
import React, { useState, useEffect } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from "swiper/modules"

import 'swiper/css';
import 'swiper/css/pagination';

import styles from "./Slide.module.css"

function Slide({ data, customClassText, customClassImg }) {
    return (

        <Swiper
            modules={[Pagination, Autoplay]}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 15000 }}
        >

            {
                data.map((item) => (


                    <SwiperSlide key={item.id} className={styles.slide}>

                        <img src={item.img} alt="slide" className={`${styles.center} ${styles.img} ${styles[customClassImg]}`} />

                        {item.text && (
                            <p className={`${styles.center} ${styles.text}  ${styles[customClassText]}`}>{item.text}</p>
                        )

                        }
                    </SwiperSlide>

                ))
            }
        </Swiper >
    )
}

export default Slide;