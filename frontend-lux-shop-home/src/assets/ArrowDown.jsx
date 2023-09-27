import React from "react";

const ArrowDown = (props) => {
  return (
    <svg
      role="presentation"
      viewBox="0 0 19 12"
      fill={props.fill}
      stroke={props.stroke}
      className={props.className}
    >
      <polyline
        fill="none"
        stroke="currentColor"
        points="17 2 9.5 10 2 2"
        fillRule="evenodd"
        strokeWidth="2"
        strokeLinecap="square"
      ></polyline>
    </svg>
  );
};

export default ArrowDown;
