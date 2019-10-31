import React, { Component } from "react";
import styles from "./Header.module.scss";

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
          <button className={styles.button}>Login</button>
        </div>
      </div>
    );
  }
}

export default Header;
