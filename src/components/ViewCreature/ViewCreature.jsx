import React, { Component } from "react";
import { connect } from "react-redux";
import styles from "./ViewCreature.module.scss";

class ViewCreature extends Component {
  render() {
    return (
      <div>
        <h1>
          {Object.keys(this.props.creatures).length > 0 ? (
            <div className={styles.container}>
              <h3>{this.props.creatures[0].name}</h3>
              <p>{this.props.creatures[0].description}</p>
              <p>{this.props.creatures[0].user_id.name}</p>
              <p>{this.props.creatures[0].category_id.category}</p>
              <p>{this.props.creatures[0].creature_status_id.status}</p>
              <p>{this.props.creatures[0].condition_id.condition}</p>
              <p>{this.props.creatures[0].price}</p>
              <p>{this.props.creatures[0].sortDate}</p>
              <p>{this.props.creatures[0].timestamp}</p>
            </div>
          ) : (
            ""
          )}
        </h1>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    creatures: state.singleCreatures
  };
};

ViewCreature = connect(mapStateToProps, null)(ViewCreature);

export default ViewCreature;
