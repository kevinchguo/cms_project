import React, { Component } from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Messages from "../components/Messages/Messages";
import Body from "../containers/Body";
import Login from "../components/Login";
import New from "../components/New";
import Settings from "../components/Settings";
import styles from "./App.module.scss";

import { userLoginAsync } from "../actions/index";
import { connect } from "react-redux";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: false
    };
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin(e) {
    e.preventDefault();

    this.props.userLoginAsync();
  }

  render() {
    return (
      <Router>
        <div className={styles.appContainer}>
          <div className={styles.HeaderContainer}>
            <Header />
            {/* <button onClick={this.handleLogin}>Click Me</button> */}
          </div>
          <div className={styles.BodyContainer}>
            <div className={styles.Navbar}>
              <Navbar />
            </div>
            <div className={styles.Content}>
              <Switch>
                <Route exact path="/" component={Body} />
                <Route path="/messages" component={Messages} />
                <Route path="/login" component={Login} />
                <Route path="/settings" component={Settings} />
                <Route path="/New" component={New} />
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    userLoginAsync: () => {
      return dispatch(userLoginAsync());
    }
  };
};

App = connect(
  null,
  mapDispatchToProps
)(App);

export default App;
