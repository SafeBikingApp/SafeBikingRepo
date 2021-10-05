import React, {useState} from "react";
import "./CSS/Title.css";

function Title(props) {

    return (
        <div className="title-wrapper dark-color-bg">
            {props.title}
        </div>
    )
};

export default Title;