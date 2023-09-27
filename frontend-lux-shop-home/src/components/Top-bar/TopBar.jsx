import React, { useState, useEffect, useRef } from "react";
import styles from "../../styles";
import Facebook from "../../assets/FacebookIcon";
import Instagram from "../../assets/InstagramIcon";
import Pinterest from "../../assets/Pinterest";
import Twitter from "../../assets/TwitterIcon";
import ArrowDown from "../../assets/ArrowDown";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { LANGUAGE, CURRENCY } from "../../utils/constant";
import "./TopBar.scss";
import { useDispatch, useSelector } from "react-redux";
import actionTypes from "../../store/Home/actions/actionTypes";
import DropDown from "../DropDown/DropDown";
import { FormattedMessage } from "react-intl";
const TopBar = () => {
  const popupCurrency = useRef(null);
  const popupLang = useRef(null);
  const [isClickedLang, setIsClickedLang] = useState(false);
  const [isClickedCurrency, setIsClickedCurrency] = useState(false);

  // useEffect(() => {
  //   () => setupCode()
  //   return () => clearUpCode();
  // }, [dependence]);

  // setupCode () run with OLD value
  // while dependence changed
  // clearUpCode() run with OLD value
  // setupCode() run with NEW value

  useEffect(() => {
    if (isClickedLang || isClickedCurrency) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isClickedLang, isClickedCurrency]);

  const [lang, setLang] = useState(LANGUAGE.EN);
  const [currency, setCurrency] = useState(CURRENCY.USD);

  const dispatch = useDispatch();
  const changeLanguage = (lang) => {
    dispatch({ type: actionTypes.CHANGE_LANGUAGE, payload: lang });
    setIsClickedLang(!isClickedLang);
    setLang(lang);
  };
  const changeCurrency = (currency) => {
    dispatch({ type: actionTypes.CHANGE_CURRENCY, payload: currency });
    setIsClickedCurrency(!isClickedCurrency);
    setCurrency(currency);
  };
  const handleOutsideClick = (e) => {
    if (
      popupLang.current &&
      !popupLang.current.contains(e.target) &&
      popupCurrency.current &&
      !popupCurrency.current.contains(e.target)
    ) {
      setIsClickedLang(false);
      setIsClickedCurrency(false);
    }
    return;
  };

  return (
    <section
      className={`topBar flex items-center justify-center md:justify-between bg-topBarBgColor text-white min-h-[43px] px-[15px] md:px-[95px]`}
    >
      <div className="topBar-left ps-[15px] hidden md:flex gap-x-4 relative">
        <a href="https://www.facebook.com/quanganh.dev/">
          <Facebook className="facebook " />
        </a>
        <Instagram className="instagram" />
        <a href="https://www.linkedin.com/in/lucas-doan/">
          <AiFillLinkedin className="twitter" />
        </a>
        <Pinterest className="pinterest" />
        <a href="https://github.com/quanganh2302">
          <AiFillGithub className="gitHub" />
        </a>
      </div>
      <div className="topBar-center font-poppins text-para2 font-normal text-center">
        <FormattedMessage id="top-bar.title" />
        <span className={`text-[#FF0000] ms-1`}>10OFF</span>
      </div>
      <div
        className={`topBar-right hidden md:${styles.flexSpace} text-para2 font-normal gap-4`}
      >
        <div className="wrap-lang relative">
          <button
            className="lang flex items-center gap-1"
            onClick={() => setIsClickedLang(!isClickedLang)}
          >
            <span>{lang === LANGUAGE.EN ? "English" : "Vietnamese"}</span>
            <ArrowDown className="arrD" />
          </button>
          <div
            ref={popupLang}
            className={
              isClickedLang
                ? "block popup-lang box-shadow z-40"
                : "hidden popup-lang box-shadow z-40"
            }
          >
            <button
              className={lang && lang === LANGUAGE.EN ? "text-[#ff8421]" : ""}
              onClick={() => changeLanguage(LANGUAGE.EN)}
            >
              EngLish
            </button>
            <button
              className={lang && lang === LANGUAGE.VI ? "text-[#ff8421]" : ""}
              onClick={() => changeLanguage(LANGUAGE.VI)}
            >
              Vietnamese
            </button>
          </div>
        </div>
        <div className="wrap-flag relative">
          <button
            className={`flag  ${styles.flexSpace} gap-1`}
            onClick={() => setIsClickedCurrency(!isClickedCurrency)}
          >
            {currency === CURRENCY.USD ? (
              <>
                <img src="https://flagcdn.com/w20/gb.png" alt="" />
                <span>USD</span>
              </>
            ) : (
              <>
                <img src="https://flagcdn.com/w20/vn.png" alt="" />
                <span>VND</span>
              </>
            )}
            <ArrowDown className="arrD" />
          </button>
          <div
            className={
              isClickedCurrency
                ? "block popup-flag box-shadow z-40"
                : "hidden popup-flag box-shadow z-40"
            }
          >
            <button
              className={
                currency && currency === CURRENCY.USD
                  ? "text-[#ff8421] block flex items-center gap-2"
                  : " block flex items-center gap-2"
              }
              onClick={() => changeCurrency(CURRENCY.USD)}
            >
              <img src="https://flagcdn.com/w20/gb.png" alt="" />
              <span
                className={currency === CURRENCY.USD ? "text-[#ff8421] " : ""}
              >
                USD
              </span>
            </button>
            <button
              ref={popupCurrency}
              className={
                currency && currency === CURRENCY.VND
                  ? "text-[#ff8421] block flex items-center gap-2 pt-2 "
                  : "  pt-2 block flex items-center gap-2"
              }
              onClick={() => changeCurrency(CURRENCY.VND)}
            >
              <img src="https://flagcdn.com/w20/vn.png" alt="" />
              <span
                className={currency === CURRENCY.VND ? "text-[#ff8421] " : ""}
              >
                VND
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopBar;
