import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Messages from "../components/Messages/Messages";
import Body from "../containers/Body";
import Login from "../components/Login";
import New from "../components/New";
import Settings from "../components/Settings";
import styles from "./App.module.scss";
import "./App.css";

function App() {
  return (
    <Router>
      <div className={styles.appContainer}>
        <div className={styles.HeaderContainer}>
          <Header />
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

export default App;
