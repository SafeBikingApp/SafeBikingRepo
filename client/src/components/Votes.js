import React, {useState} from "react";
// import "./CSS/Votes.css";

function Votes(props) {

    return (
        <div className="votes-wrapper dark-color-text">
            {props.upvotes} 👍 &nbsp;&nbsp; {props.downvotes} 👎
        </div>
    )
};

export default Votes;