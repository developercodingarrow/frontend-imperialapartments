"use client";
import React from "react";
import styles from "./css/checkBoxfillter.module.css";
import useFillterUrlUpdater from "../../../custome-hooks/useFillterUrlUpdater";

export default function CheckBoxFillter(props) {
  const { options, checkedItems, onCheckboxChange, handelCheckbox } = props;

  return (
    <div className={styles.main_Container}>
      <div className={styles.block_checkBox_container}>
        {options?.map((option, index) => {
          const isChecked = checkedItems.includes(option.name);
          return (
            <label
              className={`${styles.label_Box} ${
                isChecked ? styles.checked_lable : ""
              }`}
              key={index}
            >
              <input
                type="checkbox"
                value={option.name}
                checked={isChecked}
                onChange={(e) =>
                  onCheckboxChange(option.name, e.target.checked)
                }
                style={{ display: "none" }}
              />
              <span
                className={`${styles.customCheckbox} ${
                  isChecked ? styles.checked : ""
                }`}
              >
                {isChecked ? <span className={styles.checkedMark}>✔</span> : ""}
              </span>

              <span
                className={
                  isChecked
                    ? `${styles.lableChecked}`
                    : `${styles.checkBoxLable}`
                }
              >
                {" "}
                {option.name}{" "}
              </span>
            </label>
          );
        })}
      </div>
    </div>
  );
}
