import React, {useState} from "react";
import { Link } from "react-router-dom";
import "./CSS/CardIssue.css";
import Votes from "./Votes";

function CardIssue(props) {

    return (
        <div className="cardissue-wrapper light-color-bg">
            <div className="cardissue-title dark-color-bg">{props.title}Title</div>
            <div className="cardissue-body"><Votes color={false} id={props.id} /></div>
            <div className="cardissue-footer dark-color-bg"><Link to={`/issue/${props.id}`} id={props.id}>More info</Link></div>
        </div>
    )
};

export default CardIssue;