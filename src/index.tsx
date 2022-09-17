import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
//setup react router dom
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import { store } from "./redux/configStore";
import HomeTemplate from "./templates/HomeTemplate";
import './assets/scss/styles.scss';

// import {} from 'react-router-dom'
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="" element={<HomeTemplate />}>
          <Route index element={<Home />}></Route>
          <Route path="home" element={<Home />}></Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="detail">
            <Route path=":id"></Route>
          </Route>
          <Route path="*" element={<Navigate to="" />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);
