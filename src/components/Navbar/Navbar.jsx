import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Messages from "../Messages/Messages";
import Body from "../../containers/Body";
import styles from "./Navbar.module.scss";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Router>
        <div className={styles.outerContainer}>
          <div className={styles.menu}>
            <ul lassName={styles.menuItems}>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/messages">Messages</Link>
              </li>
              <li>
                <Link to="/settings">Settings</Link>
              </li>
              <li>
                <Link to="/new">+ New</Link>
              </li>
            </ul>
          </div>

          <div className={styles.content}>
            <Switch>
              <Route path="/messages" component={Messages} />
              <Route path="/" component={Body} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default Navbar;
