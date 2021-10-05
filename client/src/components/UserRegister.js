import React, {useState} from "react";
import "./CSS/UserRegister.css";
import Title from "./Title";
import Button from "./Button";

function UserRegister() {

    const handleClick = (e) => {

    };

    return (
        <div className="userregister-wrapper">
            <Title title="Register User" />
            <div className="userregister-container dark-color-text light-color-bg">
                Username:<br />
                <input className="userregister-input" type="text" /><br />
                Password:<br />
                <input className="userregister-input" type="text" /><br />
                Email:<br />
                <input className="userregister-input" type="text" />
                <div className="userregister-button">
                    <Button name="REGISTER" handleClick={handleClick} />
                </div>
            </div>

        </div>
    )
};

export default UserRegister;