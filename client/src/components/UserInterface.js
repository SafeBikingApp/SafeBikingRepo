import React, {useState, useContext, useEffect} from "react";
import axios from "axios";
import "./CSS/UserInterface.css";
import Title from "./Title";
import Button from "./Button";
import Comments from "./Comments";

function UserInterface() {

    // useEffect(()=>{
    //     axios.get("/api/issues")
    //     .then((res)=>{
    //         console.log(res.data)
    //         setData(res.data)
    //     })
    //     .catch((err)=>{
    //         console.log(err)
    //     })
    // },[])

    const [data, setData] = useState([]);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const handleClickUpdate = (e) => {

    };
    const handleClickLogout = (e) => {

    };
    const handleClickDeleteAccount = (e) => {

    };

    return (
        <div className="userinterface-wrapper">
            <Title title={username} />
            <div className="userinterface-section userinterface-userinfo dark-color-text">
                <div className="userinterface-field-names">
                    Email:
                    <p className="userinterface-space" />
                    Password:
                </div>
                <div className="userinterface-fields">
                    <input className="userinterface-input" value={email} />
                    <input className="userinterface-input" value={password} />
                </div>
            </div>
            <div className="userinterface-button">
                <Button name="UPDATE" handleClick={handleClickUpdate} />
                &nbsp;&nbsp;&nbsp;&nbsp;
                <Button name="LOGOUT" handleClick={handleClickLogout} />
                &nbsp;&nbsp;&nbsp;&nbsp;
                <Button name="DELETE ACCOUNT" handleClick={handleClickDeleteAccount} />
            </div>
            <div className="userinterface-title dark-color-bg">
                 Comments
            </div>
            <div className="userinterface-section">
                <Comments />
            </div>

        </div>
    )
};

export default UserInterface;