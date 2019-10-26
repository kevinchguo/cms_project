import React, { Component } from "react";
import styles from "./Header.scss";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <h1 className="header">This is our header</h1>
        <div className={styles.login}>Login/Logout button</div>
      </>
    );
  }
}

export default Header;
