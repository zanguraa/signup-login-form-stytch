import React, { useState } from "react";
import signupImage from "../../assets/images/signup.jpg";
import { Email, Person, Lock, LockOutlined } from "@mui/icons-material";
import "./signup.css";
import { useStytch } from "@stytch/react";
import { useNavigate } from "react-router-dom"; // Import useHistory

interface SignupProps {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
}


const Signup = ({ name, setName }: SignupProps) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const navigate = useNavigate(); // Call useHistory to get access to the history object. This is where we can redirect the user to a different page.

  const stychClient = useStytch();

  const signUp = () => {
    stychClient.passwords
      .strengthCheck({ email, password })
      .then((res) => {
        console.log("Success:", res);
        navigate("/congrats"); // Use navigate function
      })
      .catch((err) => {
        console.log("Error:", err);
      });
    stychClient.passwords.create({
      email,
      password,
      session_duration_minutes: 60,
    });
  };

  return (
    <div className="container">
      <div className="signup-form">
        {" "}
        <h1>Sign Up</h1>
        <div className="form-group">
          <label htmlFor="name">
            <Person />
          </label>
          <input
            type="text"
            placeholder="Your Name"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
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
            placeholder="Your Password"
            onChange={(e) => {
              setPassword(e.target.value);
              setConfirmPassword(e.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">
            <LockOutlined />
          </label>
          <input
            type="password"
            id="password"
            placeholder="Confirm Password"
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
          />
        </div>
        <button className="btn btn-success" onClick={signUp}>
          Sign Up
        </button>
      </div>
      <div>
        <img src={signupImage} alt="signup" />
      </div>
      <div className="sign-in">
        <p className="text-center mt-2">
          Already have an account? <a href="/login">Log in</a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
