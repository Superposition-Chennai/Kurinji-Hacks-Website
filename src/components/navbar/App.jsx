import React from "react";
import "./styles.scss";
// import MytypedComponent from "../typing-effect/typing.js"
// import TOGGLE from "../toggle-button/toggle";
import HomePage from "../Main-page/HomePage";
import { Myinfo } from "../Top-division-components/Top-division-components";
// import logo from "./logoo.png"
import {HashRouter as Router, Switch, Route, Link} from "react-router-dom";

import Discord from "../Routes/Discord";
import Twitter from "../Routes/Twitter";
import Linkedin from "../Routes/LinkedIn";
import Instagram from "../Routes/Instagram";
import Devpost from "../Routes/Devpost";

export default class NAVBAR extends React.Component {
  state = {
    color: "#ff8ab3"
  };
  listenScrollEvent = e => {
    if (window.scrollY > 800) {
      this.setState({color: "#DBD2EA"});
    } else {
      this.setState({color: "#ff8ab3"});
    }
  };

  componentDidMount() {
    window.addEventListener("scroll", this.listenScrollEvent);
  }

  render() {
    return (
      <Router>
        <div>
          <nav className="nav_bar" style={{backgroundColor: this.state.color}}>
            <ul>
              <li>
                <Link to="/">
                  <span className="links">Home </span>{" "}
                </Link>
              </li>
              <li>
                <Link to="/schedule">
                  <span className="links">Schedule </span>{" "}
                </Link>
              </li>
              <li>
                <Link to="/speakers">
                  <span className="links">Speakers </span>{" "}
                </Link>
              </li>
              <li>
                <Link to="/contact">
                  <span className="links">Contact Us </span>{" "}
                </Link>
              </li>
            </ul>
          </nav>

          <Switch basename="/Kurinji-Hacks-Website">
            <Route path="/discord" exact component={Discord} />
            <Route path="/linkedin" exact component={Linkedin} />
            <Route path="/devpost" exact component={Devpost} />
            <Route path="/twitter" exact component={Twitter} />
            <Route path="/instagram" exact component={Instagram} />
            <Route path="/contact">
              <HomePage />
            </Route>
            <Route path="/speakers">
              <HomePage />
            </Route>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route path="/schedule">
              <HomePage />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

function Projects() {
  return <h2>Projects here</h2>;
}

function Contact() {
  return <h2>Contact info</h2>;
}

function Links() {
  return <h2>Home</h2>;
}
