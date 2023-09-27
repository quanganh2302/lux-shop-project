import React from "react";
import "./ShippingInfo.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { FormattedMessage } from "react-intl";

const ShippingInfo = (props) => {
  const { className } = props;
  return (
    <section className={`shipping-info ${className}`}>
      <div className="shipping-container container-custom">
        <Swiper
          spaceBetween={50}
          modules={[Pagination]}
          pagination={true}
          breakpoints={{
            380: {
              slidesPerView: 1,
              allowTouchMove: true,
              pagination: {
                dynamicBullets: true,
              },
            },
            768: {
              slidesPerView: 3,
              allowTouchMove: false,
              pagination: {
                dynamicBullets: true,
              },
            },
            1060: {
              slidesPerView: 3,
              allowTouchMove: false,
              pagination: {
                dynamicBullets: true,
              },
            },
          }}
        >
          <SwiperSlide>
            {" "}
            <div className="shipping-item">
              <div className="item-icon">
                <svg className="t4s-obj-eff" viewBox="0 0 508 508">
                  <g>
                    <g>
                      <path d="M430.4,0H77.6L0,112.1V508h508V112.1L430.4,0z M335.9,16.4h85.8l62.5,90.1H335.9V16.4z M188.5,16.4h131.1v90.1H188.5V16.4	z M188.4,122.9h0.1h131.1v74.8l-16.4-10.9l-24.6,16.4L254,186.8l-24.6,16.4l-24.6-16.4l-16.4,10.9V122.9z M86.2,16.4H172v90.1 H23.8L86.2,16.4z M491.8,491.6H16.4V122.9h155.7v105.4l32.8-21.9l24.6,16.4l24.6-16.4l24.6,16.4l24.6-16.4l32.8,21.9V122.9h155.7 V491.6z"></path>
                    </g>
                  </g>
                  <g>
                    <g>
                      <polygon points="417.9,373.5 387.5,403.9 399.1,415.5 409.7,404.9 409.7,458.8 426.1,458.8 426.1,404.9 436.7,415.5 448.2,403.9 "></polygon>
                    </g>
                  </g>
                  <g>
                    <g>
                      <polygon points="344.1,373.5 313.8,403.9 325.3,415.5 335.9,404.9 335.9,458.8 352.3,458.8 352.3,404.9 362.9,415.5 374.5,403.9 "></polygon>
                    </g>
                  </g>
                </svg>
              </div>
              <div className="item-text">
                <h4>
                  <FormattedMessage id="shipping.title-1" />
                </h4>
                <p>
                  <FormattedMessage id="shipping.content-up-1" />
                  <br />
                  <FormattedMessage id="shipping.content-down-1" />
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="shipping-item">
              <div className="item-icon">
                <svg className="t4s-obj-eff" viewBox="0 0 508 508">
                  <g>
                    <g>
                      <path d="M254,0C128.3,0,26.1,102.2,26.1,227.9c0,122.9,97.9,223.4,219.8,227.7V508l60.3-60.3l-60.3-60.3v52	c-113-4.4-203.5-97.5-203.5-211.5c0-116.7,94.9-211.6,211.6-211.6s211.6,94.9,211.6,211.6h16.3C481.9,102.2,379.7,0,254,0z	 M262.1,426.6l21,21l-21,21V426.6z"></path>
                    </g>
                  </g>
                  <g>
                    <g>
                      <path d="M131.9,105.8V350h244.2V105.8H131.9z M229.6,122.1L229.6,122.1h48.8v32.6h-48.8V122.1z M359.8,333.7H148.2V122.1h65.1 v48.8h81.4v-48.8h65.1V333.7z"></path>
                    </g>
                  </g>
                  <g>
                    {" "}
                    <g>
                      {" "}
                      <polygon points="319.1,248.2 291.2,279.5 303.4,290.3 311,281.8 311,317.4 327.3,317.4 327.3,281.8 334.8,290.3 347,279.5 		"></polygon>{" "}
                    </g>
                  </g>
                  <g>
                    {" "}
                    <g>
                      {" "}
                      <polygon points="251.4,248.2 223.5,279.5 235.7,290.3 243.2,281.8 243.2,317.4 259.5,317.4 259.5,281.8 267.1,290.3 279.2,279.5 "></polygon>
                    </g>
                  </g>
                </svg>
              </div>
              <div className="item-text">
                <h4>
                  <FormattedMessage id="shipping.title-2" />
                </h4>
                <p>
                  <FormattedMessage id="shipping.content-up-2" />
                  <br />
                  <FormattedMessage id="shipping.content-down-2" />
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="shipping-item">
              <div className="item-icon">
                <svg className="t4s-obj-eff" viewBox="0 0 508 508">
                  <g>
                    <g>
                      <path d="M376.7,0H131.3c2,61.4-43.6,101.1-98.2,98.2v68.4C37.6,423,254,508,254,508s214.3-85,220.9-341.4V98.2	C407.9,103.9,371.7,41.3,376.7,0z M49.5,166.6v-52.4c52.1-4,93.9-45.7,97.9-97.9h98.5v106.8c-47.6,4-85.6,42-89.6,89.6H52.6		C50.6,197.5,49.5,182.1,49.5,166.6z M245.8,485.9C144.9,434.8,74.6,338.7,55,229h101.2c4,47.6,42,85.6,89.6,89.6V485.9z	 M172.2,220.9c0-45.1,36.7-81.8,81.8-81.8c45.1,0,81.8,36.7,81.8,81.8c0,45.1-36.7,81.8-81.8,81.8	C208.9,302.7,172.2,266,172.2,220.9z M262.2,485.9V318.6c47.6-4,85.6-42,89.6-89.6H453C433.4,338.7,363.1,434.8,262.2,485.9z M458.5,166.6c0,15.5-1.1,30.9-3.1,46.1H351.7c-4-47.6-42-85.6-89.6-89.6V16.4h98.5c4,52.1,45.8,93.8,97.9,97.8V166.6z"></path>
                    </g>
                  </g>
                  <g>
                    <g>
                      <polygon points="295.8,182.4 236.2,242 212.2,218.1 200.6,229.6 236.2,265.2 307.4,193.9 		"></polygon>
                    </g>
                  </g>
                </svg>
              </div>
              <div className="item-text">
                <h4>
                  <FormattedMessage id="shipping.title-3" />
                </h4>
                <p>
                  <FormattedMessage id="shipping.content-up-3" />
                  <br />
                  <FormattedMessage id="shipping.content-down-3" />
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default ShippingInfo;
