"use client";
import React from "react";
import styles from "./css/deleteIconBtn.module.css";
import { MdDeleteForever } from "../../ApplicationIcon";

export default function DelectIconBtn(props) {
  const { itemId, actionhandler } = props;
  console.log(itemId);

  const handelClick = () => {
    actionhandler(itemId);
  };
  return (
    <div className={styles.conatiner}>
      <div className={styles.icon_wrapper}>
        <MdDeleteForever onClick={handelClick} />
      </div>
    </div>
  );
}
