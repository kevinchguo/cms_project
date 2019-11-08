import React from "react";
import styles from "./Creature.module.scss";

const Creature = props => {
  return (
    <div className={styles.outerContainer}>
      <h3>{props.name}</h3>
      <p>{props.description}</p>
      <p>{props.user}</p>
      <p>{props.category}</p>
      <p>{props.status}</p>
      <p>{props.condition}</p>
      <p>{props.price}</p>
      <p>{props.sortDate}</p>
      <p>{props.timestamp}</p>
    </div>
  );
};

export default Creature;
