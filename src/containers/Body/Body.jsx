import React, { Component } from 'react';
import { connect } from 'react-redux';
import Creature from '../../components/Creature';
import {
  loadCreatureAsync,
  sortCreatureNewest,
  sortCreatureHighest,
  sortCreatureOldest,
  sortCreatureLowest,
  filterCreatureLand,
  filterCreatureWater,
  filterCreatureSky,
  filterCreatureMythical,
  filterCreatureNewborn,
  filterCreatureYoung,
  filterCreatureAdult,
  filterCreatureElder,
  filterCreatureDeceased
} from '../../actions';
import styles from './Body.module.scss';

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
      const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
      ];
      let datePost = new Date(creature.sort_by_date);
      return (
        <Creature
          id={creature.id}
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
          sortDate={`${months[datePost.getMonth()]} ${datePost.getDay()}`}
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
      this.props.sortCreatureHighest();
      return this.props.creatures;
    } else if (event.target.value === 'Price L-H') {
      this.props.sortCreatureLowest();
      return this.props.creatures;
    } else if (event.target.value === 'Land') {
      this.props.filterCreatureLand();
      return this.props.creatures;
    } else if (event.target.value === 'Water') {
      this.props.filterCreatureWater();
      return this.props.creatures;
    } else if (event.target.value === 'Sky') {
      this.props.filterCreatureSky();
      return this.props.creatures;
    } else if (event.target.value === 'Mythical') {
      this.props.filterCreatureMythical();
      return this.props.creatures;
    } else if (event.target.value === 'Newborn') {
      this.props.filterCreatureNewborn();
      return this.props.creatures;
    } else if (event.target.value === 'Young') {
      this.props.filterCreatureYoung();
      return this.props.creatures;
    } else if (event.target.value === 'Adult') {
      this.props.filterCreatureAdult();
      return this.props.creatures;
    } else if (event.target.value === 'Elder') {
      this.props.filterCreatureElder();
      return this.props.creatures;
    } else if (event.target.value === 'Deceased') {
      this.props.filterCreatureDeceased();
      return this.props.creatures;
    } else if (event.target.value === 'Default') {
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
            <option value="Default">Filter By</option>
            <option value="Land">Land</option>
            <option value="Water">Water</option>
            <option value="Sky">Sky</option>
            <option value="Mythical">Mythical</option>
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
    },
    filterCreatureLand: () => {
      return dispatch(filterCreatureLand());
    },
    filterCreatureWater: () => {
      return dispatch(filterCreatureWater());
    },
    filterCreatureSky: () => {
      return dispatch(filterCreatureSky());
    },
    filterCreatureMythical: () => {
      return dispatch(filterCreatureMythical());
    },
    filterCreatureNewborn: () => {
      return dispatch(filterCreatureNewborn());
    },
    filterCreatureYoung: () => {
      return dispatch(filterCreatureYoung());
    },
    filterCreatureAdult: () => {
      return dispatch(filterCreatureAdult());
    },
    filterCreatureElder: () => {
      return dispatch(filterCreatureElder());
    },
    filterCreatureDeceased: () => {
      return dispatch(filterCreatureDeceased());
    }
  };
};

Body = connect(mapStateToProps, mapDispatchToProps)(Body);

export default Body;
