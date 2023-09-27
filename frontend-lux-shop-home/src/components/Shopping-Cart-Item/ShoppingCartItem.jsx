import React from "react";
import "./ShoppingCartItem.scss";
import SetQuantity from "../Set-quantity/SetQuantity";
import img from "../../assets/Simona-Ribbed-Cardigan_01.jpg";
const ShoppingCartItem = () => {
  return (
    <div className="shopping-item">
      <div className="left" style={{ backgroundImage: `url(${img})` }}></div>
      <div className="right">
        <div className="product-name">Ultimate Crop Bandeau Tops</div>
        <div className="product-info">
          <div className="color">
            color: <span>violet</span>
          </div>
          <div className="size">
            size: <span>S</span>
          </div>
        </div>
        <div className="product-footer">
          <SetQuantity />

          <div className="product-price"> $68.00 USD</div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCartItem;
