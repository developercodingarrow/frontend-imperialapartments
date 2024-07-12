import React from "react";
import styles from "./css/inputelements.module.css";
export default function InputElements(props) {
  const { lable, value, handelinput, ...inputProps } = props;
  console.log(props);
  return (
    <div className={styles.container}>
      <label className={styles.form_label}>{lable}</label>
      <input
        {...inputProps}
        value={value}
        onChange={handelinput}
        className={styles.input_styles}
      />
    </div>
  );
}
