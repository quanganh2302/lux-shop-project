import React from "react";
import "./ColorList.scss";
const ColorList = (props) => {
  const { color, diameter } = props;
  const diameterSecond = parseInt(diameter, 10) * 0.8 + "px";
  return (
    <section className="color-list flex justify-start items-center gap-3 flex-wrap">
      <div
        style={{ width: diameter, height: diameter }}
        className="borderColor"
      >
        <div
          style={{ width: diameterSecond, height: diameterSecond }}
          className="bgColor"
        ></div>
      </div>
      <div
        style={{ width: diameter, height: diameter }}
        className="borderColor"
      >
        <div
          style={{ width: diameterSecond, height: diameterSecond }}
          className="bgColor"
        ></div>
      </div>
    </section>
  );
};

export default ColorList;
