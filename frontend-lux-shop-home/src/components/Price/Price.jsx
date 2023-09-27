import React from "react";
import "./Price.scss";
const Price = (props) => {
  const { delPrice, insPrice } = props;
  return (
    <section className="product-price">
      <del>${delPrice}</del>
      <ins>${insPrice}</ins>
    </section>
  );
};

export default Price;
