import React from "react";
import styles from "./uplaodbtn.module.css";
import { IoCloudUploadOutline } from "../../../components/ApplicationIcon";

export default function UploadBtn() {
  return (
    <div className={styles.btn_wrapper}>
      <div className={styles.btnContainer}>
        {" "}
        <IoCloudUploadOutline />
      </div>
    </div>
  );
}
