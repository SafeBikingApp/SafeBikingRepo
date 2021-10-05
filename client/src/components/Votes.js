import React, {useState, useEffect} from "react";
import "./CSS/Votes.css";
import axios from "axios";
import {ReactComponent as Up} from "./thumbs-up.svg";
import {ReactComponent as Down} from "./thumbs-down.svg";

function Votes(props) {

    const [textColor, setTextColor] = useState(false)

    useEffect(()=>{
        axios
        .post(`api/issues/${props.id}`)
        .then((res) => {
            console.log(res)
            setData(res.data)
        })
        .catch((err) => {
          console.log(err)
        });
    },[]);

    const [data, setData] = useState([]);

    const handleClickUp = (e) => {
        axios
        .post(`api/issues/${props.id}/upVote`)
        .then((res) => {
            console.log(res)
        })
        .catch((err) => {
          console.log(err)
        });
    };
    const handleClickDown = (e) => {
        axios
        .post(`api/issues/${props.id}/downVote`)
        .then((res) => {
            console.log(res)
        })
        .catch((err) => {
          console.log(err)
        });
    };

    return (
        <div className={textColor === true ? "votes-wrapper light-color-text" : "votes-wrapper dark-color-text"}>
            <div className="votes-thumb">
            <span className={textColor === true ? "votes-number light-color-text" : "votes-number dark-color-text"}>{data.upvotes}</span>&nbsp;<Up onClick={handleClickUp} />
            </div>
            <div className="votes-thumb">
            <span className={textColor === true ? "votes-number light-color-text" : "votes-number dark-color-text"}>{data.downvotes}</span>&nbsp;<Down onClick={handleClickDown} />
            </div>
        </div>
    )
};

export default Votes;