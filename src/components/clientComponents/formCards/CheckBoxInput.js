import React, { useState, useEffect } from "react";
import styles from "./css/checkBoxinput.module.css";

export default function CheckBoxInput(props) {
  const {
    inputLabel,
    onChange,
    checkBoxOptions,
    defaultValue,
    checkBoxStyle,
    checkBoxContainerStyle,
    valueKey,
    ...inputProps
  } = props;
  console.log(checkBoxOptions);
  const [checkedOptions, setCheckedOptions] = useState(defaultValue || []);

  useEffect(() => {
    console.log("defaultValue changed:", defaultValue);
    setCheckedOptions(defaultValue || []);
  }, [defaultValue]);

  const handleCheckboxChange = (option, isChecked) => {
    console.log(option);
    const updatedOptions = isChecked
      ? [...checkedOptions, option]
      : checkedOptions.filter((item) => item !== option);

    setCheckedOptions(updatedOptions);
    onChange(updatedOptions); // Update form state
  };

  return (
    <div className={styles.Container}>
      <div className={styles.check_box_label}>
        <label>{inputLabel}</label>
      </div>
      <div className={styles.checkbox_container}>
        {checkBoxOptions?.map((option, i) => {
          const value = option[valueKey];
          const isChecked = checkedOptions.includes(option);
          return (
            <label className={styles.checkBox_wrapper} key={i}>
              <input
                type="checkbox"
                value={value}
                className={styles.form_check_input}
                onChange={(e) => handleCheckboxChange(option, e.target.checked)}
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
                {option.categoryName}
              </span>
            </label>
          );
        })}
      </div>
    </div>
  );
}
