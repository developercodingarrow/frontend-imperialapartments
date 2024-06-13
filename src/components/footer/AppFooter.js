import React from "react";
import styles from "./css/appfooter.module.css";
import {
  IoHomeOutline,
  MdOutlineBedroomParent,
  RiMailSendLine,
  IoNewspaperOutline,
  FaWhatsapp,
} from "../ApplicationIcon";
export default function AppFooter() {
  return (
    <div className={styles.container}>
      <div className={styles.dekstop_footer}>Dekstop footer</div>
      <div className={styles.mobile_footer}>
        <div className={styles.icon_box}>
          <IoHomeOutline />
        </div>
        <div className={styles.icon_box}>
          <MdOutlineBedroomParent />
        </div>
        <div className={styles.icon_box}>
          <RiMailSendLine />
        </div>
        <div className={styles.icon_box}>
          <IoNewspaperOutline />
        </div>
        <div className={styles.icon_box}>
          <FaWhatsapp />
        </div>
      </div>
    </div>
  );
}
