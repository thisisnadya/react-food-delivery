import React, { useState } from "react";
import RegisterForm from "../components/RegisterForm";
import Header from "../components/Header";
import { useDispatch, useStore } from "react-redux";
import { registerSuccess } from "../redux/actions/actions";

function Register() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");
  const store = useStore();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    let newUser = {
      email,
      username,
      password,
      checkPassword,
    };
    console.log(dispatch(registerSuccess("register action")));
    // console.log(store.getState());
  };

  let registerData = {
    handleSubmit,
    setEmail,
    setUsername,
    setPassword,
    setCheckPassword,
  };

  return (
    <div>
      <Header />
      <div className="new-section d-flex justify-content-center align-items-center flex-column">
        <h1>Register</h1>
        <RegisterForm registerState={registerData} />
      </div>
    </div>
  );
}

export default Register;
