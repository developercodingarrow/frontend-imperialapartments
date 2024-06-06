import React from "react";
import styles from "./css/herosection.module.css";
import SearchBar from "../searchcomponent/SearchBar";
export default function HeroSection() {
  return (
    <div className={styles.section_container}>
      <div className={styles.backgound_overlay}>
        <div className={styles.hero_headingBox}>Find the right Stay today</div>
        <div className={styles.hero_search_barWrapper}>
          <SearchBar />
        </div>
      </div>
    </div>
  );
}
