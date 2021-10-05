import React, {useState} from "react";
import "./CSS/UserLogin.css";
import Title from "./Title";
import Button from "./Button";

function UserLogin() {

    const handleClickLogin = (e) => {

    };
    const handleClickRegister = (e) => {

    };

    return (
        <div className="userlogin-wrapper">
            <Title title="User Log-in / Register" />
            <div className="userlogin-container light-color-bg dark-color-text">
                <h2>Log in</h2>
                Username:
                <input className="userlogin-input" type="text" />
                Password:
                <input className="userlogin-input" type="text" />
                <div className="userlogin-button">
                    <Button name="LOG IN" handleClick={handleClickLogin} component="" />
                </div>
            </div>

            <div className="userlogin-container dark-color-text light-color-bg">
                <h2>Register</h2>
                Username:<br />
                <input className="userlogin-input" type="text" /><br />
                Password:<br />
                <input className="userlogin-input" type="text" /><br />
                Email:<br />
                <input className="userlogin-input" type="text" />
                <div className="userlogin-button">
                    <Button name="REGISTER" handleClick={handleClickRegister} />
                </div>
            </div>
        </div>
    )
};

export default UserLogin;