import React, { Component } from "react";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";
import Search from "../Search";

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
        <div className={styles.search}>
          <Search />
        </div>
        <div className={styles.login}>
          <Link to="/login">Login</Link>
        </div>
      </div>
    );
  }
}

export default Header;
