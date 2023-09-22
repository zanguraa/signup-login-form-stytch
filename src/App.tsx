import React from "react";
import "./App.css";
import Signup from "./pages/signup/Signup";
import { Email, Lock } from "@mui/icons-material";
import Login from "./pages/login/Login";

function App() {
  return (
    <div className="App bg-body-tertiary">
      {/* <div className="form-group">
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
      </div> */}
      {/* <Signup /> */}
      <Login />
    </div>
  );
}

export default App;
