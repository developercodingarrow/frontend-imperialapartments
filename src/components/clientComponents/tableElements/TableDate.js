import React from "react";
import styles from "./css/tabledate.module.css";
import { compareAsc, format } from "date-fns";
import { formatDate } from "../tablefillterLogic/formatDate";

export default function TableDate(props) {
  const { data } = props;
  return <p className={styles.table_tr_td_date}>{formatDate(data)}</p>;
}
