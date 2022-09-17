import React from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";

type Props = {};

export default function HomeTemplate({}: Props) {

//   const {} = useSelector(state => state.)
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
