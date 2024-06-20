"use client";

import React from "react";
import styles from "./css/tableCheckbox.module.css";

export default function TableCheckBox() {
  return (
    <div className={styles.check_box_td_span}>
      <input type="checkbox" />
      <span></span>
    </div>
  );
}
