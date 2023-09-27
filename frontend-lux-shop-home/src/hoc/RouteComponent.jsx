import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const RouteComponent = ({ isPrivate, isAuth, Component, redirectPath }) => {
  const userLogin = useSelector((state) => state.userReducer.userLogin);
  const token = localStorage.getItem("mt");
  if (isPrivate) {
    return token ? <Component /> : <Navigate to={redirectPath} />;
  }
  if (isAuth) {
    return !userLogin ? <Component /> : <Navigate to={redirectPath} />;
  }
  return <Component></Component>;
};

export default RouteComponent;
