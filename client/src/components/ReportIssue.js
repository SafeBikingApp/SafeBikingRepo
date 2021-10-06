import React, {useContext, useState} from "react";
import "./CSS/ReportIssue.css";
import Title from "./Title";
import Button from "./Button";
import axios from "axios";
import Context from "../contexts/ContextApi";


function ReportIssue() {

    const handleClick = (e) => {
        setIssue(e.target.value)
    };
    const handleClickPhoto = (e) => {
        "upload img to db with user_id"
    };
    const handleClickReport = (e) => {
        axios({
        method: "post",
        url: 'api/issues/create',
        data: {coordinates: {lat: lat, long: long}, type: issue, user_id: userInfo._id, upVotes: userInfo._id},
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-type": "application/json",
        },
      })
        .then((res)=> console.log(res))
        .catch((err)=> console.log(err))
    };
    
    const { setUserInfo, userInfo, lat, setLat, long, setLong } = useContext(Context);
    const [issue, setIssue] = useState("")
    const [agree, setAgree] = useState(false);
    const [photo, setPhoto] = useState(true);
    const [imgUrl, setImgUrl] = useState("");
    const [description, setDescription] = useState("");

    return (
        <div className="reportissue-wrapper">
            <Title title="Report Issue" />
            <div className="reportissue-section-container">
                <div className="reportissue-detail">
                    <Button handleClick={handleClick} id="obstruction" name="OBSTRUCTION" />
                    <Button handleClick={handleClick} id="pothole" name="POTHOLE" />
                </div>
                <div className="reportissue-detail">
                    <Button handleClick={handleClick} id="accident" name="ACCIDENT" />
                    <Button handleClick={handleClick} id="traffic_danger" name="TRAFFIC DANGER" />
                </div>
            </div>
            <div className="reportissue-title dark-color-bg">
                Description:
            </div>
            <div className="reportissue-section-container">
                <div className="reportissue-detail reportissue-left-input">
                    <textarea className="reportissue-input" rows="3" placeholder="Specify the nature of the issue." onChange={(e) => setDescription(e.target.value)} />
                </div>
            </div>

{/* PHOTO UPLOAD */}
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
{/* PHOTO UPLOAD */}

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