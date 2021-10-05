import React, {useState} from "react";
import "./CSS/Issue.css";
import Comments from "./Comments";
import Votes from "./Votes";
import Button from "./Button";

function Issue(props) {

    const [creator, setCreator] = useState(true);

    const handleClickPhoto = ()=> {
        "upload image to db with user_id"
    };
    const handleClickModify = ()=> {
        "put values to db"
    };
    const handleClickDelete = ()=> {
        "delete values from db"
    };
    const handleClickComment = ()=> {
        "delete values from db"
    };

    return (
        <div className="issue-wrapper">
            <div className="issue-section">
                <div className="issue-title dark-color-bg">
                    {props.title}
                </div>
                <div className="issue-section-container dark-color-text">
                    {props.description}
                </div>
                <div className="issue-section-container">
                    <span className={props.picture ? "issue-section issue-center issue-modify-show" : "issue-section issue-modify-hide"}>
                        <img className="issue-img light-color-bg" src={`${props.picture}`} alt={props.title} />
                    </span>
                    <span className="issue-center dark-color-text">{props.coordinates}</span>
                </div>
            </div>
            <div className="issue-section">
                <div className="issue-title dark-color-bg">
                    Comments
                </div>
                <div className="issue-section-container"><Comments /></div>
                <div className="issue-detail issue-detail2">
                    <input className="issue-input issue-input2" type="text" /><Button handleClick={handleClickComment} name="COMMENT" component="" />
                </div>
            </div>
{/* USER MODIFICATION */}
            <div className={creator ? "issue-section issue-modify-show" : "issue-section issue-modify-hide"}>
                <div className="issue-title dark-color-bg">
                    Modify Information
                </div>
                <div className="issue-section-container">
                    <input className="issue-input" type="text" placeholder="Title" />
                    <input className="issue-input" type="text-field" placeholder="Description" />
                    <div className="issue-detail">
                        <input className="issue-input" type="" placeholder="Photo" /><Button handleClick={handleClickPhoto} name="UPLOAD" component="" />
                    </div>
                    <div className="issue-detail issue-center">
                        <Button name="CHANGE" handleClick={handleClickModify} component="" />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <Button name="DELETE" handleClick={handleClickDelete} component="" />
                    </div>
                </div>
            </div>
            <div className="issue-section dark-color-bg issue-votes">
                <Votes color={true} />
            </div>
        </div>
    )
};

export default Issue;