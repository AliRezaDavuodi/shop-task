import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Modal from "../components/Modal/Modal";
import { useSelector } from "react-redux";

export const Root = () => {
  const showModal = useSelector((state: any) => state.modal.show);

  const [isShowModal, setIsShowModal] = useState(false);

  useEffect(() => {
    if (showModal) {
      setIsShowModal(true);
      return;
    }

    setTimeout(() => {
      setIsShowModal(false);
    }, 500);
  }, [showModal]);

  return (
    <div className="">
      <main className="bg-[#F5F5F5] h-screen">
        <div className="overflow-hidden content">
          <Navbar />
          <Outlet />
          {isShowModal && <Modal />}
        </div>
      </main>
    </div>
  );
};
