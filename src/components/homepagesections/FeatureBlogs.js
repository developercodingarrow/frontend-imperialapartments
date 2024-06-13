import React from "react";
import styles from "./css/faetureBlogs.module.css";
import BlogCard from "../cards/BlogCard";
export default function FeatureBlogs() {
  return (
    <div className={styles.section_wrapper}>
      <div className={styles.section_heading}>
        <h2>Browse by property type</h2>
      </div>
      <div className={styles.card_wrapper}>
        {[1, 2, 3, 4, 5, 6, 7, 8].map((el, i) => {
          return <BlogCard />;
        })}
      </div>
    </div>
  );
}
