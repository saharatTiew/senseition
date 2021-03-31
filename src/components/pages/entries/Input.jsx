import React from "react";
import { useForm } from "react-hook-form";

function LoginInput(props) {
  return (
    <input
      type={props.type}
      placeholder={props.placeholder}
      className="border border-dark text-secondary login-btn login-input"
      ref={props.register({ required: true })}
      name={props.name}
    />
  );
}

function RegisterInput(props) {
  return (
    <input
      type={props.type}
      placeholder={props.placeholder}
      className="border border-dark text-secondary login-btn register-input test2"
      ref={props.register({
        required: true
      })}
      onKeyUp={props.onkeyup}
      name={props.name}
    />
  );
}

export { LoginInput, RegisterInput };
