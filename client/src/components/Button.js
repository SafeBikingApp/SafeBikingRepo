import React from "react";
import "./CSS/Button.css";

function Button(props) {

    return (
        <div className="button-wrapper">
            <button className="button dark-color-bg" onClick={props.handleClick} value={props.value}>{props.name}</button>
        </div>
    )
};

export default Button;