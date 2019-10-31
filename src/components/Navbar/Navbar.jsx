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
    );
  }
}

export default Navbar;
