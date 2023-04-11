import React from "react";
import { Outlet } from "react-router-dom";

export const Root = () => {
  return (
    <div className="flex-vertical justify-between">
      <main className="main-content h-screen w-5/6 min-w-120 bg-red-600">
        <div className="content">
          <Outlet />
        </div>
      </main>
    </div>
  );
};
