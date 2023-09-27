import React, { useEffect, useState, useRef } from "react";
import "./ProductDetail.scss";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
//My component --------------------------------------------->
import AddWishlist from "../Add-wishlist/AddWishlist";
import Price from "../Price/Price";
import ColorList from "../Color-list/ColorList";
import SizeList from "../Size-list/SizeList";
import SetQuantity from "../Set-quantity/SetQuantity";
import Button from "../Button/Button";
import ShippingInfo from "../Shipping-info/ShippingInfo";
// React Icon
import { RxRulerHorizontal } from "react-icons/rx";
import { SlArrowUp, SlArrowDown } from "react-icons/sl";
// img
import img from "../../assets/image_trust.jpg";
import imgBgProduct1 from "../../assets/product-1.jpg";
import imgBgProduct2 from "../../assets/product-2.jpg";
import imgBgProduct3 from "../../assets/product-3.jpg";
import imgBgProduct4 from "../../assets/product-4.jpg";

// Import Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Scrollbar, Navigation, Controller, Pagination } from "swiper/modules";

const ProductDetail = () => {
  const originalText =
    "Cenean viverra rhoncus pede. Ut id nisl quis enim dignissim sagittis. Fusce ac felis sitpharetra condimentum...";
  const compactText = originalText.slice(0, 100) + "...";
  const [desc, setDesc] = useState();

  const [mousePosition, setMousePosition] = useState({ posX: "", posY: "" });
  const containerRef = useRef(null);

  const onMouseMove = (e) => {
    const containerRect = containerRef.current.getBoundingClientRect();
    let posX =
      ((e.pageX - containerRect.left - window.scrollX) / containerRect.width) *
      100;
    let posY =
      ((e.pageY - containerRect.top - window.scrollY) / containerRect.height) *
      100;
    setMousePosition({
      posX,
      posY,
    });
  };

  const onMouseLeave = () => {
    setMousePosition({ posX: "", posY: "" });
  };

  // Swiper instance
  const [swiper, updateSwiper] = useState(null);
  // Swiper thumbsinstance
  const [swiperThumbs, updateSwiperThumbs] = useState(null);

  const handleSetCurrentImg = (e) => {
    updateSwiper(e.target.swiperSlideIndex);
  };
  useEffect(() => {
    setDesc(compactText);
  }, []);

  return (
    <section className="product-detail container-padding">
      <div className="detail-left">
        <div className="small-slider">
          <Swiper
            slidesPerView={4}
            // navigation={{ nextEl: ".arrow-next", prevEl: ".arrow-prev" }}
            className="left-img"
            direction={"vertical"}
            spaceBetween={10}
            slidesPerGroup={1}
            modules={[Navigation, Controller, Pagination, Scrollbar]}
            controller={{ control: swiperThumbs }}
            slideToClickedSlide={true}
            onSwiper={updateSwiper}
            breakpoints={{
              380: {
                direction: "horizontal",
                allowTouchMove: true,
                navigation: false,
              },
              760: {
                direction: "horizontal",
                allowTouchMove: true,
                navigation: false,
              },
              1200: {
                direction: "vertical",
                allowTouchMove: true,

                navigation: {
                  nextEl: ".arrow-next",
                  prevEl: ".arrow-prev",
                },
              },
            }}
          >
            <SwiperSlide
              key={1}
              style={{ backgroundImage: `url(${imgBgProduct1})` }}
              className="slider-item"
            ></SwiperSlide>
            <SwiperSlide
              key={2}
              style={{ backgroundImage: `url(${imgBgProduct2})` }}
              className="slider-item"
            ></SwiperSlide>
            <SwiperSlide
              key={3}
              style={{ backgroundImage: `url(${imgBgProduct3})` }}
              className="slider-item"
            ></SwiperSlide>
            <SwiperSlide
              key={4}
              style={{ backgroundImage: `url(${imgBgProduct4})` }}
              className="slider-item"
            ></SwiperSlide>
            <SwiperSlide
              key={5}
              style={{ backgroundImage: `url(${imgBgProduct4})` }}
              className="slider-item"
            ></SwiperSlide>{" "}
            <SwiperSlide
              key={6}
              style={{ backgroundImage: `url(${imgBgProduct4})` }}
              className="slider-item"
            ></SwiperSlide>{" "}
            <SwiperSlide
              key={7}
              style={{ backgroundImage: `url(${imgBgProduct4})` }}
              className="slider-item"
            ></SwiperSlide>{" "}
            <SwiperSlide
              key={8}
              style={{ backgroundImage: `url(${imgBgProduct4})` }}
              className="slider-item"
            ></SwiperSlide>
          </Swiper>
          <button className="arrow-prev arrow">
            <SlArrowUp />
          </button>
          <button className="arrow-next arrow">
            <SlArrowDown />
          </button>
        </div>

        <Swiper
          // thumbs={{ swiper: thumbsSwiper }}
          modules={[Navigation, Controller]}
          controller={{ control: swiper }}
          navigation={true}
          className="left-slider"
          onSwiper={updateSwiperThumbs}
          spaceBetween={"10x"}
          slidesPerView={1}
          ref={containerRef}
        >
          <SwiperSlide
            style={{
              backgroundImage: `url(${imgBgProduct1})`,
              transformOrigin: `${mousePosition.posX}% ${mousePosition.posY}%`,
            }}
            className="slider-item"
            onMouseMove={onMouseMove}
            onMouseLeave={onMouseLeave}
          ></SwiperSlide>
          <SwiperSlide
            style={{
              backgroundImage: `url(${imgBgProduct2})`,
              transformOrigin: `${mousePosition.posX}% ${mousePosition.posY}%`,
            }}
            className="slider-item"
            onMouseMove={onMouseMove}
            onMouseLeave={onMouseLeave}
          ></SwiperSlide>
          <SwiperSlide
            style={{
              backgroundImage: `url(${imgBgProduct3})`,
              transformOrigin: `${mousePosition.posX}% ${mousePosition.posY}%`,
            }}
            className="slider-item"
            onMouseMove={onMouseMove}
            onMouseLeave={onMouseLeave}
          ></SwiperSlide>
          <SwiperSlide
            style={{
              backgroundImage: `url(${imgBgProduct4})`,
              transformOrigin: `${mousePosition.posX}% ${mousePosition.posY}%`,
            }}
            className="slider-item"
            onMouseMove={onMouseMove}
            onMouseLeave={onMouseLeave}
          ></SwiperSlide>
          <SwiperSlide
            style={{
              backgroundImage: `url(${imgBgProduct4})`,
              transformOrigin: `${mousePosition.posX}% ${mousePosition.posY}%`,
            }}
            className="slider-item"
            onMouseMove={onMouseMove}
            onMouseLeave={onMouseLeave}
          ></SwiperSlide>
          <SwiperSlide
            style={{
              backgroundImage: `url(${imgBgProduct4})`,
              transformOrigin: `${mousePosition.posX}% ${mousePosition.posY}%`,
            }}
            className="slider-item"
            onMouseMove={onMouseMove}
            onMouseLeave={onMouseLeave}
          ></SwiperSlide>
          <SwiperSlide
            style={{
              backgroundImage: `url(${imgBgProduct4})`,
              transformOrigin: `${mousePosition.posX}% ${mousePosition.posY}%`,
            }}
            className="slider-item"
            onMouseMove={onMouseMove}
            onMouseLeave={onMouseLeave}
          ></SwiperSlide>
          <SwiperSlide
            style={{ backgroundImage: `url(${imgBgProduct4})` }}
            className="slider-item"
            onMouseMove={onMouseMove}
            onMouseLeave={onMouseLeave}
          ></SwiperSlide>
        </Swiper>
      </div>
      <div className="detail-right">
        <div className="right-top">
          <h3 className="name">Miley Triangle Hair Scarf</h3>
          <Price className={"price"} delPrice={"36.00"} insPrice={"26.00"} />
        </div>

        <div className="right-detail">
          <p className="detail-desc">{desc}</p>
          <div className="choose-size-color">
            <div className="detail-color">
              <p>
                COLOR: <span>Red</span>
              </p>
              <ColorList
                diameter={"30px"}
                className={"color-list"}
                color={"red"}
              />
            </div>
            <div className="detail-size">
              <p>
                {" "}
                <RxRulerHorizontal />
                size guide
              </p>
              <SizeList />
            </div>
          </div>
          <div className="detail-add">
            <SetQuantity className={"detail-set"} />
            <Button
              text={"add to cart"}
              bgColor={"#000"}
              color={"#fff"}
              fontSize={"14px"}
              className={"detail-btn"}
            />
          </div>
          <AddWishlist />
          <div className="right-return">
            <a href="#">Delivery & Return</a>
            <a href="#">Ask a Question</a>
          </div>
        </div>

        <div className="right-trust">
          <p>Guarantee safe & secure checkout</p>
          <div style={{ backgroundImage: `url(${img})` }} className="img"></div>
        </div>
        <div className="more-info">
          <p className="sku">
            SKU: <span>TLDD55W</span>{" "}
          </p>
          <p className="category">
            Categories: <a href="#">Accessories,</a>
            <a href="#">Cardigans,</a>
            <a href="#">Leggings,</a>
            <a href="#">Women</a>{" "}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
