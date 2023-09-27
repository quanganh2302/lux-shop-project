import React from "react";
import "./Page404.scss";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import imgBg from "../../assets/background-err.jpg";
const Page404 = () => {
  return (
    <section style={{ backgroundImage: `url(${imgBg})` }} className="err-404">
      <div className="wrap-content">
        <h2>
          Oh No!
          <br />
          It looks like you are lost
        </h2>
        <p>The page you're looking for is not here.</p>
        <Button
          to={"/"}
          width={"150px"}
          height={"40px"}
          border={"1px solid #222222"}
          fontSize={"12px"}
          fontWeight={"500px"}
          color={"#222222"}
          text={"go home"}
          className={"err-btn"}
        ></Button>
      </div>
    </section>
  );
};

export default Page404;
