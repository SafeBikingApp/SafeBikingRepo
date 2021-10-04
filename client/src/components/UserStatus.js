import React, {useState} from "react";
import { Link } from "react-router-dom";
import "./CSS/UserStatus.css";

function UserStatus(props) {

    return (
        <div className="userstatus-wrapper">
            <Link to={props.component}><button className="user-button dark-color-bg" onClick={props.handleClick} value={props.name} /></Link>
        </div>
    )
};

export default UserStatus;