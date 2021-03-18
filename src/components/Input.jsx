import React from "react";

function Input(props) {
  return (
    <input
      type={props.type}
      placeholder={props.placeholder}
      className="border border-dark text-secondary login"
    />
  );
}

export default Input;
