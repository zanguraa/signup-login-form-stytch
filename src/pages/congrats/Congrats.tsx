import React from "react";
import "./congrats.css";

interface SignupProps {
  name: string;
}

const Congrats = (props: SignupProps) => {
  return (
    <div className="container">
      <h1>Congrats!</h1>
      <h2 style={{ color: "red" }}>{props.name}</h2>
      <p className="fs-1">You have successfully signed up</p>
      <button className="btn btn-primary button-logout">Log Out</button>
    </div>
  );
};

export default Congrats;
