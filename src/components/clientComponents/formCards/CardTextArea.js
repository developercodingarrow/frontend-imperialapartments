"use client";
import React, { forwardRef } from "react";

import styles from "./css/cardTextArea.module.css";

function CardTextArea(props, ref) {
  const { lable, ...inputProps } = props;
  return (
    <div className={styles.container}>
      <label className={styles.form_label}>{lable}</label>
      <textarea
        ref={ref}
        {...inputProps}
        suppressHydrationWarning={true}
        className={styles.textArea_styles}
      />
    </div>
  );
}

export default forwardRef(CardTextArea);
