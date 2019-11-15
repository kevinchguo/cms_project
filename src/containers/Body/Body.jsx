import React, { Component } from "react";
import { connect } from "react-redux";
import Creature from "../../components/Creature";
import {
  loadCreatureAsync,
  sortCreatureNewest,
  sortCreatureHighest,
  sortCreatureOldest,
  sortCreatureLowest
} from "../../actions";
import styles from "./Body.module.scss";

class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleOptionChange = this.handleOptionChange.bind(this);
  }

  componentDidMount() {
    this.props.sortCreatureNewest();
  }

  convertPrice = data => {
    let price = data.toString().split("");
    if (data < 10) {
      price.unshift("0.0");
    } else if (data < 100) {
      price.unshift("0.");
    } else {
      price.splice(-2, 0, ".");
    }
    price.unshift("$");
    return price.join("");
  };


  mapCreatures = data => {
    return data.map(creature => {
      let price = this.convertPrice(creature.price);
      const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ];
      let datePost = new Date(creature.sort_by_date);
      return (
        <Creature
          id={creature.id}
          key={creature.id}
          name={creature.name
            .split(" ")
            .map(s => s.charAt(0).toUpperCase() + s.substring(1))
            .join(" ")}
          user={
            creature.user_id.name.charAt(0).toUpperCase() +
            creature.user_id.name.slice(1)
          }
          category={
            creature.category_id.category.charAt(0).toUpperCase() +
            creature.category_id.category.slice(1)
          }
          status={
            creature.creature_status_id.status.charAt(0).toUpperCase() +
            creature.creature_status_id.status.slice(1)
          }
          condition={
            creature.condition_id.condition.charAt(0).toUpperCase() +
            creature.condition_id.condition.slice(1)
          }
          price={price}
          sortDate={`${months[datePost.getMonth()]} ${datePost.getDay()}`}
        />
      );
    });
  };

  displayCreatures = () => {
    if (!this.state.type && !this.state.age) {
      return this.mapCreatures(this.props.creatures);
    } else if (this.state.type && !this.state.age) {
      let filterType = this.props.creatures.filter(data => {
        return data.category_id.id === this.state.type;
      });
      return this.mapCreatures(filterType);
    } else if (this.state.age && !this.state.type) {
      let filterAge = this.props.creatures.filter(data => {
        return data.condition_id.id === this.state.age;
      });
      return this.mapCreatures(filterAge);
    } else if (this.state.age && this.state.type) {
      let filterBoth = this.props.creatures.filter(data => {
        return (
          data.category_id.id === this.state.type &&
          data.condition_id.id === this.state.age
        );
      });
      return this.mapCreatures(filterBoth);
    }
  };

  handleOptionChange(event) {
    if (event.target.value === "Newest") {
      this.props.sortCreatureNewest();
      return this.props.creatures;
    } else if (event.target.value === "Oldest") {
      this.props.sortCreatureOldest();
      return this.props.creatures;
    } else if (event.target.value === "Price H-L") {
      this.props.sortCreatureHighest();
      return this.props.creatures;
    } else if (event.target.value === "Price L-H") {
      this.props.sortCreatureLowest();
      return this.props.creatures;
    } else if (event.target.value === "Land") {
      return this.setState({ type: 1 });
    } else if (event.target.value === "Water") {
      return this.setState({ type: 2 });
    } else if (event.target.value === "Sky") {
      return this.setState({ type: 3 });
    } else if (event.target.value === "Mythical") {
      return this.setState({ type: 4 });
    } else if (event.target.value === "Newborn") {
      return this.setState({ age: 1 });
    } else if (event.target.value === "Young") {
      return this.setState({ age: 2 });
    } else if (event.target.value === "Adult") {
      return this.setState({ age: 3 });
    } else if (event.target.value === "Elder") {
      return this.setState({ age: 4 });
    } else if (event.target.value === "Deceased") {
      return this.setState({ age: 5 });
    } else if (event.target.value === "Default") {
      this.props.loadCreatureAsync();
      return this.props.creatures;
    } else {
      return this.props.creatures;
    }
  }

  render() {
    return (
      <>
        <div className={styles.sort}>
          <select className={styles.select} onChange={this.handleOptionChange}>
            <option value="Default">Sort By</option>
            <option value="Newest">Newest</option>
            <option value="Oldest">Oldest</option>
            <option value="Price H-L">Price H-L</option>
            <option value="Price L-H">Price L-H</option>
          </select>
          <select className={styles.select} onChange={this.handleOptionChange}>
            <option value="DefaultType">Filter By Type</option>
            <option value="Land">Land</option>
            <option value="Water">Water</option>
            <option value="Sky">Sky</option>
            <option value="Mythical">Mythical</option>
          </select>
          <select className={styles.select} onChange={this.handleOptionChange}>
            <option value="DefaultAge">Filter By Age</option>
            <option value="Newborn">Newborn</option>
            <option value="Young">Young</option>
            <option value="Adult">Adult</option>
            <option value="Elder">Elder</option>
            <option value="Deceased">Deceased</option>
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
    },
    sortCreatureOldest: () => {
      return dispatch(sortCreatureOldest());
    },
    sortCreatureHighest: () => {
      return dispatch(sortCreatureHighest());
    },
    sortCreatureLowest: () => {
      return dispatch(sortCreatureLowest());
    }
  };
};

Body = connect(
  mapStateToProps,
  mapDispatchToProps
)(Body);

export default Body;
