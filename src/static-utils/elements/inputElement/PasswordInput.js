"use client";

import React, { forwardRef, useState } from "react";
import styles from "./passwordinput.module.css";
import { IoEye } from "../../../components/ApplicationIcon";

function PasswordInput(props, ref) {
  const { lable, ...inputProps } = props;

  const [toggleinputText, settoggleinputText] = useState(true);

  return (
    <div className={styles.filed_container}>
      <div className={styles.input_wrapper}>
        <input
          ref={ref}
          {...inputProps}
          className={styles.inputStyle}
          suppressHydrationWarning={true}
        />
        <div className={styles.pass_iconBox}>
          {" "}
          <IoEye />
        </div>
      </div>
    </div>
  );
}

export default forwardRef(PasswordInput);
