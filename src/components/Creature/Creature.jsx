import React from "react";
import styles from "./Creature.module.scss";

const Creature = props => {
  return (
    <div className={styles.outerContainer}>
      {props.name}
      {props.description}
    </div>
  );
};

export default Creature;
