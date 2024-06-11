import React from "react";
import styles from "./css/nearlocation.module.css";

export default function NearLocation() {
  return (
    <div className={styles.main_container}>
      <ul>
        <li>5 min drive to Medanta Hospital</li>
        <li>7 min drive to cyber city</li>
        <li>walking distance to fortis hospital</li>
        <li>walking distance to fortis max hospital</li>
        <li>walking distance to metro station</li>
      </ul>
    </div>
  );
}
