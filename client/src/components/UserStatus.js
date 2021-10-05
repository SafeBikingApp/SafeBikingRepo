import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./CSS/UserStatus.css";

function UserStatus(props) {
  const [loggedin, setLoggedin] = useState(false);
  const [data, setData] = useState();
  const [userId, setUserId] = useState("615b0bafd872454b7a503289");

  // useEffect(()=>{
  //     data.message ? setLoggedin(false) : setLoggedin(true)
  // },[data]);

  useEffect(() => {
    axios
      .get("/api/auth/verify")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="userstatus-wrapper">
      <Link to={loggedin ? `/user_interface/${userId}` : "/user_login"}>
        <img
          className={
            loggedin
              ? "user-button user-logged-in"
              : "user-button user-logged-out"
          }
          src="./img/person-circle.svg"
          alt="User"
        />
      </Link>
    </div>
  );
}

export default UserStatus;

/* CONTEXT map sends user_id props */
