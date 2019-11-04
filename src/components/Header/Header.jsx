import React, { Component } from "react";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";
import Search from "../Search";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: true
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ isLoggedIn: !this.state.isLoggedIn });
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
          {this.state.isLoggedIn ? (
            <Link to="/login" onClick={this.handleClick}>
              Logout
            </Link>
          ) : (
            <Link to="/login" onClick={this.handleClick}>
              login
            </Link>
          )}
        </div>
      </div>
    );
  }
}

export default Header;
