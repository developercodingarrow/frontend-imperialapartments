"use client";
import React, { useState } from "react";
import styles from "./css/selectorInput.module.css";
import { IoIosArrowDown } from "../../ApplicationIcon";

export default function SelectorInput() {
  const [toggleSelectorList, settoggleSelectorList] = useState(true);

  const handelSelectorList = () => {
    settoggleSelectorList(!toggleSelectorList);
  };
  return (
    <div className={styles.selector_container}>
      <div className={styles.lable_wrapper}>
        <label>Select</label>
      </div>
      <div className={styles.input_wrapper} onClick={handelSelectorList}>
        <input className={styles.selector_input} />
        <span className={styles.selector_Icon}>
          <IoIosArrowDown />
        </span>

        {toggleSelectorList && (
          <div className={styles.selector_listBox}>
            <ul>
              <li className={styles.selector_list}>service Apartment</li>
              <li className={styles.selector_list}>service Apartment</li>
              <li className={styles.selector_list}>service Apartment</li>
              <li className={styles.selector_list}>service Apartment</li>
              <li className={styles.selector_list}>service Apartment</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
