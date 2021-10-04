import './App.css';
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Map from "./components/Map";
import Issue from "./components/Issue";
import ReportIssue from "./components/ReportIssue";
import UserInterface from "./components/UserInterface";
import UserLogin from "./components/UserLogin";
import UserRegister from "./components/UserRegister";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Router>
            <div>
              <Header />
                <Switch>
                    <Route exact path="/issue" component={Map}/>
                    <Route exact path="/" component={Issue} />
                    <Route exact path="/report_issue" component={ReportIssue} />
                    <Route exact path="/user_interface" component={UserInterface} />
                    <Route exact path="/user_login" component={UserLogin} />
                    <Route exact path="/user_register" component={UserRegister} />
                </Switch>
              <Footer />
            </div>
      </Router>
    </div>
  );
}

export default App;
