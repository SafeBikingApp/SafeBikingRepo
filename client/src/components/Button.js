import React, {useState} from "react";
import { Link } from "react-router-dom";
import "./CSS/Button.css";

function Button(props) {

    return (
        <div className="button-wrapper">
            <Link to={props.component}><button className="button dark-color-bg" onClick={props.handleClick} value={props.value}>{props.name}</button></Link>
        </div>
    )
};

export default Button;