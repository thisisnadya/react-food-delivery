import React from "react";

function RegisterForm() {
  return (
    <form className="form">
      <div className="mb-3">
        <input type="email" placeholder="Email" className="form-control" />
      </div>
      <div className="mb-3">
        <input type="text" placeholder="Name" className="form-control" />
      </div>
      <div className="mb-3">
        <input
          type="password"
          placeholder="Password"
          className="form-control"
        />
      </div>
      <div className="mb-3 mt-5 text-center">
        <button className="btn btn-custom">Register</button>
        <p>Already have an account? Login</p>
      </div>
    </form>
  );
}

export default RegisterForm;
