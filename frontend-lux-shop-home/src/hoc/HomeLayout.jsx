import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import TopBar from "../components/Top-bar/TopBar";
import { Outlet } from "react-router-dom";
import PopupProduct from "../components/Popup-product/PopupProduct";
import BackToTop from "../components/Back-to-top/BackToTop";
export default function HomeLayout() {
  return (
    <div className=" overflow-hidden relative">
      <TopBar />
      <Header />
      <PopupProduct />
      <Outlet />
      <BackToTop />
      <Footer />
    </div>
  );
}
