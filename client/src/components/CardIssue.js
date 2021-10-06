import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Context from "../contexts/ContextApi";
import "./CSS/CardIssue.css";
import Votes from "./Votes";

function CardIssue(props) {
  const { issueId, setIssueId } = useContext(Context);

  return (
    <div className="cardissue-wrapper light-color-bg">
      <div className="cardissue-title dark-color-bg">
        {props.title}
        <span onClick={() => props.setShowIcon(true)}>&#10006;</span>
      </div>
      <div className="cardissue-body">
        <Votes color={false} issue_id={issueId} />
      </div>
      <div className="cardissue-footer dark-color-bg">
        <Link to={`/issue/${issueId}`} issue_id={issueId}>
          More info
        </Link>
      </div>
    </div>
  );
}

export default CardIssue;