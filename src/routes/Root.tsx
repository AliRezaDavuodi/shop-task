import React from "react";
import { Outlet } from "react-router-dom";

export const Root = () => {
  return (
    <div className="">
      <main className="">
        <div className="content">
          <Outlet />
        </div>
      </main>
    </div>
  );
};
