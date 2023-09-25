import React, { useState } from "react";
import "./resset.css";
import { useStytch } from "@stytch/react";

const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState<string>(""); // Changed variable name to "newPassword"

  const stytchClient = useStytch();

  const token = new URLSearchParams(window.location.search).get("token") ?? "";

  const resetPasswordByEmail = () => {
    stytchClient.passwords.resetByEmail({
      token: token,
      password: newPassword,
      session_duration_minutes: 60,
    });
  };

  return (
    <div className="container">
      <div className="reset-password">
        {" "}
        {/* Corrected typo in class name */}
        <h1>Reset Password</h1>
        <input
          type="password" // Changed input type to "password"
          placeholder="New Password"
          value={newPassword} // Added value attribute to bind the input to the state
          onChange={(e) => setNewPassword(e.target.value)} // Updated state when the input changes
        />
        <button className="btn btn-success" onClick={resetPasswordByEmail}>
          Reset Password
        </button>
      </div>
    </div>
  );
};

export default ResetPassword;
