import React, { Component } from "react";
import { connect } from "react-redux";
import styles from "./Creature.module.scss";
import { viewCreature, Clear } from "../../actions";
import { Link } from "react-router-dom";

class Creature extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.Clear();
    this.props.viewCreature(this.props.id);
  }

  render() {
    return (
      <Link to="/view" className={styles.link} id={this.props.id}>
        <div className={styles.outerContainer} onClick={this.handleClick}>
          <h3>{this.props.name}</h3>
          <p>{this.props.user}</p>
          <p>{this.props.category}</p>
          <p>{this.props.status}</p>
          <p>{this.props.condition}</p>
          <p>{this.props.price}</p>
          <p>{this.props.sortDate}</p>
          <p>{this.props.timestamp}</p>
        </div>
      </Link>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    viewCreature: data => {
      return dispatch(viewCreature(data));
    },
    Clear: () => {
      return dispatch(Clear());
    }
  };
};

Creature = connect(
  null,
  mapDispatchToProps
)(Creature);

export default Creature;
