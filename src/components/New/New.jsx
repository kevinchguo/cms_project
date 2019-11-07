import React, { Component } from "react";
import styles from "./New.module.scss";

class New extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <h1 className={styles.new}>New Tab</h1>
      </div>
    );
  }
}

export default New;
