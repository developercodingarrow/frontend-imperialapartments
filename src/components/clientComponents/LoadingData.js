import React from "react";
import styles from "./css/loadingData.module.css";
import companyLogo from "../../../public/web-statice-img/logo.jpg";
import Image from "next/image";
export default function LoadingData() {
  return (
    <div className={styles.loading_container}>
      <div className={styles.loading_inner}>
        <div className={styles.company_logo}>
          <Image src={companyLogo} alt="Company Logo" />
        </div>
        <div className={styles.progress_bar_outer}>
          <div className={styles.progress_bar_inner}></div>
        </div>
      </div>
      <p>Loading ...</p>
    </div>
  );
}
