import React from "react";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { GrFacebook } from "react-icons/gr";
import {
  GoogleAuthProvider,
  signInWithPopup,
  FacebookAuthProvider,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";

function LoginForm(props) {
  const navigate = useNavigate();
  const register = () => {
    navigate("/register");
  };

  // google sign in

  const googleProvider = new GoogleAuthProvider();

  const googleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log(result.user);

      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  // facebook sign in

  // const fbProvider = new FacebookAuthProvider();

  // const facebookLogin = async () => {
  //   try {
  //     const result = await signInWithPopup(auth, fbProvider);

  //     console.log(result);
  //     navigate("/");
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

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
      <div className="mb-2 mt-3 text-center">
        <button className="btn btn-custom">Login</button>
        <p>
          Don't have an account?
          <button className="btn btn-navigate" onClick={register}>
            Register
          </button>
          <p>or</p>
        </p>
      </div>
      <div className="mb-3">
        <button
          className="btn btn-sign-in mb-3 d-flex justify-content-center align-items-center"
          onClick={googleLogin}
        >
          <FcGoogle /> <span className="ps-2 fw-500">Sign in with Google</span>
        </button>
        {/* <button
          className="btn btn-sign-in d-flex justify-content-center align-items-center"
          onClick={facebookLogin}
        >
          <GrFacebook />{" "}
          <span className="ps-2 fw-500">Sign in with Facebook</span>
        </button> */}
      </div>
    </form>
  );
}

export default LoginForm;
