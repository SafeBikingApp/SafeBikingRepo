import React, {useState} from "react";
import { Link } from "react-router-dom";
import "./CSS/Map.css";

function Map() {

    return (
        <div className="map-wrapper">
            <Link to="/issue">Issue</Link>
            <br />
            <Link to="/report_issue">ReportIssue</Link>
            <br />
            <Link to="/user_interface">UserInterface</Link>
            <br />
            <Link to="/user_register">UserRegister</Link>
        </div>
    )
};

export default Map;