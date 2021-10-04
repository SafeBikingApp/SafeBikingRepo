import React, {useState} from "react";
import { Link } from "react-router-dom";
import "./CSS/CardReportIssue.css";

function CardReportIssue(props) {

    return (
        <div className="cardreportissue-wrapper light-color-bg">
            <div className="dark-color-bg">{props.title}</div>
            <div className=""><Link to={"_"}></Link></div>
            <div className="dark-color-bg"><Link to={"_"}>More info</Link></div>
            
        </div>
    )
};

export default CardReportIssue;