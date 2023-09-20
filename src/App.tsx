import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App bg-body-tertiary">
      <div className="container">
        <div className="signup-form">
          {" "}
          <h1>Log in</h1>
          <input type="email" placeholder="Your Email" />
          <input type="password" placeholder="Your Password" />
          <button className="btn btn-success">Log in</button>
        </div>
      </div>
    </div>
  );
}

export default App;
