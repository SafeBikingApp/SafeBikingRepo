import React, { useState } from "react";
import "./CSS/UserRegister.css";
import Title from "./Title";
import Button from "./Button";
import axios from "axios";
import "./CSS/Button.css";
import { Redirect } from "react-router";

function UserRegister() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
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

  return (
    <div className="userregister-wrapper">
      <Title title="Register User" />
      <div className="userregister-container dark-color-text light-color-bg">
        Username: <br />
        <input
          className="userregister-input"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />{" "}
        <br />
        Password: <br />
        <input
          className="userregister-input"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />{" "}
        <br />
        Email: <br />
        <input
          className="userregister-input"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div className="userregister-button">
          <button className="button dark-color-bg" onClick={handleSubmit}>
            REGISTER
          </button>{" "}
        </div>{" "}
      </div>
    </div>
  );
}

export default UserRegister;
