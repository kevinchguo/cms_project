import React, { Component } from "react";
import styles from "./New.module.scss";

class New extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      description: "",
      user_id: "",
      category_id: "",
      creature_status_id: "",
      condition_id: "",
      price: 0
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleNameInput = this.handleNameInput.bind(this);
    this.handleDescInput = this.handleDescInput.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
  }

  handleNameInput(e) {
    this.setState({ name: e.target.value });
  }

  handleDescInput(e) {
    this.setState({ description: e.target.value });
  }

  render() {
    return (
      <div className={styles.container}>
        <h1>Add a New Creature</h1>
        <form>
          <input
            type="text"
            name="name"
            placeholder="name"
            autoComplete="off"
            onChange={this.handleNameInput}
          />
          <input
            type="text"
            name="Description"
            placeholder="description"
            autoComplete="off"
            onChange={this.handleDescInput}
          />
          <input
            type="number"
            name="price"
            placeholder="$0.00"
            autoComplete="off"
          />
          <div className={styles.selectContainer}>
            <select className={styles.select}>
              <option value="1">Land</option>
              <option value="2">Water</option>
              <option value="3">Sky</option>
              <option value="4">Mythical</option>
            </select>
            <select className={styles.select}>
              <option value="1">Newborn</option>
              <option value="2">Young</option>
              <option value="3">Adult</option>
              <option value="4">Elder</option>
              <option value="5">Deceased</option>
            </select>
          </div>
          <input
            type="file"
            name="picture"
            accept="image/*"
            className={styles.upload}
          />
          <button
            onClick={this.handleClick}
            disabled={!this.state.name || !this.state.description}
          >
            Post
          </button>
        </form>
      </div>
    );
  }
}

export default New;
