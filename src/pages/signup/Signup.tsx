import React from "react";
import signupImage from "../../assets/images/signup.jpg";
import { Email, Person, Lock, LockOutlined } from "@mui/icons-material";
import "./signup.css";

const Signup = () => {
  return (
    <div className="container">
      <div className="signup-form">
        {" "}
        <h1>Log in</h1>
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
          <input type="password" placeholder="Confirm Password" />
        </div>
        <button className="btn btn-success">Log in</button>
      </div>
      <div>
        <img src={signupImage} alt="signup" />
      </div>
    </div>
  );
};

export default Signup;
