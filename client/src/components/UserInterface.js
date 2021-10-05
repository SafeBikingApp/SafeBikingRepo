import React, {useState, useContext, useEffect} from "react";
import axios from "axios";
import "./CSS/UserInterface.css";
import Title from "./Title";
import Button from "./Button";
import Comments from "./Comments";

function UserInterface(props) {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    const [data, setData] = useState([])

    useEffect(()=>{
        axios
        .put(`/api/auth/verify`)
        .then((res) => {
            console.log(res)
            setUsername(res.username)
        })
        .catch((err) => {
          console.log(err)
        });
    },[]);

    const handleClickUpdate = (e) => {
        axios({
            method: "put",
            url: `/api/users/${props.user_id}/edit`,
            data: {_id: props.user_id, email: email, password: password},
            headers: {
              "Access-Control-Allow-Origin": "*",
              "Content-type": "application/json",
            },
          })
        .then((res)=>{
            console.log(res)
        })
        .catch((err)=>{
            console.log(err)
        })
    };
    const handleClickLogout = (e) => {
        axios.post('/api/auth/log-out')
        .then((res)=>{
            redirectMap()
            console.log(res)
        })
        .catch((err)=>{
            console.log(err)
        })
    };
    const handleClickDeleteAccount = (e) => {
        axios.delete(`/api/users/${props.user_id}/delete`)
        .then((res)=>{
            console.log(res)
        })
        .catch((err)=>{
            console.log(err)
        })
    };

    const redirectMap = ()=>{

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

/* userstatus sends user_id as props */