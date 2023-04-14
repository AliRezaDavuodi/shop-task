import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const nav = useNavigate();

  useEffect(() => {
    nav("/products");
  }, []);

  return <div className="">HomePage</div>;
};

export default HomePage;
