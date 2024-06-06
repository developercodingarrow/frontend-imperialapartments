"use client";
import React from "react";
import styles from "./userimageform.module.css";
import UploadBtn from "../../static-utils/elements/buttons/UploadBtn";

export default function UserImageForm() {
  return (
    <div className={styles.form_wrapper}>
      <div className={styles.form_title}>update Profile image</div>
      <div className={styles.form_inputCard}>
        <div>
          {" "}
          <input type="file" />
        </div>

        <div>
          <UploadBtn />
        </div>
      </div>
    </div>
  );
}
