import React, { Component } from "react";
import styles from "./Search.module.scss";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <form className={styles.search} autoComplete="off">
        <input type="text" name="name" placeholder="Search..." />
      </form>
    );
  }
}

export default Search;
