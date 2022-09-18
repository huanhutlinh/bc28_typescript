import React from "react";
import { Outlet, NavLink } from "react-router-dom";

type Props = {};

export default function HomeTemplateMobile({}: Props) {
  return (
    <>
      <Outlet />
      <div style={{ height: 50 }}></div>
      <footer className="mt-5 bg-dark text-white d-flex justify-content-center p-3 position-fixed bottom-0 w-100">
        <div className="mx-5">
          <NavLink to={"/"}>
            <i className="fa fa-home" /> Home
          </NavLink>
        </div>
        <div className="mx-5">
          <NavLink to={"/"}>
            <i className="fa fa-home" /> Home
          </NavLink>
        </div>
        <div className="mx-5">
          <NavLink to={"/"}>
            <i className="fa fa-home" /> Home
          </NavLink>
        </div>
      </footer>
    </>
  );
}
