import React, {useState} from "react";
import "./CSS/Issue.css";
import Comments from "./Comments";
import Votes from "./Votes";

function Issue(props) {

    const [creator, setCreator] = useState(true);

    return (
        <div className="issue-wrapper">
            <div className="issue-section">
                <div className="issue-title dark-color-bg">
                    {props.title}
{/* DELETE LINE */}title
                </div>
                <div className="issue-section-container">
                    {props.description}
{/* DELETE LINE */}description
                </div>
                <div className="issue-section-container">
{/* DELETE LINE */}<span className="issue-img issue-center">|picture-if-available|</span>
                    <span className={props.picture ? "issue-section issue-center issue-modify-show" : "issue-section issue-modify-hide"}>
                        <img className="issue-img light-color-bg" src={`${props.picture}`} alt={props.title} />
                    </span>
                    <span className="issue-center">{props.coordinates}
{/* DELETE LINE */}coordinates
                    </span>
                </div>
            </div>
            <div className="issue-section">
                <div className="issue-title dark-color-bg">
                    Comments
                </div>
                <div className="issue-section-container"><Comments /></div>
            </div>
{/* USER MODIFICATION */}
            <div className={creator ? "issue-section issue-modify-show" : "issue-section issue-modify-hide"}>
                <div className="issue-title dark-color-bg">
                    Modify Information
                </div>
                <div className="issue-section-container">
                 FIELDS
                </div>
            </div>
            <div className="issue-section dark-color-bg issue-votes">
                <Votes />
            </div>
        </div>
    )
};

export default Issue;