import React from "react";
import "./MenShopNow.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import CardItem from "../../components/Card-Item/CardItem";
import bgImg1 from "../../assets/shop-now-item-1.jpg";
import bgImg2 from "../../assets/shop-now-item-2.jpg";
import bgImg3 from "../../assets/shop-now-item-3.jpg";

const MenShopNow = () => {
  return (
    <section className="men-shop-now container-padding">
      <div
        style={{ backgroundImage: `url(${bgImg1})` }}
        className="shop-now-item-1"
      >
        <div className="item-content">
          <div className="item-title">Best sellers</div>
          <div className="item-nav">shop collection</div>
        </div>
      </div>
      <div
        style={{ backgroundImage: `url(${bgImg2})` }}
        className="shop-now-item-2"
      >
        <div className="item-content">
          <div className="item-title">Summer Restock</div>
          <div className="item-nav">shop collection</div>
        </div>
      </div>
      <div
        style={{ backgroundImage: `url(${bgImg3})` }}
        className="shop-now-item-3"
      >
        <div className="item-content">
          <div className="item-title">Shose & Accessories</div>
          <div className="item-nav">shop collection</div>
        </div>
      </div>
    </section>
  );
};

export default MenShopNow;
