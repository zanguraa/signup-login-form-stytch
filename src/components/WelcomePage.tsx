import React from "react";
import { Link } from "react-router-dom";
import "./welcome.css";

const WelcomePage = () => {
  return (
    <div className="container container-welcome">
      <h1>Welcome </h1>
      <p className="fw-light welcome-text">
        You are viewing test page. The main purpose of this site is to connect
        the user to the main page, which is visible only after authentication.
        Authentication is done through <b>"Scatch"</b>.
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
      <div className="flex-col">
        <Link to="/resset">
          <button className="welcome-btn btn btn-success">
            Resset Password
          </button>
        </Link>
      </div>
    </div>
  );
};

export default WelcomePage;
