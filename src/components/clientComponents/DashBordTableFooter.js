"use client";
import React, { useState } from "react";
import styles from "./css/dashboardTableFooter.module.css";
import {
  IoMdArrowDropdown,
  RiArrowRightSLine,
  RiArrowLeftSLine,
} from "../ApplicationIcon";

export default function DashBordTableFooter(props) {
  const {
    totalRows,
    rowsPerPage,
    handelRowPerPage,
    handelNext,
    handelPrev,
    currentPage,
    upToPage,
    endPage,
  } = props;
  const [selectorList, setselectorList] = useState(false);

  const handelSelectorList = () => {
    setselectorList(!selectorList);
  };

  const handelSelectSelector = (e) => {
    const selectorVal = Number(e.target.textContent);
    console.log(selectorVal);
    handelRowPerPage(selectorVal);
    setselectorList(false);
  };

  return (
    <div className={styles.com_container}>
      <div className={styles.inner_container}>
        <div className={styles.footer_leftSide}>.</div>
        <div className={styles.footer_rightSide}>
          <div>Rows per page:</div>
        </div>
        <div className={styles.custome_selector_container}>
          <input value={rowsPerPage} className={styles.selector_inputStyle} />
          <div className={styles.selector_iconBox} onClick={handelSelectorList}>
            <IoMdArrowDropdown />
          </div>
          {selectorList && (
            <div className={styles.selector_listBox}>
              <ul className={styles.list_ul_wrapper}>
                {[5, 10, 50, 100].map((val, i) => {
                  return (
                    <li
                      className={styles.selector_list}
                      onClick={handelSelectSelector}
                    >
                      {val}
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </div>
        <div className={styles.row_numberBox}>
          <span>{currentPage}</span>
          <span>-</span>
          <span>{endPage}</span>
          <span>of</span>
          <span>{totalRows}</span>
        </div>

        <div className={styles.navigation_arrowBox}>
          <span className={styles.icon_wrapper} onClick={handelPrev}>
            <RiArrowLeftSLine />
          </span>
          <span className={styles.icon_wrapper} onClick={handelNext}>
            <RiArrowRightSLine />
          </span>
        </div>
      </div>
    </div>
  );
}
