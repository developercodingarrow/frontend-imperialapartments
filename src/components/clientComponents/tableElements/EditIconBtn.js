"use client";
import React from "react";
import { LiaEditSolid } from "../../ApplicationIcon";
import styles from "./css/editBtn.module.css";
export default function EditIconBtn() {
  return (
    <div className={styles.conatiner}>
      <div className={styles.icon_wrapper}>
        <LiaEditSolid />
      </div>
    </div>
  );
}
