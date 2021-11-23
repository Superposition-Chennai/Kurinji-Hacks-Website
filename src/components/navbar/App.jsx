import React from "react";
import "./styles.scss";
// import MytypedComponent from "../typing-effect/typing.js"
// import TOGGLE from "../toggle-button/toggle";
import HomePage from "../Main-page/HomePage";
// import logo from "./logoo.png"
import {HashRouter as Router, Switch, Route, Link} from "react-router-dom";


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
                <Link to="/projects">
                  <span className="links">More info </span>{" "}
                </Link>
              </li>
            </ul>
          </nav>

          <Switch basename="/Kurinji-Hacks-Website">
            <Route path="/contact">
              <HomePage />
            </Route>
            <Route path="/links">
              <HomePage />
            </Route>
            <Route path="/projects">
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
  return <h2>contact info</h2>;
}

function Links() {
  return <h2>Home</h2>;
}
