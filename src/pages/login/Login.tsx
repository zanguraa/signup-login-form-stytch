import React from "react";
import "../signup/signup.css";
import signinImage from "../../assets/images/signin.jpg";
import { Email, Lock } from "@mui/icons-material";

const Login = () => {
  return (
    <div className="container">
      <div className="signup-form">
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
        <div style={{ display: "flex", alignContent: "center" }}>
          <label htmlFor="checkbox">Remember me</label>
          <input id="checkbox" type="checkbox" />
        </div>
        <button className="btn btn-success">Log in</button>
      </div>
      <div>
        <img src={signinImage} alt="signup" />
      </div>
    </div>
  );
};

export default Login;
