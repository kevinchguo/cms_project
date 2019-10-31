import React, { Component } from "react";
import styles from "./Header.module.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// import Navbar from "../Navbar";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={styles.headerContainer}>
        <div className={styles.logo}>
          <div>anml</div>
        </div>
        <div className={styles.login}>
          <Link to="/login">
            <div className={styles.button}>Login</div>
          </Link>
        </div>
      </div>
    );
  }
}

export default Header;
