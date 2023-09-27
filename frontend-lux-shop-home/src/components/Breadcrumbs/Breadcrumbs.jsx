import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";
import "./Breadcrumbs.scss";
const Breadcrumbs = (props) => {
  const location = useLocation();
  const { className } = props;
  return (
    <nav className={`breadcrumb ${className}`}>
      <NavLink to="/" className={"breadcrumb-home"}>
        Home
      </NavLink>
      <NavLink
        to="/contact"
        className={
          location.pathname === "/contact"
            ? "breadcrumb-active"
            : "breadcrumb-not-active"
        }
      >
        <span>
          {" "}
          <MdKeyboardArrowRight className="breadcrumb-arrow" />
        </span>
        Contact
      </NavLink>
      <NavLink
        to="/products"
        className={
          location.pathname.startsWith("/products")
            ? "breadcrumb-active"
            : "breadcrumb-not-active"
        }
      >
        <span>
          {" "}
          <MdKeyboardArrowRight className="breadcrumb-arrow" />
        </span>
        Products
      </NavLink>
      <NavLink
        to="/products/category"
        className={
          location.pathname === "/products/category"
            ? "breadcrumb-active"
            : "breadcrumb-not-active"
        }
      >
        <span>
          {" "}
          <MdKeyboardArrowRight className="breadcrumb-arrow" />
        </span>
        Category
      </NavLink>
    </nav>
  );
};

export default Breadcrumbs;
