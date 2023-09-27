import React, { useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Banner.scss";
import { FormattedMessage } from "react-intl";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

const BannerHome = () => {
  const [activeSlide, setActiveSlide] = useState("");
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  return (
    <section className="banner-home font-poppins">
      {" "}
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="women-banner-swiper"
      >
        <SwiperSlide className="slider-item1">
          <div className="slider-content">
            <div className="slider-content-info">
              <FormattedMessage id="banner.info-1" />
            </div>
            <div className="slider-content-call">
              <FormattedMessage id="banner.call-1" />
            </div>
            <div className="slider-content-nav">
              <FormattedMessage id="banner.nav-1" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slider-item2">
          {" "}
          <div className="slider-content">
            <div className="slider-content-info">
              <FormattedMessage id="banner.info-2" />
            </div>
            <div className="slider-content-call">
              <FormattedMessage id="banner.call-2" />
            </div>
            <div className="slider-content-nav">
              <FormattedMessage id="banner.nav-2" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slider-item3">
          <div className="slider-content">
            <div className="slider-content-info">
              <FormattedMessage id="banner.info-3" />
            </div>
            <div className="slider-content-call">
              <FormattedMessage id="banner.call-3" />
            </div>
            <div className="slider-content-nav">
              <FormattedMessage id="banner.nav-3" />
            </div>
          </div>
        </SwiperSlide>

        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </section>
  );
};

export default BannerHome;
