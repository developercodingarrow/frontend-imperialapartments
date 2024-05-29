"use client";
import React, { forwardRef } from "react";
import styles from "./textInput.module.css";

function TextInput(props, ref) {
  const { lable, ...inputProps } = props;
  return (
    <div className={styles.filed_container}>
      <div className={styles.input_wrapper}>
        <input
          ref={ref}
          {...inputProps}
          className={styles.inputStyle}
          suppressHydrationWarning={true}
        />
      </div>
    </div>
  );
}

export default forwardRef(TextInput);
