import React from "react";
import google from "../../photos/socialLogin/google.png";
import facebook from "../../photos/socialLogin/facebook.png";
import github from "../../photos/socialLogin/github.png";
import "./SocialLogin.css";
import auth from "../../firebase_init";
import { useSignInWithFacebook, useSignInWithGithub, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, githubUser, githubLoading, githubError] = useSignInWithGithub(auth);
    const [signInWithFacebook, facebookUser, facebookLoading, facebookError] = useSignInWithFacebook(auth);
    const navigate = useNavigate()
    const location = useLocation()

    let from = location.state?.from?.pathname || "/";

    if(user || githubUser || facebookUser){
        navigate(from , {replace: true})
    }
    
  return (
    <div className="mt-3">
      <button onClick={() => signInWithGoogle()} className="btn google-btn me-5">
        <img width="30px" className="" src={google} alt="" />
        <span className="mx-2">Google with Login</span>
      </button>
      <button onClick={() => signInWithFacebook()} className=" btn facebook-btn me-5">
        <img width="30px" className="" src={facebook} alt="" />
        <span className="mx-2">Facebook with Login</span>
      </button>
      <button onClick={() => signInWithGithub()} className=" btn github-btn">
        <img width="30px" className="" src={github} alt="" />
        <span className="mx-2">Github with Login</span>
      </button>
    </div>
  );
};

export default SocialLogin;
