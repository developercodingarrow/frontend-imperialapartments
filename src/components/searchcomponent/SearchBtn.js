import React from "react";
import styles from "./css/searchBtn.module.css";
import { IoSearchOutline } from "../ApplicationIcon";

export default function SearchBtn() {
  return (
    <div className={styles.btn_container}>
      <button className={styles.SerachBtn_style}>
        Search
        <div className={styles.search_iconBox}>
          <IoSearchOutline />
        </div>
      </button>
    </div>
  );
}
