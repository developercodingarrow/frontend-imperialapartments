"use client";
import React from "react";
import styles from "./css/singleimageuploader.module.css";

export default function SingleImageUploader() {
  return (
    <div className={styles.card_wrapper}>
      <div className={styles.card_titleBox}>
        <p>upload Image</p>
      </div>
      <div className={styles.card}>
        <div className={styles.card_body}>
          <div className={styles.dropBox}>
            <p>Drop File</p>
          </div>
        </div>
      </div>
    </div>
  );
}
