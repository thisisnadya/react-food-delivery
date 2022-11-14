import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Header from "../components/Header";
import LoginForm from "../components/LoginForm";
import { loginAction } from "../redux/actions/actions";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    let user = {
      email,
      password,
    };

    const login = dispatch(loginAction(user));
    login
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => console.log(error));
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
