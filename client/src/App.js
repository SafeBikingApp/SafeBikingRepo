import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Header from "./components/Header";
import Map from "./components/Map";
import Issue from "./components/Issue";
import ReportIssue from "./components/ReportIssue";
import UserInterface from "./components/UserInterface";
import UserLogin from "./components/UserLogin";
import Footer from "./components/Footer";
import Votes from "./components/Votes";
import CardIssue from "./components/CardIssue";
import CardReportIssue from "./components/CardReportIssue";
import Comments from "./components/Comments";
import ContextApi from "./contexts/ContextApi";
import UploadImage from "./components/Upload";
import Context from "./contexts/ContextApi";

function App() {
  const [isLogged, setIsLogged] = useState(false);
  const [userInfo, setUserInfo] = useState({});
  const [issueList, setIssueList] = useState([]);
  const [lat, setLat] = useState("");
  const [long, setLong] = useState("");
  const [issueId, setIssueId] = useState("");

  return (
    <div className="App">
      <Router>
        <div>
          {/* <UploadImage /> */}
          <Context.Provider
            value={{
              isLogged: isLogged, setIsLogged: setIsLogged,
              userInfo: userInfo, setUserInfo: setUserInfo,
              issueList: issueList, setIssueList: setIssueList,
              lat: lat, setLat: setLat,
              long: long, setLong: setLong,
            }}>
          <Header />
            <Switch>
              <Route exact path="/" component={Map} />
              <Route exact path="/issue/upload" component={UploadImage} />
              <Route exact path="/issue/:id" component={Issue} />
              <Route exact path="/report_issue" component={ReportIssue} />
              <Route
                exact
                path="/user_interface/:id"
                component={UserInterface}
              />
              <Route exact path="/user_login" component={UserLogin} />
              <Route exact path="/user_interface/:id">{!isLogged ? <Redirect to="/" /> : <UserInterface />}</Route>
            </Switch>
          </Context.Provider>

          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
