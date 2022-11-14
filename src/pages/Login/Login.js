import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  useSendEmailVerification,
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import auth from "../../firebase_init";
import SocialLogin from "../SocialLogin/SocialLogin";
import './Login.css'

const Login = () => {
  const [load, setLoad] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const navigate = useNavigate();
  const location = useLocation();
  const [sendEmailVerification, sending, emailError] =
    useSendEmailVerification(auth);
  const [sendPasswordResetEmail, resetSending, resetError] =
    useSendPasswordResetEmail(auth);

  const from = location.state?.from?.pathname || "/";

  if (user) {
    navigate(from, { replace: true });
  }

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleEmailVerification = async () => {
    await sendEmailVerification();
  };
  const handleResetPassword = async () => {
    await sendPasswordResetEmail(email);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setLoad(true);

    signInWithEmailAndPassword(email, password);
    fetch('https://bikes-warehouse-server.herokuapp.com/login', {
      method: "POST",
    body: JSON.stringify({email}),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        // console.log(json)
        localStorage.setItem('accessToken', `Bearer ${json.token}`)
      });

    e.target.reset();
    setLoad(false);
  };
  return (
    <div
      className=" mx-auto login-container"
      style={{ marginTop: "100px", marginBottom: "50px" }}
    >
      <h2>Login</h2>
      <div className={`lds-circle ${!load && "d-none"}`}>
        <div></div>
      </div>
      <form className="" onSubmit={handleFormSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={handleEmail}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            onChange={handlePassword}
          />
        </div>
        <Link
          className="register-login-link"
          to=""
          onClick={handleResetPassword}
        >
          Reset Password
        </Link>
        <Link
          className="register-login-link"
          to=""
          onClick={handleEmailVerification}
        >
          Email Verification
        </Link>
        <div className="">
          <Link className="register-login-link" to="/register">
            Create an Account ?
          </Link>
        </div>
        <p>
          <b className="text-danger">{error?.message}</b>
        </p>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
      <SocialLogin />
    </div>
  );
};

export default Login;
