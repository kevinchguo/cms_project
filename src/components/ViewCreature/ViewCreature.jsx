import React, { Component } from "react";
import { connect } from "react-redux";
import styles from "./ViewCreature.module.scss";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";

class ViewCreature extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.convertPrice = this.convertPrice.bind(this);
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

  render() {
    TimeAgo.addLocale(en);
    const timeAgo = new TimeAgo("en-US");
    return (
      <div>
        <h1>
          {Object.keys(this.props.creatures).length > 0 ? (
            <div className={styles.container}>
              <h3>
                {this.props.creatures[0].name
                  .split(" ")
                  .map(s => s.charAt(0).toUpperCase() + s.substring(1))
                  .join(" ")}
              </h3>
              <p>
                {this.props.creatures[0].description.charAt(0).toUpperCase() +
                  this.props.creatures[0].description.slice(1)}
              </p>
              <p>
                {this.props.creatures[0].user_id.name.charAt(0).toUpperCase() +
                  this.props.creatures[0].user_id.name.slice(1)}
              </p>
              <p>
                {this.props.creatures[0].category_id.category
                  .charAt(0)
                  .toUpperCase() +
                  this.props.creatures[0].category_id.category.slice(1)}
              </p>
              <p>{this.props.creatures[0].creature_status_id.status}</p>
              <p>
                {this.props.creatures[0].condition_id.condition
                  .charAt(0)
                  .toUpperCase() +
                  this.props.creatures[0].condition_id.condition.slice(1)}
              </p>
              <p>{this.convertPrice(this.props.creatures[0].price)}</p>
              <p>{`Posted: ${timeAgo.format(
                new Date(this.props.creatures[0].sort_by_date)
              )}`}</p>
              <div className={styles.buttonContainer}>
                <button onClick={this.handleClickEdit}>Edit</button>
                <button onClick={this.handleClickDelete}>Delete</button>
              </div>
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

ViewCreature = connect(
  mapStateToProps,
  null
)(ViewCreature);

export default ViewCreature;
