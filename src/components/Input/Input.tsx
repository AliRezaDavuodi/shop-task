import React, { FC, useState } from "react";
import { InputProps } from "../../@types/components/Input";

const Input: FC<InputProps> = (props) => {
  const {
    label,
    name,
    type,
    id,
    children,
    placeholder,
    extraContainerClass,
    extraInputClass,
    extraLabelClass,
    extraInputContainerClass,
  } = props;

  const [focused, setFocused] = useState(false);

  const activeFocus = () => {
    setFocused(true);
  };
  const inActiveFocus = () => {
    setFocused(false);
  };

  return (
    <div className={`flex flex-col mt-6 ${extraContainerClass}`}>
      {label && (
        <label
          htmlFor={name}
          className={`text-blackish font-medium select-none duration-150 ${extraLabelClass} ${
            focused ? "ml-2" : " "
          }`}
        >
          {label}
        </label>
      )}
      <div
        className={`flex items-center justify-between mt-1 overflow-hidden border rounded-xl duration-150 ${
          focused ? "border-blackish" : "border-grayish"
        } ${extraInputContainerClass}`}
      >
        <input
          type={type}
          name={name}
          id={id}
          placeholder={placeholder}
          className={`outline-none bg-transparent w-full p-4 duration-150 ${extraInputClass}`}
          onFocus={activeFocus}
          onBlur={inActiveFocus}
        />
        {children}
      </div>
    </div>
  );
};

export default Input;
