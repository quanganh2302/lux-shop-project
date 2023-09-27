import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Router,
  Navigate,
} from "react-router-dom";
// import { routes } from "./routes/index.js";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
// import { fetchProfile } from "./features/Auth/thunk";
import ScrollToTop from "./utils/ScrollToTop";
import RouteComponent from "./hoc/RouteComponent";
import HomeWomen from "./pages/Home-women/HomeWomen.jsx";
import HomeMen from "./pages/Home-men/HomeMen.jsx";
import HomeLayout from "./hoc/HomeLayout";
import Page404 from "./pages/404-page/Page404";
import ContactMe from "./components/Contact-me/ContactMe";
import HomeContact from "./pages/Home-contact/HomeContact";
import HomeProductDetail from "./pages/Home-product-detail/HomeProductDetail";
import HomeProductList from "./pages/Home-product-list/HomeProductList.jsx";
// import SignIn from "./features/Auth/SignIn";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        {/* <Route
          path="/signin"
          element={
            <RouteComponent
              isAuth={true}
              Component={SignIn}
              redirectPath={"/"}
            ></RouteComponent>
          }
        ></Route> */}
        <Route path="*" element={<Navigate to="/404"></Navigate>} />
        <Route
          path="/"
          element={<RouteComponent Component={HomeLayout}></RouteComponent>}
        >
          <Route
            path="/"
            element={<RouteComponent Component={HomeWomen}></RouteComponent>}
          ></Route>
        </Route>
        <Route
          path="/men"
          element={<RouteComponent Component={HomeLayout}></RouteComponent>}
        >
          <Route
            path="/men"
            element={<RouteComponent Component={HomeMen}></RouteComponent>}
          ></Route>
        </Route>
        <Route
          path="/bags"
          element={<RouteComponent Component={HomeLayout}></RouteComponent>}
        >
          <Route
            path="/bags"
            element={<RouteComponent Component={HomeMen}></RouteComponent>}
          ></Route>
        </Route>
        <Route
          path="/about"
          element={<RouteComponent Component={HomeLayout}></RouteComponent>}
        ></Route>
        <Route
          path="/wish-list"
          element={<RouteComponent Component={HomeLayout}></RouteComponent>}
        ></Route>
        <Route
          path="/404"
          element={<RouteComponent Component={HomeLayout}></RouteComponent>}
        >
          <Route
            path="/404"
            element={<RouteComponent Component={Page404}></RouteComponent>}
          ></Route>
        </Route>
        <Route
          path="/contact"
          element={<RouteComponent Component={HomeLayout}></RouteComponent>}
        >
          <Route
            path="/contact"
            element={<RouteComponent Component={HomeContact}></RouteComponent>}
          ></Route>
        </Route>
        <Route
          path="/product"
          element={<RouteComponent Component={HomeLayout}></RouteComponent>}
        >
          <Route
            path="/product"
            element={
              <RouteComponent Component={HomeProductDetail}></RouteComponent>
            }
          ></Route>
        </Route>
        <Route
          path="/products"
          element={<RouteComponent Component={HomeLayout}></RouteComponent>}
        >
          <Route
            path="/products"
            element={
              <RouteComponent Component={HomeProductList}></RouteComponent>
            }
          ></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
