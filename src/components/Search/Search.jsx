import React, { Component } from "react";
import styles from "./Search.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

class Search extends Component {
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
      <form className={styles.search} autoComplete="off">
        <input type="text" name="name" placeholder="Search..." />
        <button>
          <FontAwesomeIcon icon={faSearch} size="2x" />
        </button>
      </form>
    );
  }
}

export default Search;
