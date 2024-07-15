"use client";
import React, { useContext } from "react";
import styles from "./css/toggleArrow.module.css";
import { IoIosArrowDown, IoIosArrowUp } from "../../ApplicationIcon";
import { AppContext } from "../../../contextApi/AppContextApi";

export default function ToggleArrow() {
  const { handelToggleArrow, toggleArrow, settoggleArrow } =
    useContext(AppContext);
  return (
    <div className={styles.container} onClick={handelToggleArrow}>
      {toggleArrow ? <IoIosArrowDown /> : <IoIosArrowUp />}
    </div>
  );
}
