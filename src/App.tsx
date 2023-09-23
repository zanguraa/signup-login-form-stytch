import React from "react";
import "./App.css";
import Signup from "./pages/signup/Signup";
import { Email, Lock } from "@mui/icons-material";
import Login from "./pages/login/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import WelcomePage from "./components/WelcomePage";

function App() {
  return (
    <div className="App bg-body-tertiary">
      <Router>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        {/* <div className="form-group">


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
        {/* <Login /> */}
      </Router>
    </div>
  );
}

export default App;
