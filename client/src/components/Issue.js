import React, {useState, useEffect} from "react";
import "./CSS/Issue.css";
import axios from "axios";
import Comments from "./Comments";
import Votes from "./Votes";
import Button from "./Button";

function Issue(props) {

    useEffect(()=>{
        axios.get("/api/issues")
        .then((res)=>{
            console.log(res.data)
            setData1(res.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    },[])

    const [creator, setCreator] = useState(false);
    const [data1, setData1] = useState([]);
    const [info, setInfo] = useState([]);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [message, setMessage] = useState("");

    const handleClickPhoto = ()=> {
        "upload image to db with user_id"
    };
    const handleClickModify = ()=> {
        "put values to db"
    };
    const handleClickDelete = ()=> {
        "delete values from db"
    };


    const handleClickUp = (e) => {
        axios
        .post(`/api/issues/${props.id}/upVote/`)
        .then((res) => {
            console.log(res)
        })
        .catch((err) => {
          console.log(err)
        });
    };
    const handleClickDown = (e) => {
        axios
        .post(`/api/issues/${props.id}/downVote/`)
        .then((res) => {
            console.log(res)
        })
        .catch((err) => {
          console.log(err)
        });
    };
    
    const [userId, setUserId] = useState(props.user_id);
    const handleClickComment = (e)=> {
        axios({
            method: "post",
            url: `/api/issues/${props.issue_id}/comments/new`,
            data: {message: message, user_id: userId},
            headers: {
              "Access-Control-Allow-Origin": "*",
              "Content-type": "application/json",
            },
          })
        .then((res) => {
            console.log(res)
        })
        .catch((err) => {
            console.log(err)
        });
    };

    return (
        <div className="issue-wrapper">
            {data1
            .filter((field)=> field._id === props.issue_id)
            .map((info)=>{
                setInfo(info)
                return (
                    <div className="issue-section">
                        <div className="issue-title dark-color-bg">
                            {info.type}
                        </div>
                        <div className="issue-section-container dark-color-text">
                            {info.description}
                        </div>
                        <div className="issue-section-container">
                            <span className={info.pictures ? "issue-section issue-center issue-modify-show" : "issue-section issue-modify-hide"}>
                                <img className="issue-img light-color-bg" src={`${info.pictures}`} alt={info.type} />
                            </span>
                            <span className="issue-center dark-color-text">{info.coordinates}</span>
                        </div>
                    </div>
                )
            })}

{/* COMMENTS COMPONENT */}
            <div className="issue-section">
                <div className="issue-title dark-color-bg">
                    Comments
                </div>
                <div className="issue-section-container"><Comments issue_id={info._id} /></div>
                <div className="issue-detail issue-detail2">
                    <input className="issue-input issue-input2" type="text" onChange={(e)=>setMessage(e.target.value)} /><Button handleClick={handleClickComment} name="COMMENT" />
                </div>
            </div>


{/* USER MODIFICATION */}
            <div className={creator ? "issue-section issue-modify-show" : "issue-section issue-modify-hide"}>
                <div className="issue-title dark-color-bg">
                    Modify Information
                </div>
                <div className="issue-section-container">
                    <input className="issue-input" type="text" placeholder="Title" onChange={(e)=> setTitle(e.target.value)} />
                    <input className="issue-input" type="text-field" placeholder="Description" onChange={(e)=> setDescription(e.target.value)} />
                    <div className="issue-detail">
                        <input className="issue-input" type="" placeholder="Photo" /><Button handleClick={handleClickPhoto} name="UPLOAD" />
                    </div>
                    <div className="issue-detail issue-center">
                        <Button name="CHANGE" handleClick={handleClickModify} />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <Button name="DELETE" handleClick={handleClickDelete} />
                    </div>
                </div>
            </div>

{/* VOTES COMPONENT */}
            <div className="issue-section dark-color-bg issue-votes">
                <Votes color={true} handleClickDown={handleClickDown} handleClickUp={handleClickUp} />
            </div>
        </div>
    )
};

export default Issue;

/* cardissue sends user_id props */