import React from "react";
import "./MenBlog.scss";
import Button from "../Button/Button";
import imgBg1 from "../../assets/layer1.jpg";
import imgBg2 from "../../assets/layer2.jpg";

const MenBlog = () => {
  return (
    <section className="men-blog container-padding">
      <div className="blog-left">
        <div className="wrap-content">
          <div className="content-title">
            Lux <br /> fashion store.
          </div>
          <div className="content-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br /> sed
            do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
          <Button
            width={"150px"}
            height={"40px"}
            border={"1px solid #222222"}
            fontSize={"12px"}
            fontWeight={"500px"}
            color={"#222222"}
            text={"read more"}
            className={"content-btn"}
          ></Button>
        </div>
      </div>
      <div className="blog-right">
        <div style={{ backgroundImage: `url(${imgBg2})` }} className="img-main">
          <div
            style={{ backgroundImage: `url(${imgBg1})` }}
            className="img-second"
          ></div>
        </div>
        <div className="right-text"></div>
      </div>
    </section>
  );
};

export default MenBlog;
