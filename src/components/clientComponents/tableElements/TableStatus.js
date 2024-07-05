import React from "react";
import styles from "./css/tableStatus.module.css";

export default function TableStatus(props) {
  const { status } = props;
  console.log(status);

  return (
    <div className={styles.custom_icon_text_td_div}>
      <div className={styles.custome_icon_td_div}></div>
      <h6 className={styles.td_text}>InStock</h6>
    </div>
  );
}
