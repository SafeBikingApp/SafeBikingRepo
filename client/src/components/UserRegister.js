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
                Username: 
                <input className="userregister-input" type="text" />
                Password: 
                <input className="userregister-input" type="text" />
                &nbsp;&nbsp;Email: &nbsp;&nbsp;
                <input className="userregister-input" type="text" />
                <div className="userregister-button">
                    <Button name="REGISTER" handleClick={handleClick} component="" />
                </div>
            </div>

        </div>
    )
};

export default UserRegister;