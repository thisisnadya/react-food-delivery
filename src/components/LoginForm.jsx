import React from "react";
import { useNavigate } from "react-router-dom";

function LoginForm(props) {
  const navigate = useNavigate();
  const register = () => {
    navigate("/register");
  };

  let { handleSubmit, setEmail, setPassword } = props.loginState;

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="mb-3">
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          className="form-control"
        />
      </div>
      <div className="mb-3 mt-5 text-center">
        <button className="btn btn-custom">Login</button>
        <p>
          Don't have an account?
          <button className="btn btn-navigate" onClick={register}>
            Register
          </button>
        </p>
      </div>
    </form>
  );
}

export default LoginForm;
