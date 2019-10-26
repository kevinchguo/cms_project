import React, { Component } from "react";
import styles from "./Navbar.scss";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <h1>Nav</h1>
        <div className="options">
          <ul>
            <li>Home</li>
            <li>Massages</li>
            <li>Settings</li>
            <li>New</li>
          </ul>
        </div>
      </>
    );
  }
}

export default Navbar;
