"use client";

import React, { useState } from "react";
import styles from "./button.module.css";
import BtnLoading from "../loading/BtnLoading";

export default function SubmitBtn(props) {
  const { btnText, disabled, loadindData } = props;

  console.log("disabled", disabled);

  const btnClasses = `${styles.btn_container} ${
    disabled ? styles.disabledBtn : ""
  }`;

  return (
    <button disabled={disabled} className={btnClasses}>
      {loadindData ? <BtnLoading /> : btnText}
    </button>
  );
}
