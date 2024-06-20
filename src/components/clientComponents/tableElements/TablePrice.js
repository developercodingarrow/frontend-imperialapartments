"use client";
import React from "react";
import styles from "./css/tablePrice.module.css";
import { LiaRupeeSignSolid } from "../../ApplicationIcon";
export default function TablePrice(props) {
  const { price } = props;
  return (
    <div className={styles.icon_text_td_div}>
      <div className={styles.icon_td_div}>
        <LiaRupeeSignSolid />
      </div>
      <h6 className={styles.td_text}>{price}</h6>
    </div>
  );
}
