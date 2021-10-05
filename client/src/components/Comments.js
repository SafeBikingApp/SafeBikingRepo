import React, {useState} from "react";
import "./CSS/Comments.css";

function Comments() {
    const comments = ["one", "two", "three"];

    return (
        <div className="comments-wrapper dark-color-text">
            <ul>
            {comments.map((comment)=> {
                return(
                    <li key={comment._id}>{comment}</li>
                )
            })}
            </ul>
        </div>
    )
};

export default Comments;