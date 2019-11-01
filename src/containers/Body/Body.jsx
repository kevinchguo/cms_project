import React, { Component } from "react";
import { connect } from "react-redux";
import Creature from "../../components/Creature";
import { loadCreatureAsync } from "../../actions";

class Body extends Component {
  constructor(props) {
    super(props);
    this.state = { filter: "" };
    this.handleOptionChange = this.handleOptionChange.bind(this);
  }

  componentDidMount() {
    this.props.loadCreatureAsync();
  }

  displayCreatures = () => {
    const sortedCreatures = this.sortCreatures();
    return sortedCreatures.map(creature => {
      return (
        <Creature
          key={creature.name}
          name={creature.name}
          description={creature.description}
        />
      );
    });
  };

  sortCreatures = () => {
    if (this.state.filter === "Newest") {
      console.log("sort newest");
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
        <div className="sort">
          Sort by:
          <select
            className="categories-content"
            onChange={this.handleOptionChange}
          >
            <option value="Newest">Newest</option>
            <option value="Oldest">Oldest</option>
            <option value="Order A-Z">Order A-Z</option>
            <option value="Order Z-A">Order Z-A</option>
            <option value="Price H-L">Price H-L</option>
            <option value="Price L-H">Price L-H</option>
          </select>
        </div>
        <div className="body">{this.displayCreatures()}</div>
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
