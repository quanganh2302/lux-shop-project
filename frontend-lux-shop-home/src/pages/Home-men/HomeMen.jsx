import React from "react";
import MenBanner from "../../components/Men-Banner/MenBanner";
import MenTemplate from "../../components/Men-template/MenTemplate";
import MenCategory from "../../components/Men-category/MenCategory";
import MenShopNow from "../../components/Men-shop-now/MenShopNow";
import MenRecommend from "../../components/Men-recommend/MenRecommend";
import MenBlog from "../../components/Men-blog/MenBlog";
import MenSlider from "../../components/Men-slider/MenSlider";
import ShippingInfo from "../../components/Shipping-info/ShippingInfo";
const HomeMen = () => {
  return (
    <section>
      <MenBanner />
      <MenTemplate items={5} />
      <MenRecommend />
      <MenShopNow />
      <MenCategory />
      <MenBlog />
      <MenSlider />
      <ShippingInfo />
    </section>
  );
};

export default HomeMen;
