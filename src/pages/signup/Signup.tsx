import React from "react";
import signupImage from "../../assets/images/signup.jpg";
import { Email, Person, Lock, LockOutlined } from "@mui/icons-material";
import "./signup.css";

const Signup = () => {
  return (
    <div className="container">
      <div className="signup-form">
        {" "}
        <h1>Sign Up</h1>
        <div className="form-group">
          <label htmlFor="name">
            <Person />
          </label>
          <input type="text" placeholder="Your Name" />
        </div>
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
        <div className="form-group">
          <label htmlFor="password">
            <LockOutlined />
          </label>
          <input type="password" id="password" placeholder="Confirm Password" />
        </div>
        <button className="btn btn-success">Sign Up</button>
      </div>
      <div>
        <img src={signupImage} alt="signup" />
      </div>
      <div className="sign-in">
        <p className="text-center mt-2">
          Already have an account? <a href="/login">Log in</a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
