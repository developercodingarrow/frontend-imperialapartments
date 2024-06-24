"use client";
import React from "react";
import styles from "./css/blogCaterories.module.css";

export default function BlogCategories(props) {
  const { catList } = props;
  console.log(catList);
  return (
    <div className={styles.container}>
      {catList &&
        catList.map((el, i) => {
          return <div className={styles.categories_tag}>{el}</div>;
        })}
    </div>
  );
}
