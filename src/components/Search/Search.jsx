import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './Search.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { searchCreatureFunction } from '../../actions';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = { data: '' };
    this.handleClick = this.handleClick.bind(this);
    this.searchKeyword = this.searchKeyword.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.searchCreatureFunction(this.state);
  }

  searchKeyword(e) {
    this.setState({ data: e.target.value });
  }

  render() {
    return (
      <>
        <form
          className={styles.search}
          autoComplete="off"
          onSubmit={this.handleClick}
        >
          <input
            onChange={this.searchKeyword}
            type="text"
            name="name"
            placeholder="Search..."
          />
          <button onClick={this.handleClick}>
            <FontAwesomeIcon icon={faSearch} size="2x" />
          </button>
        </form>
      </>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    searchCreatureFunction: data => {
      return dispatch(searchCreatureFunction(data));
    }
  };
};

Search = connect(
  null,
  mapDispatchToProps
)(Search);

export default Search;
