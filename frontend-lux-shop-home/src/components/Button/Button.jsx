import React from "react";
import "./Button.scss";
import { NavLink } from "react-router-dom";
const Button = (props) => {
  const {
    width,
    height,
    border,
    radius,
    color,
    fontSize,
    fontWeight,
    className,
    text,
    bgColor,
    to,
  } = props;
  return (
    <NavLink
      to={to}
      className={className}
      style={{
        backgroundColor: bgColor,
        width: width,
        height: height,
        border: border,
        borderRadius: radius,
        fontSize: fontSize,
        color: color,
        fontWeight: fontWeight,
        transition: "all .5s",
        justifyContent: "center",
        textTransform: "uppercase",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
      }}
    >
      {text}
    </NavLink>
  );
};

export default Button;
