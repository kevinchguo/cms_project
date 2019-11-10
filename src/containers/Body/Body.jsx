
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
    this.handleOptionChange = this.handleOptionChange.bind(this);
  }

  componentDidMount() {
    this.props.sortCreatureNewest();
  }

  displayCreatures = () => {
    return this.props.creatures.map(creature => {
      let price = creature.price.toString().split('');
      price.splice(-2, 0, '.');
      return (
        <Creature
          key={creature.id}
          name={creature.name
            .split(' ')
            .map(s => s.charAt(0).toUpperCase() + s.substring(1))
            .join(' ')}
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
          price={`$${price.join('')}`}
          sortDate={creature.sort_by_date}
          timestamp={creature.updated_at}
        />
      );
    });
  };

  handleOptionChange(event) {
    if (event.target.value === 'Newest') {
      this.props.sortCreatureNewest();
      return this.props.creatures;
    } else if (event.target.value === 'Oldest') {
      this.props.sortCreatureOldest();
      return this.props.creatures;
    } else if (event.target.value === 'Price H-L') {
      console.log('this is price h-l');
      this.props.sortCreatureHighest();
      return this.props.creatures;
    } else if (event.target.value === 'Price L-H') {
      this.props.sortCreatureLowest();
      return this.props.creatures;
    } else {
      return this.props.creatures;
    }
  }

  render() {
    return (
      <>
        <div className={styles.sort}>
          Sort by:
          <select className={styles.sorting} onChange={this.handleOptionChange}>
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
