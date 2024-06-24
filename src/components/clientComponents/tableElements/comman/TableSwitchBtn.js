"use client";
import React, { useState } from "react";
import styles from "./css/tableswitchbtn.module.css";

export default function TableSwitchBtn() {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn(!isOn);
  };

  return (
    <div className={styles.wrapper}>
      <div
        className={`${styles.switch} ${isOn ? styles.switchOn : ""}`}
        onClick={toggleSwitch}
      >
        <div className={`${styles.circle} ${isOn ? styles.circleOn : ""}`} />
      </div>
    </div>
  );
}
