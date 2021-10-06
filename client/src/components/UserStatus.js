import React, { useContext, useState } from "react";
import Context from "../contexts/ContextApi";
import { Link } from "react-router-dom";
import "./CSS/UserStatus.css";

function UserStatus() {

  const [userId, setUserId] = useState(userInfo && userInfo._id);
  const { isLogged, setIsLogged, setUserInfo, userInfo } = useContext(Context);

  return (
    <div className="userstatus-wrapper">
      <Link to={isLogged ? `/user_interface/${userId}` : "/user_login"}>
        <img
          className={
            isLogged
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
