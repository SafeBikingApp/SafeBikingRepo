import React, {useState} from "react";
import { Link } from "react-router-dom";
import "./CSS/Header.css";
import UserStatus from "./UserStatus";

function Header(props) {

    const user_id = "615b0bafd872454b7a503289";

    return (
        <div className="header-wrapper light-color-bg">
            <div className="header-title dark-color-text">
                <img className="header-logo" src="./img/logo.png" alt="Route Scout" />
                Route Scout
            </div>
            <div className="header-links dark-color-text">
                <Link to="/">HOME</Link>
                &nbsp;&nbsp;&nbsp;
                <UserStatus user_id={user_id} />
            </div>
        </div>
    )
};

export default Header;

/* app? sends user_id props */