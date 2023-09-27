import React, { Component, Fragment } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./component/login/Login";
import Register from "./component/register/Register";
import AddProduct from "./component/add-product/AddProduct";
import AddColor from "./component/add-color/AddColor";
import AddCategories from "./component/add-categories/AddCategories";
import AddImg from "./component/add-img/AddImg";
import HomeAdmin from "./homeAdmin/HomeAdmin";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Routes>
          <Route path="/" Component={HomeAdmin} />
          <Route path="/login" Component={Login} />
          <Route path="/register" Component={Register} />
          <Route path="/add-product" Component={AddProduct} />
          <Route path="/add-color" Component={AddColor} />
          <Route path="/add-tag-categories" Component={AddCategories} />
          <Route path="/add-image" Component={AddImg} />
        </Routes>
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
