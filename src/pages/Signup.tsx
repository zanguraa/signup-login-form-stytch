import React from "react";
import signupImage from "../assets/images/signup.jpg";

const Signup = () => {
  return (
    <div className="container">
      <div className="signup-form">
        {" "}
        <h1>Log in</h1>
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <input type="password" placeholder="Your Password" />
        <button className="btn btn-success">Log in</button>
      </div>
      <div>
        <img src={signupImage} alt="signup" />
      </div>
    </div>
  );
};

export default Signup;
