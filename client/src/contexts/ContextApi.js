import { createContext, useState } from "react";

export const Context = createContext(null);

function ContextApi({ children }) {
  const [isLogged, setIsLogged] = useState(false);
  const [userInfo, setUserInfo] = useState({
    id: "",
  });
  const [issueList, setIssueList] = useState([]);

  return (
    <Context.Provider
      value={{
        isLogged: isLogged,
        setIsLogged: setIsLogged,
        userInfo: userInfo,
        setUserInfo: setUserInfo,
        issueList: issueList,
        setIssueList: setIssueList,
      }}>
      {children}
    </Context.Provider>
  );
}

export default ContextApi;
