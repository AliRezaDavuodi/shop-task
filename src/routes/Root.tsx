import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import { Provider } from "react-redux";
import store from "../store/store";
import Modal from "../components/Modal/Modal";

export const Root = () => {
  return (
    <Provider store={store}>
      <div className="">
        <main className="bg-[#F5F5F5] h-screen">
          <div className="content">
            <Navbar />
            <Outlet />
            {/* {showModal && <Modal />} */}
          </div>
        </main>
      </div>
    </Provider>
  );
};
