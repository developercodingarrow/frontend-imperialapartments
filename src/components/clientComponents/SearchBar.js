import React, { useState } from "react";
import styles from "./css/searchbar.module.css";
import { IoSearchOutline } from "../ApplicationIcon";
export default function SearchBar(props) {
  const { handelTableDatasearch, fieldName, placeholder } = props;

  const handelSearch = (e) => {
    const searchTerm = e.target.value;

    handelTableDatasearch(searchTerm, fieldName);
  };
  return (
    <div className={styles.com_container}>
      <div className={styles.icon_wrapper}>
        <IoSearchOutline />
      </div>
      <div className={styles.input_wrapper}>
        <input
          type="text"
          placeholder={placeholder}
          className={styles.input_style}
          onChange={handelSearch}
        />
      </div>
    </div>
  );
}
