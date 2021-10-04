import React, {useState} from "react";
import "./CSS/Header.css";
import Title from "./Title";
import Button from "./Button";
import CardReportIssue from "./CardReportIssue";

function ReportIssue() {

    const handleClick = () => {

    };

    return (
        <div className="reportissue-wrapper">
            <Title title="Report Issue" />
            <div className="reportissue-section-container">
                <div className="reportissue-title">
                    Issue:
                </div>
                <div className="">
                    <Button className="" component="" handleClick={handleClick} name="OBSTRUCTION" />
                    <Button component="" handleClick={handleClick} name="POTHOLE" />
                    <Button component="" handleClick={handleClick} name="ACCIDENT" />
                    <Button component="" handleClick={handleClick} name="TRAFFIC DANGER" />
                </div>
            </div>
        </div>
    )
};

export default ReportIssue;