import React, {useState} from "react";
import { Link } from "react-router-dom";
import "./CSS/Header.css";
import UserStatus from "./UserStatus";

function Header() {

    return (
        <div className="header-wrapper light-color-bg">
            <div className="header-title dark-color-text">Safe Biking App</div>
            <div className="header-links dark-color-text">
                <Link to="/">HOME</Link>
                <UserStatus />
            </div>
        </div>
    )
};

export default Header;