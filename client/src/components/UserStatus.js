import React, {useState} from "react";
import { Link } from "react-router-dom";
import "./CSS/UserStatus.css";

function UserStatus(props) {

    const loggedin = props.loggedin;

    return (
        <div className="userstatus-wrapper">
            <Link to={loggedin ? "/user_interface" : "/user_login"}>
            <img className={loggedin ? "user-button user-logged-in" : "user-button user-logged-out"} src="./img/person-circle.svg" alt="User" />
            </Link>
        </div>
    )
};

export default UserStatus;

/* ? sends loggedin user_id props */