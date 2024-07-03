"use client";
import React, { useState } from "react";
import styles from "./css/tableswitchbtn.module.css";

export default function TableSwitchBtn(props) {
  const { actionhandler, itemId, data } = props;
  const [isOn, setIsOn] = useState(data);

  const toggleSwitch = () => {
    setIsOn(!isOn);
    actionhandler(itemId);
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
