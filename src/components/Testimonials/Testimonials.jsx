import React from "react";
import "./Testimonials.css";
import testimonialsData from "./testimonialsData";

import {Pagination} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const Testimonials = () => {
  return <section id="testimonials">
    <h5>Review from clients</h5>
    <h2>Testimonials</h2>
    <Swiper
        className="container testimonials__container"
        modules={[ Pagination]}
        pagination={{ clickable: true }}
        spaceBetween={40}
        slidesPerView={1}
    >
      {
        testimonialsData.map(({avatar, name, review}, i) => {
          return (
              <SwiperSlide key={i} className="testimonial">
                <div className="client__avatar">
                  <img src={avatar} alt=""/>
                </div>
                <h5 className="client__name">{name}</h5>
                <small className="client__review">{review}</small>
              </SwiperSlide>
          )
        })
      }
    </Swiper>
  </section>;
};

export default Testimonials;
