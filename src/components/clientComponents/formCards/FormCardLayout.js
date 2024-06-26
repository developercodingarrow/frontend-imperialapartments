"use client";
import React from "react";
import styles from "./css/formCardLayout.module.css";
export default function FormCardLayout({ children, cardTitle }) {
  return (
    <div className={styles.card_container}>
      <div className={styles.card_title}>
        <div className={styles.small_title}> {cardTitle}</div>
      </div>
      <div className={styles.inner_container}>{children}</div>
    </div>
  );
}
