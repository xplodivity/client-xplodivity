"use client";

import { useLoginUserMutation } from "@app/store/services/user";
import TextInput from "@components/TextInput";
import React, { useState } from "react";
import ForgotPassword from "./ForgotPassword";

const Login = ({ setIsLoginView }) => {
  const [login] = useLoginUserMutation();
  const [value, setValue] = useState({
    Email: "",
    Password: "",
  });
  const [showForgotPassword, setForgotPassword] = useState(false);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const inputData = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setIsLoading(true);
      const data = {
        email: value.Email,
        password: value.Password,
      };

      const res = await login(data).unwrap();

      if (!res.success) {
        if (!res.userExist) {
          setError(
            "Invalid email. Please try with a different email or sign up if you dont have an account."
          );
        } else {
          setError("Incorrect password. Please try again.");
        }
      }
    } catch {
      setError("Incorrect password. Please try again.");
    }

    setIsLoading(false);
  }

  if (showForgotPassword) {
    return <ForgotPassword setForgotPassword={setForgotPassword} />;
  }

  return (
    <div className="flex-center flex-col gap-5">
      <TextInput
        label="Email"
        name="Email"
        type="Email"
        value={value.Email}
        onChange={inputData}
      />
      <TextInput
        label="Password"
        name="Password"
        type="Password"
        value={value.Password}
        onChange={inputData}
      />
      <button className="btn btn-secondary" onClick={handleSubmit}>
        LOGIN
      </button>

      {error !== "" && error}

      <div onClick={() => setForgotPassword(true)}>Forgotten password?</div>

      <p onClick={() => setIsLoginView(false)}>
        Dont have an account? Sign up.
      </p>
    </div>
  );
};

export default Login;