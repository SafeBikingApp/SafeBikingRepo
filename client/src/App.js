import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
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
// import ContextApi from "./contexts/ContextApi";

function App() {
  return (
    <div className="App">
      {/* <ContextApi value={{ test: "test" }}> */}
      <Router>
        <div>
          <Header />
          <Switch>
            <Route exact path="/" component={Map} />
            <Route exact path="/issue" component={Issue} />
            <Route exact path="/report_issue" component={ReportIssue} />
            <Route exact path="/user_interface" component={UserInterface} />
            <Route exact path="/user_login" component={UserLogin} />
          </Switch>
          <Footer />
        </div>
      </Router>
      {/* </ContextApi> */}
    </div>
  );
}

export default App;
