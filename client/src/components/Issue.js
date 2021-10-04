import React, {useState} from "react";
import "./CSS/Issue.css";
import Comments from "./Comments";

function Issue() {

    return (
        <div className="issue-wrapper">
        <div className=""></div>
        <div className=""><Comments /></div>
        </div>
    )
};

export default Issue;