import React, { useState } from "react";
import styles from "./button.module.css";
import BtnLoading from "../loading/BtnLoading";

export default function Button(props) {
  const { btnText } = props;
  const [loading, setloading] = useState(false);
  return (
    <div className={styles.btn_container}>
      {loading ? <BtnLoading /> : btnText}
    </div>
  );
}
