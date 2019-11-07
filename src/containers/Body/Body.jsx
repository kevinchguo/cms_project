import React, { Component } from "react";
import { connect } from "react-redux";
import Creature from "../../components/Creature";
import { loadCreatureAsync } from "../../actions";
import styles from "./Body.module.scss";

class Body extends Component {
  constructor(props) {
    super(props);
    this.state = { filter: "" };
    this.handleOptionChange = this.handleOptionChange.bind(this);
    this.displayCreatures = this.displayCreatures.bind(this);
    this.sortCreatures = this.sortCreatures.bind(this);
  }

  componentDidMount() {
    this.props.loadCreatureAsync();
  }

  displayCreatures = () => {
    return this.props.creatures.creatures.map(creature => {
      return (
        <Creature
          key={creature.id}
          name={creature.name}
          description={creature.description}
        />
      );
    });
  };

  sortCreatures = () => {
    if (this.state.filter === "Newest") {
      return this.props.creatures;
    } else {
      return this.props.creatures;
    }
  };

  handleOptionChange(event) {
    this.setState({ filter: event.target.value });
  }

  render() {
    return (
      <>
        <div className={styles.sort}>
          Sort by:
          <select className={styles.sorting} onChange={this.handleOptionChange}>
            <option value="Newest">Newest</option>
            <option value="Oldest">Oldest</option>
            <option value="Order A-Z">Order A-Z</option>
            <option value="Order Z-A">Order Z-A</option>
            <option value="Price H-L">Price H-L</option>
            <option value="Price L-H">Price L-H</option>
          </select>
        </div>

        {Object.keys(this.props.creatures).length > 0 && (
          <div className={styles.cards}>{this.displayCreatures()}</div>
        )}
      </>
    );
  }
}

const mapStateToProps = state => {
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
