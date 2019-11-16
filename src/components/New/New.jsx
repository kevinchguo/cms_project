import React, { Component } from "react";
import { AddCreature, UploadImage, AddImage } from "../../actions";
import { connect } from "react-redux";
import styles from "./New.module.scss";
import { obj, img } from '../../reducers/index';

class New extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      description: "",
      user_id: 1,
      category_id: 1,
      creature_status_id: 1,
      condition_id: 1,
      price: 0,
      sort_by_date: "2019-08-24T12:03:39Z",
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleNameInput = this.handleNameInput.bind(this);
    this.handleDescInput = this.handleDescInput.bind(this);
    this.handlePriceInput = this.handlePriceInput.bind(this);
    this.handleCategoryInput = this.handleCategoryInput.bind(this);
    this.handleConditionInput = this.handleConditionInput.bind(this);
    this.handleUpload = this.handleUpload.bind(this)
  }

  handleClick(e) {
    e.preventDefault();
    this.props.AddCreature(this.state)
    .then(() => {
      if(img !== undefined) {
        console.log('IMAGE', img);
        let imgData = {
          creature_id: obj.id,
          url: img.data.location
        }
        this.props.AddImage(imgData);
      }
    })
  }

  handleNameInput(e) {
    this.setState({ name: e.target.value });
  }

  handleDescInput(e) {
    this.setState({ description: e.target.value });
  }

  handlePriceInput(e) {
    this.setState({ price: parseInt(e.target.value) });
  }

  handleCategoryInput(e) {
    this.setState({ category_id: parseInt(e.target.value) });
  }

  handleConditionInput(e) {
    this.setState({ condition_id: parseInt(e.target.value) });
  }

  handleUpload(e) {
    const formData = new FormData();
    formData.append('creatureImage', e.target.files[0]);
    this.props.UploadImage(formData);
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
            onChange={this.handlePriceInput}
          />
          <div className={styles.selectContainer}>
            <select
              className={styles.select}
              onChange={this.handleCategoryInput}
            >
              <option value="1">Land</option>
              <option value="2">Water</option>
              <option value="3">Sky</option>
              <option value="4">Mythical</option>
            </select>
            <select
              className={styles.select}
              onChange={this.handleConditionInput}
            >
              <option value="1">Newborn</option>
              <option value="2">Young</option>
              <option value="3">Adult</option>
              <option value="4">Elder</option>
              <option value="5">Deceased</option>
            </select>
          </div>
          <input
            type="file"
            name="creatureImage"
            accept="image/*"
            className={styles.upload}
            onChange={this.handleUpload}
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

const mapDispatchToProps = dispatch => {
  return {
    AddCreature: data => {
      return dispatch(AddCreature(data));
    },
    UploadImage: data => {
      return dispatch(UploadImage(data));
    },
    AddImage: data => {
      return dispatch(AddImage(data));
    }
  };
};

New = connect(null, mapDispatchToProps)(New);

export default New;
