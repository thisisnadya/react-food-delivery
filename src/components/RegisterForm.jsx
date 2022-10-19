import React from "react";
import { useNavigate } from "react-router-dom";

function RegisterForm() {
  const navigate = useNavigate();
  const login = () => {
    navigate("/login");
  };
  return (
    <form className="form">
      <div className="mb-3">
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <input
          type="text"
          name="username"
          placeholder="Username"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <input
          type="password"
          name="passwordCheck"
          placeholder="Password"
          className="form-control"
        />
      </div>
      <div className="mb-3 mt-5 text-center">
        <button className="btn btn-custom">Register</button>
        <p>
          Already have an account?
          <button className="btn btn-navigate" onClick={login}>
            Login
          </button>
        </p>
      </div>
    </form>
  );
}

export default RegisterForm;
