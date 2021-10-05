import React, {useState} from "react";
import "./CSS/UserInterface.css";
import Title from "./Title";
import Button from "./Button";
import Comments from "./Comments";

function UserInterface() {

    const [username, setUsername] = useState("Lorianne");
    const [password, setPassword] = useState("123");
    const [email, setEmail] = useState("uip@iosf.com")
    const handleClick = (e) => {

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
                <Button name="UPDATE" handleClick={handleClick} component="" />
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