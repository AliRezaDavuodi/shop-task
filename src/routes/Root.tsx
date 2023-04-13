import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

export const Root = () => {
  return (
    <div className="">
      <main className="bg-[#F5F5F5] h-screen">
        <div className="content">
          <Navbar />
          <Outlet />
        </div>
      </main>
    </div>
  );
};
