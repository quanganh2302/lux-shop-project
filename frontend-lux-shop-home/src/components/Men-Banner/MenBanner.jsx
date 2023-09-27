import React, { useState } from "react";
import "./MenBanner.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Button from "../Button/Button";
import imgBg1 from "../../assets/men-banner-1.jpg";
import imgBg2 from "../../assets/men-banner-2.jpg";
import imgBg3 from "../../assets/men-banner-3.jpg";

const MenBanner = () => {
  const [currentSlider, setCurrentSlider] = useState();
  return (
    <section className="men-banner">
      <Swiper
        onSlideChange={(isActive) => setCurrentSlider(isActive.activeIndex)}
        navigation={true}
        modules={[Navigation]}
        className="men-swiper"
      >
        <SwiperSlide
          className="men-swiper-item"
          style={{ backgroundImage: `url(${imgBg1})` }}
        >
          <div className="item-content">
            <div className="content-title">Spring Collection</div>
            <div className="content-call">New arrivals</div>
            <Button
              className={"banner-btn"}
              text={"Shop now"}
              fontSize={"12px"}
              width={"150px"}
              height={"40px"}
              bgColor={"#fff"}
              fontWeight={"300"}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide
          className="men-swiper-item"
          style={{ backgroundImage: `url(${imgBg2})` }}
        >
          <div className="item-content">
            <div className="content-title">
              *Select styles. Limited time only.
            </div>
            <div className="content-call">The Sale Is On</div>
            <Button
              className={"banner-btn"}
              text={"Shop now"}
              fontSize={"12px"}
              width={"150px"}
              height={"40px"}
              bgColor={"#fff"}
              fontWeight={"300"}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide
          className="men-swiper-item"
          style={{ backgroundImage: `url(${imgBg3})` }}
        >
          <div className="item-content">
            <div className="content-title">Fall streetwear from $8.99</div>
            <div className="content-call">Return to real</div>
            <Button
              className={"banner-btn"}
              text={"Shop now"}
              fontSize={"12px"}
              width={"150px"}
              height={"40px"}
              bgColor={"#fff"}
              fontWeight={"300"}
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default MenBanner;
