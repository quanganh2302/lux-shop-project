import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import "./Header.scss";
import ShoppingCart from "../Shopping-cart/ShoppingCart";
import ShoppingCartItem from "../Shopping-Cart-Item/ShoppingCartItem";
import { BiUser, BiSearch, BiMenu } from "react-icons/bi";
import { FiHeart } from "react-icons/fi";
import { BsCartPlus } from "react-icons/bs";
import { GrClose } from "react-icons/gr";
import ArrowNext from "../../assets/ArrowNext";
import { FormattedMessage } from "react-intl";
import { useSelector, useDispatch } from "react-redux";

const Header = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isOpenSearch, setIsOpenSearch] = useState(false);
  const [isOpenCart, setIsOpenCart] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
  const [visible, setVisible] = useState(true);
  const [isOnTop, setIsOnTop] = useState(true);
  const popupMenu = useRef(null);
  const popupSearch = useRef(null);
  const popupCart = useRef(null);
  const handlePopupMenu = () => {
    setTimeout(() => {
      setIsOpenMenu(!isOpenMenu);
    }, 100);
  };
  const handlePopupSearch = () => {
    setTimeout(() => {
      setIsOpenSearch(!isOpenSearch);
    }, 100);
  };
  const handlePopupCart = () => {
    setTimeout(() => {
      setIsOpenCart(!isOpenCart);
    }, 100);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const isVisible = prevScrollPos > currentScrollPos;
      if (window.scrollY < 43) {
        setIsOnTop(true);
      } else {
        setIsOnTop(false);
      }

      setPrevScrollPos(currentScrollPos);
      setVisible(isVisible);
    };
    window.addEventListener("scroll", handleScroll);

    if (isOpenMenu || isOpenSearch || isOpenCart) {
      document.body.style.overflow = "hidden";
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.body.style.overflow = "auto";
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isOpenMenu, isOpenSearch, isOpenCart, prevScrollPos]);

  const handleClickOutside = (e) => {
    if (
      popupMenu.current &&
      !popupMenu.current.contains(e.target) &&
      popupSearch.current &&
      !popupSearch.current.contains(e.target) &&
      popupCart.current &&
      !popupCart.current.contains(e.target)
    ) {
      setIsOpenMenu(false);
      setIsOpenSearch(false);
      setIsOpenCart(false);
    }
    return;
  };
  const lang = useSelector((state) => state.homeReducer.language);
  let headerStyle = "";
  if (visible && isOnTop) {
    headerStyle = { position: "relative" };
  } else if (visible === true && isOnTop === false) {
    headerStyle = { top: "0" };
  } else if (visible === false && isOnTop === true) {
    headerStyle = { top: " 0" };
  } else {
    headerStyle = { top: "-100px" };
  }

  return (
    <header className={`header `} style={headerStyle}>
      <div className="header-content relative">
        {/* // Wrap header -------------------------------------- */}
        <div
          className={`header-top md:px-[95px] px-[15px] flex items-center justify-between `}
        >
          {/* //Header top left------------------------------ */}
          <div
            className={`header-top-left  w-1/3 flex items-center justify-start text-para4 font-poppins font-medium min-h-[70px] `}
          >
            {/* popup women ----------------------------------  */}
            <div
              className={`header-women uppercase cursor-pointer hidden md:flex`}
            >
              <NavLink className="women-nav" to="/">
                <FormattedMessage id="header.women" />
              </NavLink>
              <div
                className={`popup-women box-shadow-popup hidden justify-around p-[30px]`}
              >
                <div className="popup-item text-para3 font-light">
                  <h3 className={`  pb-4 font-semibold capitalize text-[18px]`}>
                    <a href="#">
                      <FormattedMessage id="popup-women.title-1" />
                    </a>
                  </h3>
                  <ul>
                    <li className={`mb-3`}>
                      <a href="#">
                        <FormattedMessage id="popup-women.row-1-1" />
                      </a>
                    </li>
                    <li className={`mb-3`}>
                      <a href="#">
                        <FormattedMessage id="popup-women.row-1-2" />
                      </a>
                    </li>
                    <li className={`mb-3`}>
                      <a href="#">
                        <FormattedMessage id="popup-women.row-1-3" />
                      </a>
                    </li>
                    <li className={`mb-3`}>
                      <a href="#">
                        <FormattedMessage id="popup-women.row-1-4" />
                      </a>
                    </li>
                    <li className={`mb-3`}>
                      <a href="#">
                        <FormattedMessage id="popup-women.row-1-5" />
                      </a>
                    </li>
                    <li className={`mb-3`}>
                      <a href="#">
                        <FormattedMessage id="popup-women.row-1-6" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="popup-item text-para3 font-light ">
                  <h3 className={` pb-4 font-semibold capitalize text-[18px]`}>
                    <a href="#">
                      <FormattedMessage id="popup-women.title-2" />
                    </a>
                  </h3>
                  <ul>
                    <li className={`mb-3`}>
                      <a href="#">
                        <FormattedMessage id="popup-women.row-2-1" />
                      </a>
                    </li>
                    <li className={`mb-3`}>
                      <a href="#">
                        <FormattedMessage id="popup-women.row-2-2" />
                      </a>
                    </li>
                    <li className={`mb-3`}>
                      <a href="#">
                        <FormattedMessage id="popup-women.row-2-3" />
                      </a>
                    </li>
                    <li className={`mb-3`}>
                      <a href="#">
                        <FormattedMessage id="popup-women.row-2-4" />
                      </a>
                    </li>
                    <li className={`mb-3`}>
                      <a href="#">
                        <FormattedMessage id="popup-women.row-2-5" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="popup-item  text-para3 font-light">
                  <h3 className={` pb-4 font-semibold capitalize text-[18px]`}>
                    <a href="#">
                      <FormattedMessage id="popup-women.title-3" />
                    </a>
                  </h3>
                  <ul>
                    <li className={`mb-3`}>
                      <a href="#">
                        <FormattedMessage id="popup-women.row-3-1" />
                      </a>
                    </li>
                    <li className={`mb-3`}>
                      <a href="#">
                        <FormattedMessage id="popup-women.row-3-2" />
                      </a>
                    </li>
                    <li className={`mb-3`}>
                      <a href="#">
                        <FormattedMessage id="popup-women.row-3-3" />
                      </a>
                    </li>
                    <li className={`mb-3`}>
                      <a href="#">
                        <FormattedMessage id="popup-women.row-3-4" />
                      </a>
                    </li>
                    <li className={`mb-3`}>
                      <a href="#">
                        <FormattedMessage id="popup-women.row-3-5" />
                      </a>
                    </li>
                    <li className={`mb-3`}>
                      <a href="#">
                        <FormattedMessage id="popup-women.row-3-6" />
                      </a>
                    </li>
                    <li className={`mb-3`}>
                      <a href="#">
                        <FormattedMessage id="popup-women.row-3-7" />
                      </a>
                    </li>
                    <li className={`mb-3`}>
                      <a href="#">
                        <FormattedMessage id="popup-women.row-3-8" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="popup-item text-para3 font-light">
                  <h3 className={` pb-4 font-semibold capitalize text-[18px]`}>
                    <a href="#">
                      <FormattedMessage id="popup-women.title-2" />
                    </a>
                  </h3>
                  <ul>
                    <li className={`mb-3`}>
                      <a href="#">
                        <FormattedMessage id="popup-women.row-4-1" />
                      </a>
                    </li>
                    <li className={`mb-3`}>
                      <a href="#">
                        <FormattedMessage id="popup-women.row-4-2" />
                      </a>
                    </li>
                    <li className={`mb-3`}>
                      <a href="#">
                        <FormattedMessage id="popup-women.row-4-3" />
                      </a>
                    </li>
                    <li className={`mb-3`}>
                      <a href="#">
                        <FormattedMessage id="popup-women.row-4-4" />
                      </a>
                    </li>
                    <li className={`mb-3`}>
                      <a href="#">
                        <FormattedMessage id="popup-women.row-4-5" />
                      </a>
                    </li>
                    <li className={`mb-3`}>
                      <a href="#">
                        <FormattedMessage id="popup-women.row-4-6" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* popup man ---------------------------------- */}
            <div
              className={`header-men uppercase cursor-pointer hidden md:flex`}
            >
              <NavLink className="man-nav" to="/men">
                <FormattedMessage id="header.men" />
              </NavLink>
              <div
                className={`popup-men box-shadow-popup hidden justify-around p-[30px]`}
              >
                <div className="popup-item text-para3 font-light">
                  <h3 className={`  pb-4 font-semibold capitalize text-[18px]`}>
                    <a href="#">
                      <FormattedMessage id="popup-men.title-1" />
                    </a>
                  </h3>
                  <ul>
                    <li className={`mb-3`}>
                      <a href="#">
                        <FormattedMessage id="popup-men.row-1-1" />
                      </a>
                    </li>
                    <li className={`mb-3`}>
                      <a href="#">
                        <FormattedMessage id="popup-men.row-1-2" />
                      </a>
                    </li>
                    <li className={`mb-3`}>
                      <a href="#">
                        <FormattedMessage id="popup-men.row-1-3" />
                      </a>
                    </li>
                    <li className={`mb-3`}>
                      <a href="#">
                        <FormattedMessage id="popup-men.row-1-4" />
                      </a>
                    </li>
                    <li className={`mb-3`}>
                      <a href="#">
                        <FormattedMessage id="popup-men.row-1-5" />
                      </a>
                    </li>
                    <li className={`mb-3`}>
                      <a href="#">
                        <FormattedMessage id="popup-men.row-1-6" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="popup-item text-para3 font-light ">
                  <h3 className={` pb-4 font-semibold capitalize text-[18px]`}>
                    <a href="#">
                      <FormattedMessage id="popup-men.title-2" />
                    </a>
                  </h3>
                  <ul>
                    <li className={`mb-3`}>
                      <a href="#">
                        <FormattedMessage id="popup-men.row-2-1" />
                      </a>
                    </li>
                    <li className={`mb-3`}>
                      <a href="#">
                        <FormattedMessage id="popup-men.row-2-2" />
                      </a>
                    </li>
                    <li className={`mb-3`}>
                      <a href="#">
                        <FormattedMessage id="popup-men.row-2-3" />
                      </a>
                    </li>
                    <li className={`mb-3`}>
                      <a href="#">
                        <FormattedMessage id="popup-men.row-2-4" />
                      </a>
                    </li>
                    <li className={`mb-3`}>
                      <a href="#">
                        <FormattedMessage id="popup-men.row-2-5" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="popup-item  text-para3 font-light">
                  <h3 className={` pb-4 font-semibold capitalize text-[18px]`}>
                    <a href="#">
                      <FormattedMessage id="popup-men.title-3" />
                    </a>
                  </h3>
                  <ul>
                    <li className={`mb-3`}>
                      <a href="#">
                        <FormattedMessage id="popup-men.row-3-1" />
                      </a>
                    </li>
                    <li className={`mb-3`}>
                      <a href="#">
                        <FormattedMessage id="popup-men.row-3-2" />
                      </a>
                    </li>
                    <li className={`mb-3`}>
                      <a href="#">
                        <FormattedMessage id="popup-men.row-3-3" />
                      </a>
                    </li>
                    <li className={`mb-3`}>
                      <a href="#">
                        <FormattedMessage id="popup-men.row-3-4" />
                      </a>
                    </li>
                    <li className={`mb-3`}>
                      <a href="#">
                        <FormattedMessage id="popup-men.row-3-5" />
                      </a>
                    </li>
                    <li className={`mb-3`}>
                      <a href="#">
                        <FormattedMessage id="popup-men.row-3-6" />
                      </a>
                    </li>
                    <li className={`mb-3`}>
                      <a href="#">
                        <FormattedMessage id="popup-men.row-3-7" />
                      </a>
                    </li>
                    <li className={`mb-3`}>
                      <a href="#">
                        <FormattedMessage id="popup-men.row-3-8" />
                      </a>
                    </li>
                    <li className={`mb-3`}>
                      <a href="#">
                        <FormattedMessage id="popup-men.row-3-9" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="popup-item text-para3 font-light">
                  <h3 className={` pb-4 font-semibold capitalize text-[18px]`}>
                    <a href="#">
                      <FormattedMessage id="popup-men.title-2" />
                    </a>
                  </h3>
                  <ul>
                    <li className={`mb-3`}>
                      <a href="#">
                        <FormattedMessage id="popup-men.row-4-1" />
                      </a>
                    </li>
                    <li className={`mb-3`}>
                      <a href="#">
                        <FormattedMessage id="popup-men.row-4-2" />
                      </a>
                    </li>
                    <li className={`mb-3`}>
                      <a href="#">
                        <FormattedMessage id="popup-men.row-2-3" />
                      </a>
                    </li>
                    <li className={`mb-3`}>
                      <a href="#">
                        <FormattedMessage id="popup-men.row-4-4" />
                      </a>
                    </li>
                    <li className={`mb-3`}>
                      <a href="#">
                        <FormattedMessage id="popup-men.row-4-5" />
                      </a>
                    </li>
                    <li className={`mb-3`}>
                      <a href="#">
                        <FormattedMessage id="popup-men.row-4-6" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              className={`header-kid uppercase cursor-pointer hidden md:flex`}
            >
              <a className="kid-nav" href="#">
                <FormattedMessage id="header.kid" />
              </a>
              {/* Popup kid ------------------------------- */}
              <div
                className={`popup-kid box-shadow-popup hidden justify-around p-[30px]`}
              >
                <div className="popup-item text-para3 font-light">
                  <h3 className={`  pb-4 font-semibold capitalize text-[18px]`}>
                    <a href="#">
                      <FormattedMessage id="popup-kid.title-1" />
                    </a>
                  </h3>
                  <ul>
                    <li className={`mb-3`}>
                      <a href="#">
                        <FormattedMessage id="popup-kid.row-1-1" />
                      </a>
                    </li>
                    <li className={`mb-3`}>
                      <a href="#">
                        <FormattedMessage id="popup-kid.row-1-2" />
                      </a>
                    </li>
                    <li className={`mb-3`}>
                      <a href="#">
                        <FormattedMessage id="popup-kid.row-1-3" />
                      </a>
                    </li>
                    <li className={`mb-3`}>
                      <a href="#">
                        <FormattedMessage id="popup-kid.row-1-4" />
                      </a>
                    </li>
                    <li className={`mb-3`}>
                      <a href="#">
                        <FormattedMessage id="popup-kid.row-1-5" />
                      </a>
                    </li>
                    <li className={`mb-3`}>
                      <a href="#">
                        <FormattedMessage id="popup-kid.row-1-6" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="popup-item text-para3 font-light ">
                  <h3 className={` pb-4 font-semibold capitalize text-[18px]`}>
                    <a href="#">
                      <FormattedMessage id="popup-kid.title-2" />
                    </a>
                  </h3>
                  <ul>
                    <li className={`mb-3`}>
                      <a href="#">
                        <FormattedMessage id="popup-kid.row-2-1" />
                      </a>
                    </li>
                    <li className={`mb-3`}>
                      <a href="#">
                        <FormattedMessage id="popup-kid.row-2-2" />
                      </a>
                    </li>
                    <li className={`mb-3`}>
                      <a href="#">
                        <FormattedMessage id="popup-kid.row-2-3" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="popup-item  text-para3 font-light">
                  <h3 className={` pb-4 font-semibold capitalize text-[18px]`}>
                    <a href="#">
                      <FormattedMessage id="popup-kid.title-3" />
                    </a>
                  </h3>
                  <ul>
                    <li className={`mb-3`}>
                      <a href="#">
                        <FormattedMessage id="popup-kid.row-3-1" />
                      </a>
                    </li>
                    <li className={`mb-3`}>
                      <a href="#">
                        <FormattedMessage id="popup-kid.row-3-2" />
                      </a>
                    </li>
                    <li className={`mb-3`}>
                      <a href="#">
                        <FormattedMessage id="popup-kid.row-3-3" />
                      </a>
                    </li>
                    <li className={`mb-3`}>
                      <a href="#">
                        <FormattedMessage id="popup-kid.row-3-4" />
                      </a>
                    </li>
                    <li className={`mb-3`}>
                      <a href="#">
                        <FormattedMessage id="popup-kid.row-3-5" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="popup-item text-para3 font-light">
                  <h3 className={` pb-4 font-semibold capitalize text-[18px]`}>
                    <a href="#">
                      <FormattedMessage id="popup-kid.title-2" />
                    </a>
                  </h3>
                  <ul>
                    <li className={`mb-3`}>
                      <a href="#">
                        <FormattedMessage id="popup-kid.row-4-1" />
                      </a>
                    </li>
                    <li className={`mb-3`}>
                      <a href="#">
                        <FormattedMessage id="popup-kid.row-4-2" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              className={`header-about uppercase cursor-pointer hidden md:flex`}
            >
              <NavLink className="about-nav" to={"/contact"}>
                <FormattedMessage id="header.contact" />
              </NavLink>
            </div>
            <div
              className={`header-menu block md:hidden`}
              onTouchStart={handlePopupMenu}
            >
              <BiMenu />
            </div>
          </div>
          {/* // Header top middle ---------------------------------- */}
          <div className="header-top-middle w-1/3 flex justify-center">
            {/* <Logo className="header-logo w-[30px]" /> */}
            <NavLink to={"/"}>
              <img
                src={require("../../assets/lux-logo.png")}
                alt=""
                className={`w-[80px] cursor-pointer`}
              />
            </NavLink>
          </div>
          {/* //Header top right ----------------------------------- */}
          <div className={`header-top-right w-1/3`}>
            <div className="header-top-right-icon  flex items-center justify-end px-[15px]">
              <div className="header-icon">
                <BiSearch
                  className={` text-[26px] cursor-pointer`}
                  onTouchStart={handlePopupSearch}
                  onClick={handlePopupSearch}
                />
              </div>
              <div className="header-icon hidden md:block">
                {" "}
                <BiUser className={`text-[26px] cursor-pointer `} />
              </div>
              <div className="header-icon hidden md:block">
                {" "}
                <FiHeart className={`text-[26px] cursor-pointer `} />
                <div className="header-count">0</div>
              </div>
              <div
                className="header-icon"
                onTouchStart={handlePopupCart}
                onClick={handlePopupCart}
              >
                {" "}
                <BsCartPlus className={`text-[26px] cursor-pointer`} />
                <div className="header-count">0</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="header-popup">
        {/*Overlay to close popup while click this-------------- */}
        <div
          className={
            isOpenMenu || isOpenSearch || isOpenCart
              ? "header-overlay block z-0"
              : "hidden z-0"
          }
          // onTouchStart={handleClickOutside}
          // onClick={handleClickOutside}
        ></div>
        {/* // Popup of menu --------------------------- */}
        <div
          ref={popupMenu}
          className={isOpenMenu ? "menu-popup active-open-menu" : "menu-popup"}
        >
          <div className="menu-popup-top flex justify-between items-center">
            <div className="menu-top-left w-1/3"></div>
            <div className="menu-top-center w-1/3 flex items-center justify-center">
              <img
                src={require("../../assets/lux-logo.png")}
                alt="logo"
                className="w-[80px]"
              />
            </div>
            <div className="menu-top-right w-1/3">
              <div
                className="icon-close flex justify-end items-center"
                onTouchStart={handlePopupMenu}
              >
                <GrClose />
              </div>
            </div>
          </div>
          <div className="menu-popup-nav">
            <div className="nav-item flex justify-between">
              <div className="item-left">Nữ</div>
              <div className="item-right">
                <ArrowNext />
              </div>
            </div>
            <div className="nav-item flex justify-between">
              {" "}
              <div className="item-left">Nam</div>
              <div className="item-right">
                <ArrowNext />
              </div>
            </div>
            <div className="nav-item flex justify-between">
              <div className="item-left">Giày</div>
              <div className="item-right">
                <ArrowNext />
              </div>
            </div>
            <div className="nav-item flex justify-between">
              <div className="item-left">New product</div>
              <div className="item-right">
                <ArrowNext />
              </div>
            </div>
            <div className="nav-item flex justify-between">
              <div className="item-left">Best sale</div>
              <div className="item-right">
                <ArrowNext />
              </div>
            </div>
            <div className="nav-item flex justify-between">
              <div className="item-left">About</div>
              <div className="item-right">
                <ArrowNext />
              </div>
            </div>
          </div>
        </div>
        {/* //Header popup cart -------------------------------- */}
        <div
          ref={popupCart}
          className={
            isOpenCart
              ? "header-popup-cart active-open-cart"
              : " header-popup-cart"
          }
        >
          <div className="cart-title flex justify-start items-center uppercase">
            <FormattedMessage id="header.shopping-cart" />
          </div>
          <div className="product-list custom-scroll-bar">
            <ShoppingCartItem />
            <ShoppingCartItem />
            <ShoppingCartItem />
            <ShoppingCartItem />
            <ShoppingCartItem />
            <ShoppingCartItem />
          </div>
          <div className="shopping-cart-footer">
            <div className="subtotal">
              Subtotal: <span>$68.00 USD</span>
            </div>
            <div className="view-cart">view cart</div>
            <div className="check-out">check out</div>
          </div>
        </div>

        {/* //Header popup search -------------------------------- */}
        <div
          ref={popupSearch}
          className={
            isOpenSearch
              ? "header-popup-search active-open-search"
              : " header-popup-search"
          }
        >
          <div className="search-area flex justify-start items-center">
            <BiSearch className="w-[20%]" />
            <input
              className="w-[80%]"
              type="text"
              name="search"
              placeholder={lang && lang === "en" ? "Search" : "Tìm kiếm"}
            />
          </div>
          <div className="product-list"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
