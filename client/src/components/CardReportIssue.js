import React, {useContext, useState} from "react";
import { Link } from "react-router-dom";
import Context from "../contexts/ContextApi";
import "./CSS/CardReportissue.css";

function CardReportIssue() {

    const { long, setLong, lat, setLat, userInfo, setUserInfo } = useContext(Context);
    return (
        <div className="cardreportissue-wrapper dark-color-bg">
            <span className="cardreportissue-link"><Link to={"/report_issue"} long={long} lat={lat} user_id={userInfo._id}>Report Issue</Link></span>
        </div>
    )
};

export default CardReportIssue;