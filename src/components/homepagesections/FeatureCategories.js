import React from "react";
import styles from "./css/featurecategories.module.css";
import CategoriesCard from "../cards/CategoriesCard";
export default function FeatureCategories() {
  return (
    <div className={styles.section_wrapper}>
      <div className={styles.section_heading}>
        <h2>Browse by property type</h2>
      </div>
      <div className={styles.card_wrapper}>
        {[1, 2, 3, 4, 5, 6].map((el, i) => {
          return <CategoriesCard />;
        })}
      </div>
    </div>
  );
}
