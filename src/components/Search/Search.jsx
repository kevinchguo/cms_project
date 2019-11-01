import React, { Component } from "react";
import styles from "./Search.module.scss";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <form className={styles.search}>
          <input type="text" name="name" />
          {/* <button>Search</button> */}
        </form>
      </div>
    );
  }
}

export default Search;
