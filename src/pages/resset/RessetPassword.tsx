import React from "react";

const RessetPassword = () => {
  return (
    <div className="container">
      <div className="resset-password">
        <h1>Resset Password</h1>
        <input type="email" placeholder="Your Email" />
        <button className="btn btn-success">Send Email</button>
      </div>
    </div>
  );
};

export default RessetPassword;
