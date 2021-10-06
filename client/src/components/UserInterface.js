import React, {useState, useContext} from "react";
import { useHistory } from "react-router-dom";
import Context from "../contexts/ContextApi";
import axios from "axios";
import "./CSS/UserInterface.css";
import Title from "./Title";
import Button from "./Button";
import Comments from "./Comments";

function UserInterface() {

    const { isLogged, setIsLogged, setUserInfo, userInfo } = useContext(Context);
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    let history = useHistory();

    const handleClickUpdate = (e) => {
        axios({
            method: "put",
            url: `/api/users/${userInfo._id}/edit`,
            data: {_id: userInfo._id, email: email, password: password},
            headers: {
              "Access-Control-Allow-Origin": "*",
              "Content-type": "application/json",
            },
          })
        .then((res)=>{
            console.log(res)
            setMessage("User update successful");
        })
        .catch((err)=>{
            console.log(err)
        })
    };
    const handleClickLogout = (e) => {
        axios.post('/api/auth/log-out')
        .then((res)=>{
            setIsLogged(false);
            setMessage("Logout successful");
            setTimeout(() => history.push("/"), 2000);
            console.log(res)
        })
        .catch((err)=>{
            console.log(err)
        })
    };
    const handleClickDeleteAccount = (e) => {
        axios.delete(`/api/users/${userInfo._id}/delete`)
        .then((res)=>{
            console.log(res)
            setIsLogged(false)
            setMessage("Account deletion successful");
            setTimeout(() => history.push("/"), 2000);
        })
        .catch((err)=>{
            console.log(err)
        })
    };

    return (
        <div className="userinterface-wrapper">
            <Title title={userInfo.username} />
            <div className="userinterface-section userinterface-userinfo dark-color-text">
                <div className="userinterface-field-names">
                    Email:
                    <p className="userinterface-space" />
                    Password:
                </div>
                <div className="userinterface-fields">
                    <input className="userinterface-input" onChange={(e)=>setEmail(e.target.value)} />
                    <input className="userinterface-input" onChange={(e)=>setPassword(e.target.value)} />
                </div>
            </div>
            <div className="userinterface-button">
                <Button name="UPDATE" handleClick={handleClickUpdate} />
                &nbsp;&nbsp;&nbsp;&nbsp;
                <Button name="LOGOUT" handleClick={handleClickLogout} />
                &nbsp;&nbsp;&nbsp;&nbsp;
                <Button name="DELETE ACCOUNT" handleClick={handleClickDeleteAccount} />
            </div>
            <div className="dark-color-text">{message}</div>
{/* COMMENTS */}
            <div className="userinterface-title dark-color-bg userinterface-noshow">
                 Comments
            </div>
            <div className="userinterface-section">
                {/* <Comments /> */}
            </div>

        </div>
    )
};

export default UserInterface;