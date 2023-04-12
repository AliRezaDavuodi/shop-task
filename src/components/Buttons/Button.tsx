import React, { FC } from "react";
import { ButtonProps } from "../../@types/components/Button";

const Button: FC<ButtonProps> = (props) => {
  const { subject, extraBtnClass } = props;

  return (
    <button
      className={`bg-blackish w-full font-semibold text-white rounded-[10px] p-4 duration-150 hover:scale-105 hover:shadow select-none  ${extraBtnClass}`}
    >
      {subject}
    </button>
  );
};

export default Button;
