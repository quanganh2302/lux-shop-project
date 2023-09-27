import React from "react";
import "./ContactMe.scss";
import { BiSolidMap } from "react-icons/bi";
import { BsTelephone } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";

import Button from "../Button/Button";
const ContactMe = () => {
  return (
    <section className="contact container-padding">
      <div className="contact-title">Contact</div>
      <div className="contact-breadcrumb">

        <Breadcrumbs />
      </div>
      <div className="contact-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.002182697407!2d106.67347257445842!3d10.811144058553575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175292009b91817%3A0x248c50aca1355f04!2zSG_DoG5nIE1pbmggR2nDoW0sIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1694704756465!5m2!1svi!2s"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          className="map-area"
        ></iframe>
      </div>
      <div className="contact-content">
        <div className="left">
          <div className="wrap-content">
            <h3>Contact</h3>
            <p className="lorem">
              We love to hear from you on our customer service, merchandise,
              website or any topics you want to share with us. Your comments and
              suggestions will be appreciated. Please complete the form below.
            </p>
            <div className="contact-item">
              <BiSolidMap className="icon" />
              <p>Phu Nhuan, Ho Chi Minh City</p>
            </div>
            <div className="contact-item">
              <BsTelephone className="icon" />
              <p>+84 968-965-109</p>
            </div>
            <div className="contact-item">
              <AiOutlineMail className="icon" />
              <p>anh.doanquang98@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="wrap-form">
            <h3>Questions? Get in touch.</h3>
            <p className="lorem">
              Enter your details and message below and we'll get in touch asap
            </p>
            <form action="">
              <div className="name form-item">
                <label htmlFor="">Name</label>
                <input type="text" />
              </div>
              <div className="email form-item">
                <label htmlFor="">Email</label>
                <input type="email" />
              </div>
              <div className="message form-item">
                <label htmlFor="">Message</label>
                <input type="text" />
              </div>
              <Button
                text={"send"}
                border={"1px solid #000"}
                width={"100%"}
                height={"40px"}
                fontWeight={"300"}
                color={"#222222"}
                fontSize={"14px"}
                className={"contact-btn"}
              />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
