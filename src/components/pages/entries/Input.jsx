import React from "react";
import { useForm } from "react-hook-form";




function LoginInput(props) {
  return (
    <input
      type={props.type}
      placeholder={props.placeholder}
      className="border border-dark text-secondary login-btn login-input"
    />
  );
}

function RegisterInput(props) {
  const { register, handleSubmit, control, watch, errors } = useForm();
  console.log(errors)
  return (
    <input
      type={props.type}
      placeholder={props.placeholder}
      className="border border-dark text-secondary login-btn register-input test2"
      ref={register({
        required: true
      })}
      name={props.name}
    />
  );
}

export { LoginInput, RegisterInput };
