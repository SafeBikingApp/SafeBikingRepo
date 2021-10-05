import React, { useContext, useState } from "react";
import "./CSS/UserLogin.css";
import Title from "./Title";
import Button from "./Button";
import axios from "axios";
import "./CSS/Button.css";
// import ContextApi from "../contexts/ContextApi";

function UserLogin() {
  //   const { setIsLogged } = useContext(ContextApi);

  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });
  const [registerInfo, setRegisterInfo] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [message, setMessage] = useState({
    info: "",
    state: false,
  });

  const handleClickLogin = () => {
    console.log(loginInfo);
    axios({
      method: "post",
      url: "/api/auth/log-in",
      data: loginInfo,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-type": "application/json",
      },
    })
      .then((response) => {
        console.log(response);

        if (response.data.email) {
          //   setIsLogged(true);
          //   setUserInfo(response.data);
          setMessage({ info: "Succesfully logged in", state: true });
        } else {
          setMessage({ info: response.data.message, state: true });
        }
        setTimeout(() => setMessage({ state: false, info: "" }), 5000);
      })

      .catch((error) => {
        console.log("this works", error);
      });

    setLoginInfo({
      email: "",
      password: "",
    });
  };
  const handleClickRegister = (e) => {
    axios({
      method: "post",
      url: "/api/users/sign-up",
      data: registerInfo,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-type": "application/json",
      },
    })
      .then((response) => {
        if (response.data.email) {
          setMessage({
            info: "Registration is complete, please log in",
            state: true,
          });
        } else {
          console.log(response);
          setMessage({ info: response.data.message, state: true });
        }
        setTimeout(() => setMessage({ state: false, info: "" }), 5000);
      })
      .catch((err) => {
        console.log(err);
      });

    setRegisterInfo({
      username: "",
      email: "",
      password: "",
    });
  };

  return (
    <div className="userlogin-wrapper">
      <Title title="User Log-in / Register" />
      <div className="userlogin-container light-color-bg dark-color-text">
        <h2>Log in</h2>
        Email:
        <input
          className="userlogin-input"
          type="email"
          value={loginInfo.email}
          onChange={(e) =>
            setLoginInfo({ ...loginInfo, email: e.target.value })
          }
        />
        Password:
        <input
          className="userlogin-input"
          type="password"
          value={loginInfo.password}
          onChange={(e) =>
            setLoginInfo({ ...loginInfo, password: e.target.value })
          }
        />
        <div className="userlogin-button">
          <button
            className="button dark-color-bg"
            name="LOG IN"
            onClick={handleClickLogin}>
            LOGIN
          </button>
        </div>
      </div>
      <div>{message.state && message.info}</div>
      <div className="userlogin-container dark-color-text light-color-bg">
        <h2>Register</h2>
        Username:
        <br />
        <input
          className="userlogin-input"
          type="text"
          value={registerInfo.username}
          onChange={(e) =>
            setRegisterInfo({ ...registerInfo, username: e.target.value })
          }
        />
        <br />
        Password:
        <br />
        <input
          className="userlogin-input"
          type="password"
          value={registerInfo.password}
          onChange={(e) =>
            setRegisterInfo({ ...registerInfo, password: e.target.value })
          }
        />
        <br />
        Email:
        <br />
        <input
          className="userlogin-input"
          value={registerInfo.email}
          onChange={(e) =>
            setRegisterInfo({ ...registerInfo, email: e.target.value })
          }
        />
        <div className="userlogin-button">
          <button
            onClick={handleClickRegister}
            className="button dark-color-bg">
            REGISTER
          </button>
        </div>
      </div>
    </div>
  );
}

export default UserLogin;
