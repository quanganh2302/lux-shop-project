import React from "react";
import "./CategoryItem.scss";
const CategoryItem = (props) => {
  const { image, productName, width, height } = props;
  return (
    <section style={{ width: width, height: height }} className="category-item">
      <div className="category-img"></div>
      <div className="category-name">OUTERWEAR</div>
    </section>
  );
};
export default CategoryItem;
