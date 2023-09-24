import React from "react";
import "./App.css";
import Signup from "./pages/signup/Signup";
import Login from "./pages/login/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import WelcomePage from "./components/WelcomePage";
import RessetPassword from "./pages/resset/RessetPassword";

function App() {
  return (
    <div className="App bg-body-tertiary">
      <Router>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/resset/*" element={<RessetPassword />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
