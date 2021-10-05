import React, {useState} from "react";
import "./CSS/UserLogin.css";
import Title from "./Title";
import Button from "./Button";

function UserLogin() {

    const handleClick = (e) => {

    };

    return (
        <div className="userlogin-wrapper">
            <Title title="User Log In" />
            <div className="userlogin-container light-color-bg dark-color-text">
                Username:
                <input className="userlogin-input" type="text" />
                Password:
                <input className="userlogin-input" type="text" />
                <div className="userlogin-button">
                    <Button name="LOG IN" handleClick={handleClick} component="" />
                </div>
            </div>
        </div>
    )
};

export default UserLogin;