import React, { useState } from "react";
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";
import "./Footer.scss";
import Facebook from "../../assets/FacebookIcon";
import Instagram from "../../assets/InstagramIcon";
import Pinterest from "../../assets/Pinterest";
import Twitter from "../../assets/TwitterIcon";
import { AiFillGithub, AiOutlineClose, AiFillLinkedin } from "react-icons/ai";
import { BsArrowRight, BsPlusLg } from "react-icons/bs";
import { ReactComponent as MasterImg } from "../../assets/footer-visa.svg";
import { ReactComponent as ApplePay } from "../../assets/apple_pay.svg";
import { ReactComponent as Visa } from "../../assets/visa.svg";
import { ReactComponent as America } from "../../assets/american_express.svg";
import { ReactComponent as Paypal } from "../../assets/paypal.svg";
import { FormattedMessage } from "react-intl";
import { NavLink } from "react-router-dom";
const Footer = () => {
  const lang = useSelector((state) => state.homeReducer.language);
  const [isFooterListOpen, setIsFooterListOpen] = useState(false);
  const [isFooterAboutOpen, setIsFooterAboutOpen] = useState(false);
  const [isFooterShopOpen, setIsFooterShopOpen] = useState(false);
  const [isFooterCustomerOpen, setIsFooterCustomerOpen] = useState(false);

  const handleOpenFooterList = () => {
    setIsFooterListOpen(!isFooterListOpen);
  };

  const handleOpenFooterAbout = () => {
    setIsFooterAboutOpen(!isFooterAboutOpen);
  };
  const handleOpenFooterShop = () => {
    setIsFooterShopOpen(!isFooterShopOpen);
  };
  const handleOpenFooterCustomer = () => {
    setIsFooterCustomerOpen(!isFooterCustomerOpen);
  };

  return (
    <footer className="footer">
      <div className="footer-sm-screen-device">
        <div className="footer-container container-custom">
          <div className="footer-top ">
            <div className="footer-left">
              <div className="footer-left-input">
                <h4>
                  <FormattedMessage id="footer.footer-title-1" />
                </h4>
                <p>
                  <FormattedMessage id="footer.footer-decs-1" />
                </p>
                <div className="input-area">
                  <input
                    placeholder={
                      lang === "en"
                        ? "Your email address"
                        : "Địa chỉ email của bạn"
                    }
                    type="text"
                  />
                  <button>
                    <BsArrowRight className="icon" />
                  </button>
                </div>
              </div>
              <div className="footer-left-social">
                <a
                  className="social-item-1"
                  href="https://www.facebook.com/quanganh.dev/"
                >
                  <Facebook className="facebook " />
                </a>
                <div className="social-item-2">
                  <Instagram className="instagram" />
                </div>
                <a
                  href="https://www.linkedin.com/in/lucas-doan/"
                  className="social-item-3"
                >
                  <AiFillLinkedin className="twitter" />
                </a>
                <div className="social-item-4">
                  <Pinterest className="pinterest" />
                </div>
                <a
                  className="social-item-5"
                  href="https://github.com/quanganh2302"
                >
                  <AiFillGithub className="gitHub" />
                </a>
              </div>
            </div>
            <div className="footer-right ">
              <div className="footer-right-col">
                <p>
                  <FormattedMessage id="footer.footer-title-2" />{" "}
                </p>
                <ul>
                  <li>
                    <a href="">
                      <FormattedMessage id="footer.footer-row-2-1" />
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <FormattedMessage id="footer.footer-row-2-2" />
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <FormattedMessage id="footer.footer-row-2-3" />
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <FormattedMessage id="footer.footer-row-2-4" />
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <FormattedMessage id="footer.footer-row-2-5" />
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <FormattedMessage id="footer.footer-row-2-6" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="footer-right-col">
                <p>
                  <FormattedMessage id="footer.footer-title-3" />{" "}
                </p>
                <ul>
                  <li>
                    <NavLink to="/men">
                      <FormattedMessage id="footer.footer-row-3-1" />
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/">
                      <FormattedMessage id="footer.footer-row-3-2" />
                    </NavLink>
                  </li>
                  <li>
                    <a href="">
                      <FormattedMessage id="footer.footer-row-3-3" />
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <FormattedMessage id="footer.footer-row-3-4" />
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <FormattedMessage id="footer.footer-row-3-5" />
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <FormattedMessage id="footer.footer-row-3-6" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="footer-right-col">
                <p>
                  <FormattedMessage id="footer.footer-title-4" />{" "}
                </p>
                <ul>
                  <li>
                    <a href="">
                      <FormattedMessage id="footer.footer-row-4-1" />
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <FormattedMessage id="footer.footer-row-4-2" />
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <FormattedMessage id="footer.footer-row-4-3" />
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <FormattedMessage id="footer.footer-row-4-4" />
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <FormattedMessage id="footer.footer-row-4-5" />
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <FormattedMessage id="footer.footer-row-4-6" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-bottom ">
            <div className="footer-bottom-left">
              All Rights Reserved © 2023 <span className="store-name">Lux</span>{" "}
              store - Developed by{" "}
              <span className="signature">Lucas - Quang Anh</span>
            </div>
            <div className="footer-bottom-center">
              <p>Privacy Policy</p>
              <p>Returns & Exchanges</p>
              <p>Shipping & Delivery</p>
            </div>
            <div className="footer-bottom-right">
              <div className="item">
                <MasterImg />
              </div>
              <div className="item">
                <ApplePay />
              </div>
              <div className="item">
                <Visa />
              </div>
              <div className="item">
                <America />
              </div>
              <div className="item">
                <Paypal />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-smartPhone-screen-device text-white ">
        <div className="footer-item">
          <div className="footer-row " onClick={handleOpenFooterList}>
            <p>
              <FormattedMessage id="footer.footer-title-1" />
            </p>
            <div className="footer-icon">
              <BsPlusLg
                className={!isFooterListOpen ? "footer-item-hidden" : "hidden"}
              />
              <AiOutlineClose
                className={isFooterListOpen ? "footer-item-hidden" : "hidden"}
              />
            </div>
          </div>
          <div className={isFooterListOpen ? "footer-item-hidden" : "hidden"}>
            <div className="footer-left">
              <div className="footer-left-input">
                <p>
                  <FormattedMessage id="footer.footer-decs-1" />
                </p>
                <div className="input-area">
                  <input
                    placeholder={
                      lang === "en"
                        ? "Your email address"
                        : "Địa chỉ email của bạn"
                    }
                    type="text"
                  />
                  <button>
                    <BsArrowRight className="icon" />
                  </button>
                </div>
              </div>
              <div className="footer-left-social">
                <a
                  className="social-item-1"
                  href="https://www.facebook.com/quanganh.dev/"
                >
                  <Facebook className="facebook " />
                </a>
                <div className="social-item-2">
                  <Instagram className="instagram" />
                </div>
                <a
                  href="https://www.linkedin.com/in/lucas-doan/"
                  className="social-item-3"
                >
                  <AiFillLinkedin className="twitter" />
                </a>
                <div className="social-item-4">
                  <Pinterest className="pinterest" />
                </div>
                <a
                  className="social-item-5"
                  href="https://github.com/quanganh2302"
                >
                  <AiFillGithub className="gitHub" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-item">
          <div className="footer-row" onClick={handleOpenFooterAbout}>
            <p>
              <FormattedMessage id="footer.footer-title-2" />
            </p>
            <div className="footer-icon">
              <BsPlusLg
                className={!isFooterAboutOpen ? "footer-item-hidden" : "hidden"}
              />
              <AiOutlineClose
                className={isFooterAboutOpen ? "footer-item-hidden" : "hidden"}
              />
            </div>
          </div>
          <div className={isFooterAboutOpen ? "footer-item-hidden" : "hidden"}>
            <ul>
              <li>
                <a href="">
                  <FormattedMessage id="footer.footer-row-2-1" />
                </a>
              </li>
              <li>
                <a href="">
                  <FormattedMessage id="footer.footer-row-2-2" />
                </a>
              </li>
              <li>
                <a href="">
                  <FormattedMessage id="footer.footer-row-2-3" />
                </a>
              </li>
              <li>
                <a href="">
                  <FormattedMessage id="footer.footer-row-2-4" />
                </a>
              </li>
              <li>
                <a href="">
                  <FormattedMessage id="footer.footer-row-2-5" />
                </a>
              </li>
              <li>
                <a href="">
                  <FormattedMessage id="footer.footer-row-2-6" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-item">
          <div className="footer-row" onClick={handleOpenFooterShop}>
            <p>
              <FormattedMessage id="footer.footer-title-3" />
            </p>
            <div className="footer-icon">
              <BsPlusLg
                className={!isFooterShopOpen ? "footer-item-hidden" : "hidden"}
              />
              <AiOutlineClose
                className={isFooterShopOpen ? "footer-item-hidden" : "hidden"}
              />
            </div>
          </div>
          <div className={isFooterShopOpen ? "footer-item-hidden" : "hidden"}>
            <ul>
              <li>
                <a href="">
                  <FormattedMessage id="footer.footer-row-3-1" />
                </a>
              </li>
              <li>
                <a href="">
                  <FormattedMessage id="footer.footer-row-3-2" />
                </a>
              </li>
              <li>
                <a href="">
                  <FormattedMessage id="footer.footer-row-3-3" />
                </a>
              </li>
              <li>
                <a href="">
                  <FormattedMessage id="footer.footer-row-3-4" />
                </a>
              </li>
              <li>
                <a href="">
                  <FormattedMessage id="footer.footer-row-3-5" />
                </a>
              </li>
              <li>
                <a href="">
                  <FormattedMessage id="footer.footer-row-3-6" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-item">
          <div className="footer-row" onClick={handleOpenFooterCustomer}>
            <p>
              {" "}
              <FormattedMessage id="footer.footer-title-4" />
            </p>
            <div className="footer-icon">
              <BsPlusLg
                className={
                  !isFooterCustomerOpen ? "footer-item-hidden" : "hidden"
                }
              />
              <AiOutlineClose
                className={
                  isFooterCustomerOpen ? "footer-item-hidden" : "hidden"
                }
              />
            </div>
          </div>
          <div
            className={isFooterCustomerOpen ? "footer-item-hidden" : "hidden"}
          >
            <ul>
              <li>
                <a href="">
                  <FormattedMessage id="footer.footer-row-4-1" />
                </a>
              </li>
              <li>
                <a href="">
                  <FormattedMessage id="footer.footer-row-4-2" />
                </a>
              </li>
              <li>
                <a href="">
                  <FormattedMessage id="footer.footer-row-4-3" />
                </a>
              </li>
              <li>
                <a href="">
                  <FormattedMessage id="footer.footer-row-4-4" />
                </a>
              </li>
              <li>
                <a href="">
                  <FormattedMessage id="footer.footer-row-4-5" />
                </a>
              </li>
              <li>
                <a href="">
                  <FormattedMessage id="footer.footer-row-4-6" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom-left pt-6">
          All Rights Reserved © 2023 <span className="store-name">Lux</span>{" "}
          store - Developed by{" "}
          <span className="signature">Lucas Doan</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
