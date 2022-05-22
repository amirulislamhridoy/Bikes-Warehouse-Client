import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from "../../firebase_init";
import SocialLogin from "../SocialLogin/SocialLogin";

const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
      const navigate = useNavigate()
      const location = useLocation()

      const from = location.state?.from?.pathname || "/";
if(user){
  navigate(from, {replace: true})
}
    const handleFormSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value
        const password = e.target.password.value
        signInWithEmailAndPassword(email, password)
        e.target.reset();
    }
  return (
    <div className='w-50 mx-auto' style={{marginTop: '100px', marginBottom: '50px'}}>
        <h2>Login</h2>
      <form className='' onSubmit={handleFormSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="email"
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
            name="password"
          />
        </div>
        <div className="">
          <Link className="register-login-link" to="/register">Create an Account ?</Link>
        </div>
        <p><b className="text-danger">{error?.message}</b></p>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
      <SocialLogin />
    </div>
  );
};

export default Login;
