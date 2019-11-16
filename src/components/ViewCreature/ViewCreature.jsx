import React, { Component } from "react";
import { connect } from "react-redux";
import styles from "./ViewCreature.module.scss";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";

class ViewCreature extends Component {
  constructor(props) {
    super(props);
    this.state = { price: 0 };
    this.convertPrice = this.convertPrice.bind(this);
  }

  convertPrice = data => {
    let price = data.toString().split("");

    price.splice(price.length - 2, 0, ".");

    price.unshift("$");

    return price.join("");
  };

  render() {
    TimeAgo.addLocale(en);
    const timeAgo = new TimeAgo("en-US");
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
              <p>
                {this.props.creatures[0].price
                  ? this.convertPrice(this.props.creatures[0].price)
                  : 0}
              </p>
              <p>{`Posted: ${timeAgo.format(
                new Date(this.props.creatures[0].sort_by_date)
              )}`}</p>
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
