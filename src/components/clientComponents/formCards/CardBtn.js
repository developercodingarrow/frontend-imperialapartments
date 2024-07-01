"use client";
import React from "react";
import styles from "./css/cardBtn.module.css";
export default function CardBtn(props) {
  const { btnText } = props;
  return (
    <div className={styles.btn_wrapper}>
      <button type="submit" className={styles.btn_style}>
        {btnText}
      </button>
    </div>
  );
}
