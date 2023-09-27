import React, { useState, useRef, useEffect } from "react";
import CardItem from "../Card-Item/CardItem";
import "./ProductList.scss";
import ArrDown from "../../assets/ArrowDown";
import { FormattedMessage } from "react-intl";
const ProductList = () => {
  const [isOpenPopup, setIsOpenPopup] = useState(false);
  const popupProductNav = useRef(null);

  useEffect(() => {
    if (isOpenPopup) {
      document.addEventListener("mousedown", handleClickOutSize);
    } else {
      document.removeEventListener("mousedown", handleClickOutSize);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutSize);
    };
  }, [popupProductNav]);
  const handleClickOutSize = (e) => {
    if (
      popupProductNav.current &&
      !popupProductNav.current.contains(e.target)
    ) {
      setIsOpenPopup(false);
    }
    return;
  };
  const handleOpenPopup = () => {
    setIsOpenPopup(!isOpenPopup);
  };
  const style =
    "nav-option flex flex-col justify-center items-center box-shadow";
  return (
    <section className="product-list md:mt-20 mt-7">
      <div className="product-list-container flex flex-col items-center justify-center mx-[10px] md:mx-[40px]">
        {/* Product nav ----------------------------  */}
        <div className="product-list-nav z-10">
          <div
            className="nav-select flex justify-center items-center gap-3"
            onClick={handleOpenPopup}
          >
            <p className="relative">
              <FormattedMessage id="product-list.best-seller" />
              <span>
                {" "}
                <ArrDown className="w-4 h-4 font-normal absolute top-[25px] right-[-45px]" />
              </span>
            </p>
          </div>
        </div>
        {/* Product popup ----------------------------------- */}
        <div
          ref={popupProductNav}
          className={isOpenPopup ? style : `${style} hidden`}
        >
          <a href="">
            <FormattedMessage id="product-list.best-seller" />{" "}
          </a>
          <a href="">
            <FormattedMessage id="product-list.on-sale" />
          </a>
          <a href="">
            <FormattedMessage id="product-list.new-arrivals" />
          </a>
        </div>
        {/* Product list ---------------------------------------- */}
        <div className="product-list-content flex justify-center items-center flex-wrap">
          <div className="product-item mt-[20px] px-2 md:px-4">
            <CardItem />
          </div>
          <div className="product-item mt-[20px] px-2 md:px-4">
            <CardItem />
          </div>
          <div className="product-item mt-[20px] px-2 md:px-4">
            <CardItem />
          </div>
          <div className="product-item mt-[20px] px-2 md:px-4">
            <CardItem />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductList;
