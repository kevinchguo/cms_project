import React, { Component } from "react";
import { connect } from "react-redux";
import Creature from "../../components/Creature";
import { loadCreatureAsync } from "../../actions";

class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.loadCreatureAsync();
  }

  render() {
    return (
      <>
        {this.props.creatures.map(creature => {
          return (
            <Creature
              key={creature.name}
              name={creature.name}
              description={creature.description}
            />
          );
        })}
      </>
    );
  }
}

const mapStateToProps = state => {
  console.log("state", state);
  return {
    creatures: state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadCreatureAsync: () => {
      return dispatch(loadCreatureAsync());
    }
  };
};

Body = connect(
  mapStateToProps,
  mapDispatchToProps
)(Body);

export default Body;
