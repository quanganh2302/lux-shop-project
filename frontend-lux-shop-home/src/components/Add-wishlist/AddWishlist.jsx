import React from "react";
import "./AddWishlist.scss";
import HeartIcon from "../../assets/HeartIcon";
const AddWishlist = (props) => {
  const { className } = props;
  return (
    <div className={`add-wishlist ${className}`}>
      <div className="wishlist-icon">
        <HeartIcon className="heart-icon" />
      </div>
      <span>add to wishlist</span>
    </div>
  );
};

export default AddWishlist;
