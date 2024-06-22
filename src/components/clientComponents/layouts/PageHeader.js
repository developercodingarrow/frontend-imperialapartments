import React from "react";
import styles from "./pageheader.module.css";
export default function PageHeader() {
  return (
    <div className={styles.container_top_Header}>
      <div className={styles.inner_wrapper}>
        <h4>Blog App</h4>
        <h6>Get The Latest News</h6>
      </div>
    </div>
  );
}
