import React from "react";
import styles from "./css/listingpagelayout.module.css";
import ListingFillter from "./ListingFillter";
import SideForm from "./SideForm";

export default function ListingPageLayout({ children }) {
  return (
    <div className={styles.layout_mainContainer}>
      <div className={styles.fillter_wrapper}>
        <ListingFillter />
      </div>
      <div className={styles.childre_wrapper}>{children}</div>
      <div className={styles.side_barContainer}>
        <SideForm />
      </div>
    </div>
  );
}
