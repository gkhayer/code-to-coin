import React, { InputHTMLAttributes } from "react";
import "./input.css";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  size?: number;
  placeholder?: string;
  label?: string;
  type?: "text" | "number" | "submit";
  name?: string;
  value?: any
}

export const Input = ({
  size,
  placeholder = "Enter Value",
  label,
  type = "text",
  name,
  value,
  ...rest
}: InputProps) => {
  return (
    <>
      <input
        type={type}
        id={label}
        name={name}
        placeholder={placeholder}
        {...rest}
      ></input>
    </>
  );
};

export default Input;
