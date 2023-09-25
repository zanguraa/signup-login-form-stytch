import React, { useState } from "react";
// import "../signup/signup.css";
import "./login.css";
import signinImage from "../../assets/images/signin.jpg";
import { Email, Lock } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useStytch } from "@stytch/react";
import { useNavigate } from "react-router-dom";

interface LoginProps {
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
}

const Login = ({ setIsAuthenticated }: LoginProps) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const stytchClient = useStytch();
  const navigate = useNavigate();

  const resetByEmail = () => {
    stytchClient.passwords.resetByEmailStart({
      email: "zanguraa@gmail.com",
    });
  };

  const login = () => {
    stytchClient.passwords
      .authenticate({
        email,
        password,
        session_duration_minutes: 60,
      })
      .then((res) => {
        console.log("Success:", res);
        setIsAuthenticated(true);
        navigate("/congrats");
      })
      .catch((err) => {
        console.log("Error:", err);
      });
    console.log("login");
  };

  return (
    <div className="container container-login">
      <div className="signup-form-login">
        <div className="form-group">
          <label htmlFor="email">
            <Email />
          </label>
          <input
            id="email"
            type="email"
            placeholder="Your Email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">
            <Lock />
          </label>
          <input
            type="password"
            id="password"
            placeholder="Your Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <div
          style={{ width: "150px", marginLeft: "-150px" }}
          className="flex mt-2 align-items-start d-flex  justify-content-between"
        >
          <label htmlFor="checkbox">Remember me</label>
          <input style={{ width: "20px" }} id="checkbox" type="checkbox" />
        </div>
        <button className="btn btn-success" onClick={login}>
          Log in
        </button>
        <button
          className="btn btn-danger text-center mt-2"
          onClick={resetByEmail}
        >
          Reset Password?
        </button>
      </div>
      <div>
        <img src={signinImage} alt="signup" />
      </div>
      <div className="sign-in">
        <p className="text-center mt-2">
          Don't have an account? <Link to="/signup">Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
