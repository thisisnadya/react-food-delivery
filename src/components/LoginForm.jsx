import React from "react";

function LoginForm() {
  return (
    <form className="form">
      <div className="mb-3">
        <input type="email" placeholder="Email" className="form-control" />
      </div>
      <div className="mb-3">
        <input
          type="password"
          placeholder="Password"
          className="form-control"
        />
      </div>
      <div className="mb-3 mt-5 text-center">
        <button className="btn btn-custom">Login</button>
        <p>Don't have an account? Register</p>
      </div>
    </form>
  );
}

export default LoginForm;
