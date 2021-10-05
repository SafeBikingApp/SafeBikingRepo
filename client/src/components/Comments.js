import React, {useState, useEffect} from "react";
import axios from "axios";
import "./CSS/Comments.css";

function Comments(props) {
    
    const [data, setData] = useState([])

    useEffect(()=>{
        axios
        .get(`/api/issues/${props.issue_id}/comments`)
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

/* issue sends props issue_id */