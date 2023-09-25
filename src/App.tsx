import React, { useState } from "react";
import "./App.css";
import Signup from "./pages/signup/Signup";
import Login from "./pages/login/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import WelcomePage from "./components/WelcomePage";
import RessetPassword from "./pages/resset/RessetPassword";
import { StytchHeadlessClient } from "@stytch/vanilla-js/headless";
import { StytchProvider } from "@stytch/react";
import Congrats from "./pages/congrats/Congrats";

function App() {
  const [name, setName] = useState<string>("");
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false); // Add isAuthenticated state variable and setIsAuthenticated function to App component

  const stytchClient = new StytchHeadlessClient(
    "public-token-test-f809fbac-4fe1-41b0-9cc9-15fb0b808ddb"
  );

  console.log("auth is?", isAuthenticated);

  return (
    <div className="App bg-body-tertiary">
      <Router>
        <StytchProvider stytch={stytchClient}>
          <Routes>
            <Route path="/" element={<WelcomePage />} />
            <Route
              path="/signup"
              element={<Signup name={name} setName={setName} />}
            />
            <Route
              path="/login"
              element={<Login setIsAuthenticated={setIsAuthenticated} />}
            />
            <Route path="/resset/*" element={<RessetPassword />} />
            <Route path="/congrats" element={<Congrats name={name} />} />
          </Routes>
        </StytchProvider>
      </Router>
    </div>
  );
}

export default App;
