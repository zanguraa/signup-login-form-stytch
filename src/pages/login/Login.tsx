import React from "react";
// import "../signup/signup.css";
import "./login.css";
import signinImage from "../../assets/images/signin.jpg";
import { Email, Lock } from "@mui/icons-material";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="container container-login">
      <div className="signup-form-login">
        <div className="form-group">
          <label htmlFor="email">
            <Email />
          </label>
          <input id="email" type="email" placeholder="Your Email" />
        </div>
        <div className="form-group">
          <label htmlFor="password">
            <Lock />
          </label>
          <input type="password" placeholder="Your Password" />
        </div>
        <div
          style={{ width: "150px", marginLeft: "-150px" }}
          className="flex mt-2 align-items-start d-flex  justify-content-between"
        >
          <label htmlFor="checkbox">Remember me</label>
          <input style={{ width: "20px" }} id="checkbox" type="checkbox" />
        </div>
        <button className="btn btn-success">Log in</button>
      </div>
      <div>
        <img src={signinImage} alt="signup" />
      </div>
      <div className="sign-in">
        <p className="text-center mt-2">
          Don't have an account? <Link to="/signup">Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
