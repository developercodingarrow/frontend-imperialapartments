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
          suppressHydrationWarning={true}
          className={styles.inputStyle}
        />
      </div>
    </div>
  );
}

export default forwardRef(TextInput);
