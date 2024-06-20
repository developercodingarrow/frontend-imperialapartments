"use client";
import React from "react";
import styles from "./css/dashboardTableFooter.module.css";
import {
  IoMdArrowDropdown,
  RiArrowRightSLine,
  RiArrowLeftSLine,
} from "../ApplicationIcon";
export default function DashBordTableFooter() {
  return (
    <div className={styles.com_container}>
      <div className={styles.inner_container}>
        <div className={styles.footer_leftSide}>.</div>
        <div className={styles.footer_rightSide}>
          <div>Rows per page:</div>
        </div>
        <div className={styles.custome_selector_container}>
          <input value="2" className={styles.selector_inputStyle} />
          <div className={styles.selector_iconBox}>
            <IoMdArrowDropdown />
          </div>
        </div>
        <div className={styles.row_numberBox}>
          <span>1</span>
          <span>-</span>
          <span>10</span>
          <span>of</span>
          <span>12</span>
        </div>

        <div className={styles.navigation_arrowBox}>
          <span className={styles.icon_wrapper}>
            <RiArrowLeftSLine />
          </span>
          <span className={styles.icon_wrapper}>
            <RiArrowRightSLine />
          </span>
        </div>
      </div>
    </div>
  );
}
