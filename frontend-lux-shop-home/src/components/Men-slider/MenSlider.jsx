import React from "react";
import "./MenSlider.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import imgBg1 from "../../assets/Artboard_1.jpg";
import imgBg2 from "../../assets/Artboard_2.jpg";
import imgBg3 from "../../assets/Artboard_3.jpg";
import imgBg4 from "../../assets/Artboard_4.jpg";
import imgBg5 from "../../assets/Artboard_5.jpg";
import imgBg6 from "../../assets/Artboard_6.jpg";
import imgBg7 from "../../assets/Artboard_7.jpg";
import imgBg8 from "../../assets/Artboard_8.jpg";

const MenSlider = () => {
  return (
    <section className="men-slider container-padding">
      <div className="recommend-title">
        <p>
          contact me{" "}
          <a href="https://www.facebook.com/quanganh.dev/"> @Lucas</a>{" "}
        </p>
      </div>
      <Swiper
        slidesPerView={4}
        slidesPerGroupSkip={1}
        spaceBetween={30}
        loop={true}
        breakpoints={{
          360: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
        className="slider-swiper"
      >
        <SwiperSlide className="slider-swiper-item">
          <div
            style={{ backgroundImage: `url(${imgBg1})` }}
            className="item-image"
          ></div>
        </SwiperSlide>
        <SwiperSlide className="slider-swiper-item">
          <div
            style={{ backgroundImage: `url(${imgBg2})` }}
            className="item-image"
          ></div>
        </SwiperSlide>{" "}
        <SwiperSlide className="slider-swiper-item">
          <div
            style={{ backgroundImage: `url(${imgBg3})` }}
            className="item-image"
          ></div>
        </SwiperSlide>{" "}
        <SwiperSlide className="slider-swiper-item">
          <div
            style={{ backgroundImage: `url(${imgBg4})` }}
            className="item-image"
          ></div>
        </SwiperSlide>{" "}
        <SwiperSlide className="slider-swiper-item">
          <div
            style={{ backgroundImage: `url(${imgBg5})` }}
            className="item-image"
          ></div>
        </SwiperSlide>{" "}
        <SwiperSlide className="slider-swiper-item">
          <div
            style={{ backgroundImage: `url(${imgBg6})` }}
            className="item-image"
          ></div>
        </SwiperSlide>{" "}
        <SwiperSlide className="slider-swiper-item">
          <div
            style={{ backgroundImage: `url(${imgBg7})` }}
            className="item-image"
          ></div>
        </SwiperSlide>{" "}
        <SwiperSlide className="slider-swiper-item">
          <div
            style={{ backgroundImage: `url(${imgBg8})` }}
            className="item-image"
          ></div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default MenSlider;
