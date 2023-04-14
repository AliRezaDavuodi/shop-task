import React, { FC } from "react";
import { ButtonProps } from "../../@types/components/Button";

const Button: FC<ButtonProps> = (props) => {
  const { subject, extraBtnClass, disabled } = props;

  return (
    <button
      disabled={disabled || false}
      className={`bg-blackish disabled:cursor-not-allowed disabled:bg-opacity-70 w-full font-semibold text-white rounded-[10px] p-4 duration-150 hover:scale-101 hover:shadow select-none hover:opacity-90 ${extraBtnClass}`}
    >
      {subject}
    </button>
  );
};

export default Button;
