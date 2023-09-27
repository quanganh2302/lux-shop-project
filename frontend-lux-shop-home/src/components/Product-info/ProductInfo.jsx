import "./ProductInfo.scss";
import React, { useEffect, useRef, useState } from "react";
// import img
import img1 from "../../assets/product-info-1.jpg";
import img2 from "../../assets/product-info-2.jpg";
import img3 from "../../assets/product-info-3.jpg";

import { BsFillStarFill } from "react-icons/bs";
const ProductInfo = () => {
  const [active, setActive] = useState(1);
  const handleShowContent = (value) => {
    setActive(value);
  };
  const onTouch = (value) => {
    if (active && active === value) {
      setActive("");
    } else {
      setActive(value);
    }
  };
  useEffect(() => {
    if (window.matchMedia("(min-width: 760px)").matches) {
      setActive(1);
    } else {
      setActive("");
    }
  }, []);
  return (
    <section className="product-info-home container-padding">
      <div className="info-nav">
        <h3
          onClick={() => handleShowContent(1)}
          className={active === 1 ? " active" : ""}
        >
          Description
        </h3>
        <h3
          onClick={() => handleShowContent(2)}
          className={active === 2 ? " active" : ""}
        >
          Additional Information
        </h3>
        <h3
          onClick={() => handleShowContent(3)}
          className={active === 3 ? " active" : ""}
        >
          Reviews for <span>"Bella Tie Shoulder Cami Multi Colors"</span>{" "}
        </h3>
      </div>

      <div className="info-content">
        <div
          className={
            active && active === 1 ? " content-tab touch " : "content-tab"
          }
          onClick={() => onTouch(1)}
        >
          <div className="text">Description</div>
          <div className="icon"></div>
        </div>
        <div
          className={
            // (active === 1 && active === 1) || (!active && active === 1)
            active && active === 1 ? "content-decs active" : "content-decs"
          }
        >
          <div className="desc-text">
            <div className="desc">
              <h3>Description</h3>
              <p>
                {" "}
                Finally—a white sneaker for the rest of your life. Whether
                you’re walking, working, or simply kicking it, the versatile and
                understated Royale Blanco is going to get you where you need to
                go. It might even help you feel better about where you are right
                now. Every great outfit is built from the ground up. Start here.
              </p>
              <p>
                Typography is the work of typesetters, compositors,
                typographers, graphic designers, art directors, manga artists,
                comic book artists, graffiti artists, and now—anyone who
                arranges words, letters, numbers, and symbols for publication,
                display, or distribution—from clerical workers and newsletter
                writers to anyone self-publishing materials
              </p>
            </div>

            <div className="detail">
              <h3>Details</h3>
              <ul>
                <li>
                  Made from full-grain leather sourced from top-rated local
                  Italian tanneries
                </li>
                <li>
                  Handcrafted in Italy at a best-in-class factory, a leader in
                  responsible and sustainable practices
                </li>
                <li>Lined with breathable soft leather</li>
                <li>
                  Premium footbed with antimicrobial properties and extra
                  cushioning
                </li>
                <li>100% waxed-cotton laces</li>
                <li>No virgin plastics ever</li>
              </ul>
            </div>
          </div>
          <div className="decs-img">
            <div
              className="img-item"
              style={{ backgroundImage: `url(${img1})` }}
            ></div>
            <div
              className="img-item"
              style={{ backgroundImage: `url(${img2})` }}
            ></div>
            <div
              className="img-item"
              style={{ backgroundImage: `url(${img3})` }}
            ></div>
          </div>
        </div>
        <div
          className={
            active && active === 2 ? " content-tab touch " : "content-tab"
          }
          onClick={() => onTouch(2)}
        >
          <div className="text">Additional Information</div>
          <div className="icon"></div>
        </div>
        <div
          className={
            active === 2 ? "content-add-info active" : "content-add-info"
          }
        >
          <table>
            <tbody>
              <tr>
                <td>Color</td>
                <td>
                  {" "}
                  <span>White,</span>
                  <span> Black,</span>
                  <span> Green,</span>
                  <span> Blue</span>
                </td>
              </tr>
              <tr>
                <td>Size</td>
                <td>XS, S, M</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div
          className={
            active && active === 3 ? " content-tab touch " : "content-tab"
          }
          onClick={() => onTouch(3)}
        >
          <div className="text">
            Reviews for <span>"Bella Tie Shoulder Cami Multi Colors"</span>
          </div>
          <div className="icon"></div>
        </div>
        <div
          className={active === 3 ? "content-review active" : "content-review"}
        >
          <div className="write-review">
            <div className="title">
              <h3>Customer Reviews</h3>
              <div className="title-wrap">
                <div className="starts">
                  <BsFillStarFill className="start-item" />

                  <BsFillStarFill className="start-item" />

                  <BsFillStarFill className="start-item" />

                  <BsFillStarFill className="start-item" />

                  <BsFillStarFill className="start-item" />
                </div>
                <span>Based on 2 reviews</span>
                <span>
                  <a>Write a review</a>
                </span>
              </div>
            </div>
            <div className="write-area"></div>
          </div>
          <div className="review-items">
            <div className="review-item">
              <div className="starts">
                <div className="start-item">
                  <BsFillStarFill />
                </div>
                <div className="start-item">
                  <BsFillStarFill />
                </div>
                <div className="start-item">
                  <BsFillStarFill />
                </div>
                <div className="start-item">
                  <BsFillStarFill />
                </div>
                <div className="start-item">
                  <BsFillStarFill />
                </div>
              </div>
              <div className="subject">Awesome</div>
              <div className="date">Ali Dey on Jul 31, 2023</div>
              <div className="content">Recommend</div>
              <p className="report">
                <a href="">Report as Inappropriate</a>
              </p>
            </div>
            <div className="review-item">
              <div className="starts">
                <div className="start-item">
                  <BsFillStarFill />
                </div>
                <div className="start-item">
                  <BsFillStarFill />
                </div>
                <div className="start-item">
                  <BsFillStarFill />
                </div>
                <div className="start-item">
                  <BsFillStarFill />
                </div>
                <div className="start-item">
                  <BsFillStarFill />
                </div>
              </div>
              <div className="subject">Awesome</div>
              <div className="date">Ali Dey on Jul 31, 2023</div>
              <div className="content">Recommend</div>
              <p className="report">
                <a href="">Report as Inappropriate</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductInfo;
