"use client";

import { useContext, useEffect, useState } from "react";
import styles from "./css/checkBoxinput.module.css";
import { AppContext } from "../../../contextApi/AppContextApi";

export default function CheckBoxInput(props) {
  const { checkedOptions, setCheckedOptions } = useContext(AppContext);
  const {
    checkBoxFor,
    inputLabel,
    checkBoxOptions,
    checkedOptionApi = [],
  } = props;
  useEffect(() => {
    if (checkedOptionApi.length > 0) {
      const initialCheckedOptions = checkedOptionApi.map(
        (option) => option.category
      );
      setCheckedOptions(initialCheckedOptions);
    }
  }, [checkedOptionApi]);

  const handleCheckboxChange = (option, isChecked) => {
    console.log(option);
    const updatedOptions = isChecked
      ? [...checkedOptions, option]
      : checkedOptions.filter((item) => item !== option);

    setCheckedOptions(updatedOptions);
  };

  return (
    <div className={styles.Container}>
      <div className={styles.check_box_label}>
        <label>{inputLabel}</label>
      </div>
      <div className={styles.checkbox_container}>
        {checkBoxOptions?.map((option, i) => {
          const value = option[checkBoxFor];
          const isChecked = checkedOptions.includes(option[checkBoxFor]);
          return (
            <label className={styles.checkBox_wrapper} key={i}>
              <input
                type="checkbox"
                value={value}
                className={styles.form_check_input}
                onChange={(e) =>
                  handleCheckboxChange(option[checkBoxFor], e.target.checked)
                }
                checked={isChecked}
              />
              <div
                className={`${styles.custome_checkBox} ${
                  isChecked ? styles.checked : ""
                }`}
              >
                {isChecked ? <span className={styles.checkedMark}>✔</span> : ""}
              </div>
              <span className={styles.checkBox_label}>
                {option[checkBoxFor]}
              </span>
            </label>
          );
        })}
      </div>
    </div>
  );
}
