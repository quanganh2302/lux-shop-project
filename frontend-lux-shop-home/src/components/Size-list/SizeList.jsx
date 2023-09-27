import React from "react";
import "./SizeList.scss";
const SizeList = (props) => {
  const { sizeList, className } = props;
  return (
    <section className={`size-list ${className}`}>
      <div className="size-item">s</div>
      <div className="size-item">m</div>
      <div className="size-item">l</div>
      <div className="size-item">xl</div>
    </section>
  );
};

export default SizeList;
