import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
//setup react router dom
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
  NavLink,
} from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import { store } from "./redux/configStore";
import HomeTemplate from "./templates/HomeTemplate";
import Demo from "./pages/Demo/Demo";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import "./assets/scss/styles.scss";
import ResponsiveItem from "./HOC/ResponsiveItem/ResponsiveItem";
import HomeMobile from "./pages/Home/HomeMobile";
import HomeTemplateMobile from "./templates/HomeTemplateMobile";

// import {} from 'react-router-dom'
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route
          path=""
          element={
            <ResponsiveItem
              Component={HomeTemplate}
              ComponentMobile={HomeTemplateMobile}
           /> } >
          <Route
            index
            element={
              <ResponsiveItem Component={Home} ComponentMobile={HomeMobile} />
            }
          ></Route>
          <Route
            path="home"
            element={
              <ResponsiveItem Component={Home} ComponentMobile={HomeMobile} />
            }
          ></Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="demo" element={<Demo />}></Route>
          <Route path="detail">
            <Route path=":id"></Route>
          </Route>
          <Route path="*" element={<Navigate to="" />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);
