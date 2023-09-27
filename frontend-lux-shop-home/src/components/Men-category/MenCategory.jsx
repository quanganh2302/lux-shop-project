import React from "react";
import "./MenCategory.scss";
import CategoryItem from "../Category-item/CategoryItem";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
const MenCategory = () => {
  return (
    <section className="men-category">
      <div className="category-title">SEARCH BY CATEGORY</div>
      <div className="category-container">
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
      </div>
      <div className="category-slider">
        <Swiper
          className="category-swiper"
          loop={true}
          slidesPerGroupSkip={1}
          spaceBetween={30}
          navigation={true}
          modules={[Navigation]}
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
          <SwiperSlide className="category-swiper-item">
            <CategoryItem className="category-card-item" />
          </SwiperSlide>
          <SwiperSlide className="category-swiper-item">
            <CategoryItem className="category-card-item" />
          </SwiperSlide>
          <SwiperSlide className="category-swiper-item">
            <CategoryItem className="category-card-item" />
          </SwiperSlide>
          <SwiperSlide className="category-swiper-item">
            <CategoryItem className="category-card-item" />
          </SwiperSlide>
          <SwiperSlide className="category-swiper-item">
            <CategoryItem className="category-card-item" />
          </SwiperSlide>
          <SwiperSlide className="category-swiper-item">
            <CategoryItem className="category-card-item" />
          </SwiperSlide>
          <SwiperSlide className="category-swiper-item">
            <CategoryItem className="category-card-item" />
          </SwiperSlide>
          <SwiperSlide className="category-swiper-item">
            <CategoryItem className="category-card-item" />
          </SwiperSlide>
          <SwiperSlide className="category-swiper-item">
            <CategoryItem className="category-card-item" />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default MenCategory;
