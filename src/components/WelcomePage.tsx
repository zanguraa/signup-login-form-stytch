import React from "react";
import { Link } from "react-router-dom";
import "./welcome.css";

const WelcomePage = () => {
  return (
    <div className="container">
      <h1>Welcome </h1>
      <p className="fw-light">
        You are viewing test page.
        <br />
        The main purpose of this site is to connect the user to the main page,
        which is visible only after authentication.
        <br />
        Authentication is done through "Scatch".
      </p>
      <div className="welcome-form">
        <Link to="/signup">
          <button className="welcome-btn btn btn-success">Sign Up</button>
        </Link>
        or
        <Link to="/login">
          <button className="welcome-btn btn btn-success">Log In</button>
        </Link>
      </div>
    </div>
  );
};

export default WelcomePage;
