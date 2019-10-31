import React, { Component } from "react";
import styles from "./Login.module.scss";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={styles.loginComponent}>
        <h1>Login Page</h1>
        <br />
        <br />
        <br />
      </div>
    );
  }
}

export default Login;
