import React from "react";
import { Outlet } from "react-router-dom";

export const Root = () => {
  return (
    <div className="">
      <main className="w-full h-screen bg-red-600">
        <div className="content">
          <Outlet />
        </div>
      </main>
    </div>
  );
};
