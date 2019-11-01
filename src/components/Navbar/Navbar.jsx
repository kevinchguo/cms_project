import React, { Component } from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.scss";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className={styles.outerContainer}>
        <ul className={styles.menuItems}>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/login">
            <li className={styles.login}>Login</li>
          </Link>
          <Link to="/messages">
            <li>Messages</li>
          </Link>
          <Link to="/settings">
            <li>Settings</li>
          </Link>
          <Link to="/new">
            <li>+ New</li>
          </Link>
        </ul>
      </div>
    );
  }
}

export default Navbar;
