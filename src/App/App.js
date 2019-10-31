import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Messages from "../components/Messages/Messages";
import Body from "../containers/Body";
import Login from "../components/Login";
import styles from "./App.module.scss";
import "./App.css";

function App() {
  return (
    <Router>
      <div className={styles.HeaderContainer}>
        <Header />
      </div>
      <div className={styles.BodyContainer}>
        <div className={styles.Navbar}>
          <Navbar />
        </div>
        <div className={styles.Content}>
          <Switch>
            <Route path="/messages" component={Messages} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/" component={Body} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
