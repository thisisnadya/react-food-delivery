import React, { useState } from "react";
import Header from "../components/Header";
import LoginForm from "../components/LoginForm";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    let user = {
      email,
      password,
    };
    console.log(user);
  };

  const loginData = {
    handleSubmit,
    setEmail,
    setPassword,
  };

  return (
    <div>
      <Header />
      <div className="new-section d-flex justify-content-center align-items-center flex-column">
        <h1>Login</h1>
        <LoginForm loginState={loginData} />
      </div>
    </div>
  );
}

export default Login;
