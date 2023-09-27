import React, { useState, useEffect } from "react";
import "./BackToTop.scss";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Sử dụng sự kiện cuộn để kiểm tra khi nào người dùng cuộn trang
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <section
      className={`back-to-top ${isVisible ? "visible" : ""}`}
      onClick={scrollToTop}
    >
      <MdOutlineKeyboardArrowUp />
    </section>
  );
};

export default BackToTop;
