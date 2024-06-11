import React from "react";
import styles from "./formBtn.module.css";
export default function FormBtn(props) {
  const { btnText } = props;
  return (
    <div>
      <button type="submit" className={styles.btnStyle}>
        {btnText}
      </button>{" "}
    </div>
  );
}
