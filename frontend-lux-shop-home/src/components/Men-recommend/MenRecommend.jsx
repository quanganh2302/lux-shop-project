import React from "react";
import "./MenRecommend.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import CardItem from "../../components/Card-Item/CardItem";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
const MenRecommend = () => {
  return (
    <section className="men-recommend">
      <div className="recommend-title">RECOMMENDED FOR YOU</div>
      <Swiper
        className="recommend-swiper"
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
        <SwiperSlide className="recommend-swiper-item">
          <CardItem className="recommend-card-item" />
        </SwiperSlide>
        <SwiperSlide className="recommend-swiper-item">
          <CardItem className="recommend-card-item" />
        </SwiperSlide>
        <SwiperSlide className="recommend-swiper-item">
          <CardItem className="recommend-card-item" />
        </SwiperSlide>
        <SwiperSlide className="recommend-swiper-item">
          <CardItem className="recommend-card-item" />
        </SwiperSlide>
        <SwiperSlide className="recommend-swiper-item">
          <CardItem className="recommend-card-item" />
        </SwiperSlide>
        <SwiperSlide className="recommend-swiper-item">
          <CardItem className="recommend-card-item" />
        </SwiperSlide>
        <SwiperSlide className="recommend-swiper-item">
          <CardItem className="recommend-card-item" />
        </SwiperSlide>
        <SwiperSlide className="recommend-swiper-item">
          <CardItem className="recommend-card-item" />
        </SwiperSlide>
        <SwiperSlide className="recommend-swiper-item">
          <CardItem className="recommend-card-item" />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default MenRecommend;
