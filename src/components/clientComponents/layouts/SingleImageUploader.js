"use client";
import React, { useContext } from "react";
import styles from "./css/singleimageuploader.module.css";
import { AppContext } from "../../../contextApi/AppContextApi";

export default function SingleImageUploader() {
  const { isOpen, setisOpen, handelOpenModel, handleModelClose } =
    useContext(AppContext);
  return (
    <div className={styles.card_wrapper} onClick={handelOpenModel}>
      <div className={styles.card_titleBox}>
        <p>upload Image</p>
      </div>
      <div className={styles.card}>
        <div className={styles.card_body}>
          <div className={styles.dropBox}>
            <p>Drop File</p>
          </div>
        </div>
      </div>
    </div>
  );
}
