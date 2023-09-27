import React from "react";
import BannerHome from "../../components/Banner-home/BannerHome";
import ShopNow from "../../components/Shop-now/ShopNow";
import ProductList from "../../components/Product-list/ProductList";
import Testimonial from "../../components/Testimonial/Testimonial";
import Blog from "../../components/Blog/Blog";
import ShippingInfo from "../../components/Shipping-info/ShippingInfo";
const HomeWomen = () => {
  return (
    <section className="home-women">
      <BannerHome />
      <ShopNow />
      <ProductList />
      <Testimonial />
      <Blog />
      <ShippingInfo />
    </section>
  );
};

export default HomeWomen;
