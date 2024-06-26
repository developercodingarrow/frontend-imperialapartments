import React, { useState } from "react";
import styles from "./css/checkBoxinput.module.css";

export default function CheckBoxInput(props) {
  const { inputLabel, checkBoxOptions } = props;
  console.log(checkBoxOptions);
  const [checkedOptions, setCheckedOptions] = useState([]);
  const Options = [
    "hotel rooms",
    "deluxe rooms",
    "service apartments",
    "Luxury apartments",
  ];

  const handleCheckboxChange = (option, isChecked) => {
    const updatedOptions = isChecked
      ? [...checkedOptions, option]
      : checkedOptions.filter((item) => item !== option);

    setCheckedOptions(updatedOptions);
  };

  return (
    <div className={styles.Container}>
      <div className={styles.check_box_lable}>
        <label>{inputLabel}</label>
      </div>
      <div className={styles.checkbox_container}>
        {checkBoxOptions.map((option, i) => {
          const isChecked = checkedOptions.includes(option);
          return (
            <div className={styles.checkBox_wrapper} key={i}>
              <input
                type="checkbox"
                value={option.categoriName}
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
              <span className={styles.checkBox_lable}>
                {option.categoriName}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
