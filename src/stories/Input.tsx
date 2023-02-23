import React, { InputHTMLAttributes } from "react";
import "./input.css";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  size?: number;
  placeholder?: string;
  onChange?: () => void;
  label?: string;
  type?: "text" | "number" | "submit";
  name?: string;
}

export const Input = ({
  size,
  placeholder = "Enter Value",
  label,
  type = "text",
  name,
  ...rest
}: InputProps) => {
  return (
    <>
      <input
        type={type}
        id={label}
        name={name}
        placeholder={placeholder}
      ></input>
    </>
  );
};

export default Input;
