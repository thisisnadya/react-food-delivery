import React from "react";
import { useNavigate } from "react-router-dom";

function RegisterForm(props) {
  const navigate = useNavigate();
  const login = () => {
    navigate("/login");
  };

  let { handleSubmit, setEmail, setUsername, setPassword, setCheckPassword } =
    props.registerState;

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="mb-3">
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <input
          type="text"
          name="username"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <input
          type="password"
          name="passwordCheck"
          placeholder="Confirm Password"
          onChange={(e) => setCheckPassword(e.target.value)}
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
