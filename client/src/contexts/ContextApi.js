import { createContext, useState } from "react";

const Context = createContext(null);

// const ContextApi = () => {
//   const [isLogged, setIsLogged] = useState(false);
//   const [userInfo, setUserInfo] = useState({
//     id: "",
//   });
//   const [issueList, setIssueList] = useState([]);

//   return (
//     <Context.Provider
//       value={{
//         isLogged: isLogged,
//         setIsLogged: setIsLogged,
//         userInfo: userInfo,
//         setUserInfo: setUserInfo,
//         issueList: issueList,
//         setIssueList: setIssueList,
//       }}></Context.Provider>
//   );
// };

export default Context;
