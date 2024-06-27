"use client";
import React, { forwardRef } from "react";
import styles from "./css/cardInput.module.css";

function CardInput(props, ref) {
  const { lable, ...inputProps } = props;

  return (
    <div className={styles.container}>
      <label className={styles.form_label}>{lable}</label>
      <input
        ref={ref}
        {...inputProps}
        suppressHydrationWarning={true}
        className={styles.input_styles}
      />
    </div>
  );
}

export default forwardRef(CardInput);
