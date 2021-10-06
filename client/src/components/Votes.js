import React, {useContext, useState, useEffect} from "react";
import "./CSS/Votes.css";
import axios from "axios";
import Context from "../contexts/ContextApi";
import {ReactComponent as Up} from "./thumbs-up.svg";
import {ReactComponent as Down} from "./thumbs-down.svg";

function Votes(props) {

    const { issueId, setIssueId } = useContext(Context);
    const [textColor, setTextColor] = useState(false);
    const [data, setData] = useState([]);

    useEffect(()=>{
        axios
        .get(`api/issues/${issueId}`)
        .then((res) => {
            console.log(res)
            setData(res.data)
        })
        .catch((err) => {
          console.log(err)
        });
    },[]);

    return (
        <div className={textColor === true ? "votes-wrapper light-color-text" : "votes-wrapper dark-color-text"}>
            <div className="votes-thumb">
            <span className={textColor === true ? "votes-number light-color-text" : "votes-number dark-color-text"}>{data.upvotes}</span>&nbsp;<Up onClick={props.handleClickUp} />
            </div>
            <div className="votes-thumb">
            <span className={textColor === true ? "votes-number light-color-text" : "votes-number dark-color-text"}>{data.downvotes}</span>&nbsp;<Down onClick={props.handleClickDown} />
            </div>
        </div>
    )
};

export default Votes;