import React from "react";
import Header from "../components/Header";
import LoginForm from "../components/LoginForm";

function Login() {
  return (
    <div>
      <Header />
      <div className="new-section d-flex justify-content-center align-items-center flex-column">
        <h1>Login</h1>
        <LoginForm />
      </div>
    </div>
  );
}

export default Login;
