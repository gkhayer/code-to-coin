import React from "react";
import "./input.css";

interface InputProps {
  size?: "small" | "medium" | "large";
  placeholder?: string;
  onChange?: () => void;
  label?: string;
  type?: "text" | "number" | "submit";
  name?: string;
}

export const Input = ({
  size = "small",
  placeholder = "Enter Value",
  label,
  type = "text",
  name,
  ...props
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
