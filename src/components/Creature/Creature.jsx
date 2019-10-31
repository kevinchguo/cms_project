import React from "react";
import styles from "./Creature.module.scss";

const Creature = props => {
  return (
    <div className={styles.outerContainer}>
      <h3>{props.name}</h3>
      <p>{props.description}</p>
    </div>
  );
};

export default Creature;
