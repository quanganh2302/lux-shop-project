import React from "react";
import "./RecommendProduct.scss";
//import my component
import CardItem from "../Card-Item/CardItem";
//import img
import img1 from "../../assets/rec1.jpg";
import img2 from "../../assets/rec2.jpg";
import img3 from "../../assets/rec3.jpg";
import img4 from "../../assets/rec4.jpg";
//import swiper
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const RecommendProduct = () => {
  return (
    <section className="recommend-product container-padding">
      <div className="recommend-title">Related products</div>
      <Swiper
        spaceBetween={30}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className="swiper-container"
        breakpoints={{
          360: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
      >
        <SwiperSlide>
          <CardItem backgroundImage={img1} className={"recommend-card-item"} />
        </SwiperSlide>
        <SwiperSlide>
          <CardItem backgroundImage={img2} className={"recommend-card-item"} />
        </SwiperSlide>
        <SwiperSlide>
          <CardItem backgroundImage={img3} className={"recommend-card-item"} />
        </SwiperSlide>
        <SwiperSlide>
          <CardItem backgroundImage={img4} className={"recommend-card-item"} />
        </SwiperSlide>
        <SwiperSlide>
          <CardItem backgroundImage={img1} className={"recommend-card-item"} />
        </SwiperSlide>
        <SwiperSlide>
          <CardItem backgroundImage={img2} className={"recommend-card-item"} />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default RecommendProduct;
