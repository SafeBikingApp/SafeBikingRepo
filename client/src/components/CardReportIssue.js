import React, {useState} from "react";
import { Link } from "react-router-dom";
import "./CSS/CardReportIssue.css";

function CardReportIssue(props) {

    return (
        <div className="cardreportissue-wrapper dark-color-bg">
            <span className="cardreportissue-link"><Link to={props.link}>Report Issue</Link></span>
        </div>
    )
};

export default CardReportIssue;