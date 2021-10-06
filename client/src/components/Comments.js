import React, {useContext, useState, useEffect} from "react";
import axios from "axios";
import Context from "../contexts/ContextApi";
import "./CSS/Comments.css";

function Comments() {
       
    const { issueId, setIssueId } = useContext(Context);
    const [data, setData] = useState([])

    useEffect(()=>{
        axios
        .get(`/api/issues/${issueId}/comments`)
        .then((res) => {
            console.log(res)
            setData(res.data)
        })
        .catch((err) => {
          console.log(err)
        });
    },[]);

    return (
        <div className="comments-wrapper dark-color-text">
            <ul>
            {data.map((comment)=> {
                return(
                    <li key={comment._id}>{comment}</li>
                )
            })}
            </ul>
        </div>
    )
};

export default Comments;