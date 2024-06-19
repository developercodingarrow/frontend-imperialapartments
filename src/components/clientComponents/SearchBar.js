import React from "react";
import styles from "./css/searchbar.module.css";
import { IoSearchOutline } from "../ApplicationIcon";
export default function SearchBar() {
  return (
    <div className={styles.com_container}>
      <div className={styles.icon_wrapper}>
        <IoSearchOutline />
      </div>
      <div className={styles.input_wrapper}>
        <input
          type="text"
          placeholder="Search Products"
          className={styles.input_style}
        />
      </div>
    </div>
  );
}
