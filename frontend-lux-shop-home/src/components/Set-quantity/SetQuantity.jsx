import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";

import "./SetQuantity.scss";
const SetQuantity = () => {
  const [quantityPopup, setQuantityPopup] = useState(1);
  const decreaseProduct = () => {
    quantityPopup > 0
      ? setQuantityPopup(quantityPopup - 1)
      : setQuantityPopup(0);
  };

  const increaseProduct = () => {
    setQuantityPopup(quantityPopup + 1);
  };
  return (
    <div className="set-quantity">
      <div className="minus" onClick={decreaseProduct}>
        -
      </div>
      <div className="quantity">{quantityPopup}</div>
      <div className="plus" onClick={increaseProduct}>
        +
      </div>
    </div>
  );
};

export default SetQuantity;
