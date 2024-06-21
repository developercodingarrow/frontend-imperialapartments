"use client";
import React from "react";
import styles from "./css/tableActionpoint.module.css";
import {
  IoIosArrowRoundUp,
  IoIosArrowRoundDown,
  LiaRupeeSignSolid,
  RxDotsVertical,
} from "../../ApplicationIcon";
export default function TableActionPoint(props) {
  const { onClick, itemId } = props;

  return (
    <div className={styles.dot_iconBox}>
      <RxDotsVertical onClick={() => onClick(itemId)} />
    </div>
  );
}
