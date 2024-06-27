"use client";
import React from "react";
import { LiaEditSolid } from "../../ApplicationIcon";
import styles from "./css/editBtn.module.css";
export default function EditIconBtn(props) {
  const { itemId, actionhandler } = props;

  const handelClick = () => {
    actionhandler(itemId);
  };
  return (
    <div className={styles.conatiner}>
      <div className={styles.icon_wrapper}>
        <LiaEditSolid onClick={handelClick} />
      </div>
    </div>
  );
}
