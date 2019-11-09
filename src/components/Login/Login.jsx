import React, { Component } from "react";
import styles from "./Login.module.scss";

// import Auth from "../../auth";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
  }

  render() {
    return (
      <div className={styles.container}>
        <h1>Login</h1>
        <form action="/login" method="POST">
          <input
            type="text"
            name="email"
            placeholder="email"
            autoComplete="off"
          />
          <input type="password" name="password" placeholder="password" />
          <button>Login</button>
        </form>
      </div>
    );
  }
}

export default Login;
