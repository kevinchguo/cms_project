import React, { Component } from "react";
import { connect } from "react-redux";
import Creature from "../../components/Creature";
import { loadCreatureAsync, sortCreatureNewest } from "../../actions";
import styles from "./Body.module.scss";

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
    const sorted = this.sortCreatures();
    return sorted.map(creature => {
      return (
        <Creature
          key={creature.id}
          name={creature.name}
          user={creature.user_id.name}
          category={creature.category_id.category}
          status={creature.creature_status_id.status}
          condition={creature.condition_id.condition}
          price={creature.price}
          sortDate={creature.sort_by_date}
          timestamp={creature.updated_at}
        />
      );
    });
  };

  sortCreatures = () => {
    if (this.state.filter === "Newest") {
      this.props.sortCreatureNewest();
      return this.props.creatures;
    } else if (this.state.filter === "Oldest") {
      console.log("this is oldest");
      let oldest = this.props.creatures;
      return oldest;
    } else if (this.state.filter === "Price H-L") {
      console.log("this is price h-l");
      let priceHL = this.props.creatures;
      return priceHL;
    } else if (this.state.filter === "Price L-H") {
      console.log("this is price l-h");
      let priceLH = this.props.creatures;
      return priceLH;
    } else {
      return this.props.creatures;
    }
  };

  handleOptionChange(event) {
    this.setState({ filter: event.target.value });
  }

  render() {
    // console.log(this.props.creatures);
    return (
      <>
        <div className={styles.sort}>
          Sort by:
          <select className={styles.sorting} onChange={this.handleOptionChange}>
            <option value="filter">filter by</option>
            <option value="Newest">Newest</option>
            <option value="Oldest">Oldest</option>
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
    creatures: state.creatures
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadCreatureAsync: () => {
      return dispatch(loadCreatureAsync());
    },
    sortCreatureNewest: () => {
      return dispatch(sortCreatureNewest());
    }
  };
};

Body = connect(
  mapStateToProps,
  mapDispatchToProps
)(Body);

export default Body;
