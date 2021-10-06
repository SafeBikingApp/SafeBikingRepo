import React, { useState, useEffect, useContext } from "react";
import "./CSS/Issue.css";
import axios from "axios";
import Comments from "./Comments";
import Votes from "./Votes";
import Button from "./Button";
import Context from "../contexts/ContextApi";

function Issue({ match }) {
  const { userInfo } = useContext(Context);

  const { issue_id } = match.params;
  useEffect(() => {
    axios
      .get(`/api/issues/${issue_id}`)
      .then((res) => {
        console.log(res);
        setData1(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const [creator, setCreator] = useState(false);
  const [data1, setData1] = useState([]);
  const [info, setInfo] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [message, setMessage] = useState("");

  // const handleClickPhoto = () => {
  //   "upload image to db with user_id";
  // };
  // const handleClickModify = () => {
  //   "put values to db";
  // };
  // const handleClickDelete = () => {
  //   "delete values from db";
  // };

  const handleClickUp = (e) => {
    axios
      .post(`/api/issues/${issue_id}/vote/upVote`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleClickDown = (e) => {
    axios
      .post(`/api/issues/${issue_id}/vote/downVote`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const [userId, setUserId] = useState(userInfo.id);
  const handleClickComment = (e) => {
    axios({
      method: "post",
      url: `/api/issues/${issue_id}/comments/new`,
      data: { message: message, user_id: userId },
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-type": "application/json",
      },
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  console.log(data1, "data1");
  return (
    <div className="issue-wrapper">
      {data1 && (
        // .filter((field) => field._id === issue_id)
        // .map((info) => {
        //   setInfo(info);
        //   return (
        <div className="issue-section">
          <div className="issue-title dark-color-bg">{data1.type}</div>
          <div className="issue-section-container dark-color-text">
            {/* {data.description} */}
          </div>
          <div className="issue-section-container">
            {/* <span
              className={
                data.pictures
                  ? "issue-section issue-center issue-modify-show"
                  : "issue-section issue-modify-hide"
              }> */}
            {/* <img
                    className="issue-img light-color-bg"
                    src={`${info.pictures}`}
                    alt={info.type}
                  /> */}
            {/* </span> */}
            <span className="issue-center dark-color-text">
              {/* {data1.coordinates} */}
            </span>
          </div>
        </div>
      )}

{/* COMMENTS COMPONENT */}
      <div className="issue-section">
        <div className="issue-title dark-color-bg">Comments</div>
        <div className="issue-section-container">
          <Comments issue_id={data1 && data1._id} />
        </div>
        <div className="issue-detail issue-detail2">
          <input
            className="issue-input issue-input2"
            type="text"
            onChange={(e) => setMessage(e.target.value)}
          />
          <Button handleClick={handleClickComment} name="COMMENT" />
        </div>
      </div>

{/* USER MODIFICATION */}
      {/* <div
        className={
          creator
            ? "issue-section issue-modify-show"
            : "issue-section issue-modify-hide"
        }>
        <div className="issue-title dark-color-bg">Modify Information</div>
        <div className="issue-section-container">
          <input
            className="issue-input"
            type="text"
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            className="issue-input"
            type="text-field"
            placeholder="Description"
            onChange={(e) => setDescription(e.target.value)}
          />
          <div className="issue-detail">
            <input className="issue-input" type="" placeholder="Photo" />
            <Button handleClick={handleClickPhoto} name="UPLOAD" />
          </div>
          <div className="issue-detail issue-center">
            <Button name="CHANGE" handleClick={handleClickModify} />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Button name="DELETE" handleClick={handleClickDelete} />
          </div>
        </div>
      </div> */}

{/* VOTES COMPONENT */}
      <div className="issue-section dark-color-bg issue-votes">
        <Votes
          color={true}
          handleClickDown={handleClickDown}
          handleClickUp={handleClickUp}
        />
      </div>
    </div>
  );
}

export default Issue;