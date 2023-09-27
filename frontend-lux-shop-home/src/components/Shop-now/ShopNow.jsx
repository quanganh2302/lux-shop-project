import React, { useState } from "react";
import { FormattedMessage } from "react-intl";
import "./ShopNow.scss";
const ShopNow = () => {
  const [isHoverBtn1, setIsHoverBtn1] = useState(false);
  const [isHoverBtn2, setIsHoverBtn2] = useState(false);
  const [isHoverBtn3, setIsHoverBtn3] = useState(false);

  const handleHoverBtn1 = () => {
    setIsHoverBtn1(true);
  };
  const handleLeaveBtn1 = () => {
    setIsHoverBtn1(false);
  };
  const handleHoverBtn2 = () => {
    setIsHoverBtn2(true);
  };
  const handleLeaveBtn2 = () => {
    setIsHoverBtn2(false);
  };
  const handleHoverBtn3 = () => {
    setIsHoverBtn3(true);
  };
  const handleLeaveBtn3 = () => {
    setIsHoverBtn3(false);
  };
  return (
    <section className="shop-now flex flex-col sm:flex-row items-center justify-center">
      {/* Shop now left -----------------------------------  */}
      <div className="shop-now-left sm:w-1/3 w-[100%]  flex items-center justify-center">
        <button
          className="btn-custom-1"
          onMouseEnter={handleHoverBtn1}
          onMouseLeave={handleLeaveBtn1}
        >
          <FormattedMessage id="shop-now-women.left" />
        </button>
        <div
          className={isHoverBtn1 ? "back-btn-vl-1 active" : "back-btn-vl-1"}
        ></div>
      </div>
      {/* Shop now center -----------------------------------  */}
      <div className="shop-now-center sm:w-1/3 w-[100%] flex flex-col justify-center items-center">
        <div className="shop-now-title">
          <FormattedMessage id="shop-now-women.center-title" />
        </div>
        <div className="shop-now-nav">
          <a href="">
            <FormattedMessage id="shop-now-women.center-nav" />
          </a>
        </div>
      </div>
      {/* Shop now right -----------------------------------  */}
      <div className="shop-now-right sm:w-1/3 w-[100%] flex flex-col justify-center items-center">
        <div className="shop-now-right-up h-1/2 flex justify-center items-center">
          {" "}
          <button
            className="btn-custom-2 "
            onMouseEnter={handleHoverBtn2}
            onMouseLeave={handleLeaveBtn2}
          >
            <FormattedMessage id="shop-now-women.right-up" />
          </button>
          <div
            className={isHoverBtn2 ? "back-btn-vl-2 active" : "back-btn-vl-2"}
          ></div>
        </div>
        <div className="shop-now-right-down h-1/2 flex justify-center items-center">
          <button
            className="btn-custom-3"
            onMouseEnter={handleHoverBtn3}
            onMouseLeave={handleLeaveBtn3}
          >
            <FormattedMessage id="shop-now-women.right-down" />
          </button>
          <div
            className={isHoverBtn3 ? "back-btn-vl-3 active" : "back-btn-vl-3"}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default ShopNow;
