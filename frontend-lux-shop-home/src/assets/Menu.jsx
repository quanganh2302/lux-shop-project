import React from "react";

const Menu = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="16"
      viewBox="0 0 30 16"
      fill={props.fill}
      stroke={props.stroke}
      className={props.className}
    >
      <rect width="25" height="2"></rect>
      <rect y="7" width="25" height="2"></rect>
      <rect y="14" width="25" height="2"></rect>
    </svg>
  );
};

export default Menu;
