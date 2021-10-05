import React, {useState} from "react";
import "./CSS/ReportIssue.css";
import Title from "./Title";
import Button from "./Button";
/* props.long, props.lat */


function ReportIssue(props) {

    const handleClick = (e) => {
        setIssue(e.target.value)
    };
    const handleClickPhoto = (e) => {
        "upload img to db with user_id"
    };
    const handleClickReport = (e) => {
        "post values to db"
    };
    const [issue, setIssue] = useState("")
    const [agree, setAgree] = useState(false);
    const [photo, setPhoto] = useState(true);
    const [imgUrl, setImgUrl] = useState("");

    return (
        <div className="reportissue-wrapper">
            <Title title="Report Issue" />
            <div className="reportissue-section-container">
                <div className="reportissue-detail">
                    <Button component="" handleClick={handleClick} name="OBSTRUCTION" />
                    <Button component="" handleClick={handleClick} name="POTHOLE" />
                </div>
                <div className="reportissue-detail">
                    <Button component="" handleClick={handleClick} name="ACCIDENT" />
                    <Button component="" handleClick={handleClick} name="TRAFFIC DANGER" />
                </div>
            </div>
            <div className="reportissue-title dark-color-bg">
                Description:
            </div>
            <div className="reportissue-section-container">
                <div className="reportissue-detail reportissue-left-input">
                    <textarea className="reportissue-input" rows="3" placeholder="Specify the nature of the issue." />
                </div>
            </div>
            <div className="reportissue-title dark-color-bg">
                Photo:
            </div>
            <div className="reportissue-section-container">
                <div className="reportissue-detail reportissue-left-input">
                    <input className="reportissue-input" placeholder="optional" type="text" />
                    &nbsp;&nbsp;&nbsp;
                    <Button name="UPLOAD" handleClick={handleClickPhoto} />
                </div>
                <div className={photo ? "reportissue-detail reportissue-center reportissue-small" : "reportissue-detail hide-photo"}>
                    <img src={imgUrl} alt="Evidence" className="reportissue-photo light-color-bg" />
                </div>
                <div className="reportissue-detail reportissue-small dark-color-text">
                    Photo preview
                </div>
                <div className="reportissue-detail dark-color-text reportissue-left">
                    <input type="checkbox" className="reportissue-checkbox" onClick={setAgree} />I agree to the terms of service.
                </div>
                <hr />
                <div className="reportissue-center">
                    <Button name="REPORT" component="" handleClick={handleClickReport} />
                </div>
            </div>
        </div>
    )
};

export default ReportIssue;