import React from "react";
import "./congrats.css";
import { useStytch } from "@stytch/react";
import { useNavigate } from "react-router-dom";

interface SignupProps {
  name: string;
}

const Congrats = (props: SignupProps) => {
  const stytchClient = useStytch();
  const navigate = useNavigate();

  const logOut = () => {
    stytchClient.session.revoke();
    navigate("/");
  };

  return (
    <div className="container congrats">
      <h1>Congrats!</h1>
      <h2 style={{ color: "red" }}>{props.name}</h2>
      <p className="fs-1">You have successfully signed up</p>
      <button className="btn btn-primary button-logout" onClick={logOut}>
        Log Out
      </button>
    </div>
  );
};

export default Congrats;
