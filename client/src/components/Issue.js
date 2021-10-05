import React, {useState, useEffect} from "react";
import "./CSS/Issue.css";
import axios from "axios";
import Comments from "./Comments";
import Votes from "./Votes";
import Button from "./Button";

function Issue() {

    useEffect(()=>{
        axios.get("/api/issues")
        .then((res)=>{
            console.log(res.data)
            setData(res.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    },[])

    const [creator, setCreator] = useState(true);
    const [data, setData] = useState([]);
    const [info, setInfo] = useState([]);
    const [issueId, setIssueId] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleClickPhoto = ()=> {
        "upload image to db with user_id"
    };
    const handleClickModify = ()=> {
        "put values to db"
    };
    const handleClickDelete = ()=> {
        "delete values from db"
    };


    
    const handleClickComment = ()=> {
        "delete values from db"
    };

    return (
        <div className="issue-wrapper">
            {data
            .filter((field)=> field._id === issueId)
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
            <div className="issue-section">
                <div className="issue-title dark-color-bg">
                    Comments
                </div>
                <div className="issue-section-container"><Comments id={info._id} /></div>
                <div className="issue-detail issue-detail2">
                    <input className="issue-input issue-input2" type="text" /><Button handleClick={handleClickComment} name="COMMENT" component="" />
                </div>
            </div>
{/* USER MODIFICATION */}
            <div className={creator ? "issue-section issue-modify-show" : "issue-section issue-modify-hide"}>
                <div className="issue-title dark-color-bg">
                    Modify Information
                </div>
                <div className="issue-section-container">
                    <input className="issue-input" type="text" placeholder="Title" onChange={setTitle((e)=> e.target.value)} />
                    <input className="issue-input" type="text-field" placeholder="Description" onChange={setDescription((e)=> e.target.value)} />
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
            <div className="issue-section dark-color-bg issue-votes">
                <Votes color={true} upvotes={info.upVotes} downvotes={info.downVotes} />
            </div>
        </div>
    )
};

export default Issue;