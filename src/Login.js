import React from "react";
import "./Login.css";
import Button from "@mui/material-next/Button";
import { auth, provider } from "./firebase";

function Login() {
  const signIn = (e) => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  
  return (
    <div className="Login">
      <div className="login__container">
        <img
          src="https://cdn.bfldr.com/5H442O3W/at/pl546j-7le8zk-afym5u/Slack_Mark_Web.png?auto=webp&format=png"
          alt=""
        />
        <h1>Sign in the Slack Clone</h1>
        <p>www.slockclone.com</p>
        <Button onClick={signIn}>Sign In with Google</Button>
      </div>
    </div>
  );
}

export default Login;
