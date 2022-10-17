import React from "react";
import RegisterForm from "../components/RegisterForm";
import Header from "../components/Header";

function Register() {
  return (
    <div>
      <Header />
      <div className="new-section d-flex justify-content-center align-items-center flex-column">
        <h1>Register</h1>
        <RegisterForm />
      </div>
    </div>
  );
}

export default Register;
