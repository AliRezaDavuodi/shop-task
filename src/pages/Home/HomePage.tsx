import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../store/store";

const HomePage = () => {
  const nav = useNavigate();

  const isAuth = useSelector((state: RootState) => state.auth.token);

  useEffect(() => {
    if (isAuth) {
      nav("/products");
      return;
    }
    nav("/login");
  }, []);

  return <div className="">HomePage</div>;
};

export default HomePage;
