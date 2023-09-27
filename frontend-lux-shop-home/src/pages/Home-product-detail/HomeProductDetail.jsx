import React from "react";
import "./HomeProductDetail.scss";
import ProductDetail from "../../components/Product-detail/ProductDetail";
import ProductInfo from "../../components/Product-info/ProductInfo";
import RecommendProduct from "../../components/Recommend-product/RecommendProduct";
const HomeProductDetail = () => {
  return (
    <section>
      <ProductDetail />
      <ProductInfo />
      <RecommendProduct />
    </section>
  );
};

export default HomeProductDetail;

