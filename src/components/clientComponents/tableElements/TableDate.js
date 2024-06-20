import React from "react";
import styles from "./css/tabledate.module.css";

export default function TableDate(props) {
  const { data } = props;
  return <p className={styles.table_tr_td_date}>{data}</p>;
}
