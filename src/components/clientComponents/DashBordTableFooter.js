import React from "react";
import styles from "./css/dashboardTableFooter.module.css";
export default function DashBordTableFooter() {
  return (
    <div className={styles.com_container}>
      <div className={styles.inner_container}>
        <div>left</div>
        <div className={styles.footer_rightSide}>
          <div>Rows per page:</div>
        </div>
        <div className={styles.custome_selector_container}>
          <input value="25" />
        </div>
      </div>
    </div>
  );
}
