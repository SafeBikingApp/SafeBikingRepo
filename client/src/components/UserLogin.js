import React, { useState } from "react";
import "./CSS/UserLogin.css";
import Title from "./Title";
import Button from "./Button";
import axios from "axios";
import "./CSS/Button.css";
import { Redirect } from "react-router";

function UserLogin() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClickLogin = () => {
    axios({
      method: "post",
      url: "api/users/sign-up",
      data: {
        username: username,
        email: email,
        password: password,
      },
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-type": "application/json",
      },
    })
      .then((data) => {
        console.log("Hi Jaime");
        console.log(data.data[0]);
        <Redirect to="/" />;
      })

      .catch((error) => {
        console.log(error.message);
      });

    console.log("CLICK", email);
    setUsername("");
    setEmail("");
    setPassword("");
  };
  const handleClickRegister = (e) => {};

  return (
    <div className="userlogin-wrapper">
      <Title title="User Log-in / Register" />
      <div className="userlogin-container light-color-bg dark-color-text">
        <h2>Log in</h2>
        Email:
        <input
          className="userlogin-input"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        Password:
        <input
          className="userlogin-input"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="userlogin-button">
          <Button name="LOG IN" onClick={handleClickLogin} component="" />
        </div>
      </div>

      <div className="userlogin-container dark-color-text light-color-bg">
        <h2>Register</h2>
        Username:
        <br />
        <input
          className="userlogin-input"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        Password:
        <br />
        <input
          className="userlogin-input"
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        Email:
        <br />
        <input
          className="userlogin-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div className="userlogin-button">
          <Button name="REGISTER" onClick={handleClickRegister} />
        </div>
      </div>
    </div>
  );
}

export default UserLogin;
