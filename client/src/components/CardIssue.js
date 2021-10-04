import React, {useState} from "react";
import { Link } from "react-router-dom";
import "./CSS/CardIssue.css";
import Votes from "./Votes";

function CardIssue(props) {

    return (
        <div className="cardissue-wrapper light-color-bg">
            <div className="cardissue-title dark-color-bg">{props.text}</div>
            <div className=""><Link to={"_"}><Votes /></Link></div>
            <div className="cardissue-title dark-color-bg"><Link to={"_"}>More info</Link></div>
        </div>
    )
};

export default CardIssue;