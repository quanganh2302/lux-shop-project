import React from "react";
import { FormattedMessage } from "react-intl";
import "./ShoppingCart.scss"
const ShoppingCart = () => {
  return (
    <div className="popup-cart">
      <div className="cart-title flex justify-start items-center uppercase">
        <FormattedMessage id="header.shopping-cart" />
      </div>
      <div className="product-list"></div>
    </div>
  );
};

export default ShoppingCart;
