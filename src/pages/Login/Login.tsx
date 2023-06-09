import React, { useEffect, useState } from "react";
import Input from "../../components/Input/Input";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/Buttons/Button";
import OpenEyeIcon from "../../assets/icons/OpenEye";
import { login } from "../../service/auth.service";
import { useDispatch } from "react-redux";
import { authActions } from "../../store/auth";

const Login = () => {
  const [showPass, setShowPass] = useState(false);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const showPassHandler = () => setShowPass((pre) => !pre);

  const loginUserHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const data = await login("kminchelle", "0lelplR");

      if (!data) return;

      dispatch(authActions.login(data.token));

      navigate("/products");
    } catch (error) {
      console.log({ error });
    }
  };

  useEffect(() => {
    const isAUth = localStorage.getItem("token");
    if (isAUth) navigate("/products");
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-full animate-showUp h-screen gap-2 p-6 bg-white">
      <h1 className="text-4xl font-extrabold text-center capitalize text-blackish font-Poppins">
        Login to site
      </h1>
      <p className="text-[#131822b3] text-center">
        Please enter your username and password
      </p>

      <form action="" className="w-full" onSubmit={loginUserHandler}>
        <Input
          label="Email address"
          name="email"
          type="email"
          id="email"
          placeholder="Enter your email"
        />
        <Input
          label="Password"
          name="pass"
          type={showPass ? "text" : "password"}
          id="pass"
          placeholder="Enter your password"
        >
          <div
            className="absolute top-1/2 -translate-y-1/2 right-5 cursor-pointer"
            onClick={showPassHandler}
          >
            <OpenEyeIcon />
          </div>
        </Input>

        <Link
          to="#"
          className="block mt-4 text-sm text-right select-none hover:underline"
        >
          Forgot password?
        </Link>

        <div className="mt-7">
          <Button subject="Log in" />
        </div>
      </form>
    </div>
  );
};

export default Login;
