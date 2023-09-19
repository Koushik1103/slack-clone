import React from "react";
import "./Login.css";
import Button from "@mui/material-next/Button";
import { auth, provider } from "./firebase";
import { actionTypes } from "./reducer";
import { useStateValue } from "./StateProvider";

function Login() {
  const [state, dispatch] = useStateValue();

  const signIn = (e) => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        console.log(result);
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="login">
      <div className="login__container">
        <img
          src="https://cdn.bfldr.com/5H442O3W/at/pl546j-7le8zk-afym5u/Slack_Mark_Web.png?auto=webp&format=png"
          alt=""
        />
        <h1>Sign in to the Slack Clone</h1>
        <p>www.slackclone.com</p>
        <Button onClick={signIn}>Sign In with Google</Button>
      </div>
    </div>
  );
}

export default Login;
