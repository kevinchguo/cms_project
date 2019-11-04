import React, { Component } from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faEnvelope,
  faCog,
  faPlusSquare
} from "@fortawesome/free-solid-svg-icons";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className={styles.outerContainer}>
        <ul className={styles.menuItems}>
          <Link to="/">
            <li>Home</li>
            <FontAwesomeIcon icon={faHome} size="lg" className={styles.home} />
          </Link>
          <Link to="/messages">
            <li>Messages</li>
            <FontAwesomeIcon
              icon={faEnvelope}
              size="lg"
              className={styles.messages}
            />
          </Link>
          <Link to="/settings">
            <li>Settings</li>
            <FontAwesomeIcon icon={faCog} size="lg" className={styles.cog} />
          </Link>
          <Link to="/new">
            <li>+ New</li>
            <FontAwesomeIcon
              icon={faPlusSquare}
              size="lg"
              className={styles.plus}
            />
          </Link>
        </ul>
      </div>
    );
  }
}

export default Navbar;
