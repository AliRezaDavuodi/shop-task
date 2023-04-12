import React, { useState } from "react";
import Input from "../../components/Input/Input";
import { Link } from "react-router-dom";
import Button from "../../components/Buttons/Button";
import OpenEyeIcon from "../../assets/icons/OpenEye";

const Login = () => {
  const [showPass, setShowPass] = useState(false);

  const showPassHandler = () => setShowPass((pre) => !pre);

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen gap-2 p-6 bg-white">
      <h1 className="text-4xl font-extrabold text-center capitalize text-blackish font-Poppins">
        Login to site
      </h1>
      <p className="text-[#131822b3] text-center">
        Please enter your username and password
      </p>

      <form action="" className="w-full">
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
          <div className="pr-4 cursor-pointer" onClick={showPassHandler}>
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
