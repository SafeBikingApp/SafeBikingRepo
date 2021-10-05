import './App.css';
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Context from './components/contexts/Context';
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

function App() {
  return (
    <div className="App">
      <Router>
            <div>
              <Header />
                <Switch>
                    <Route exact path="/" component={Map}/>
<<<<<<< HEAD
                    <Route exact path="/issue/:id" component={Issue} />
=======
                    <Route exact path="/issue/" component={Issue} />
>>>>>>> dd40dfcea554dd2e00d631b3269ac168bb64508a
                    <Route exact path="/report_issue" component={ReportIssue} />
                    <Route exact path="/user_interface/:id" component={UserInterface} />
                    <Route exact path="/user_login" component={UserLogin} />
                </Switch>
              <Footer />
            </div>
      </Router>
    </div>
  );
}

export default App;
