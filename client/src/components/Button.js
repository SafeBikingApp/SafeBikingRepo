import React, {useState} from "react";
import { Link } from "react-router-dom";
import "./CSS/Button.css";

function Button(props) {

    return (
        <div className="button-wrapper">
            <Link to={props.component}><button className="button dark-color-bg" onClick={props.handleClick} value={props.name} /></Link>
        </div>
    )
};

export default Button;