import React from "react";
import styles from "./css/sideform.module.css";
import { IoIosCall, IoMdMailOpen } from "../ApplicationIcon";
export default function SideForm() {
  return (
    <div className={styles.form_container}>
      <div className={styles.form_header}>
        <div className={styles.form_title}>Online Booking Information</div>
        <div className={styles.contact_detailBox}>
          <div className={styles.contact_deatail}>
            <span>
              {" "}
              <IoIosCall />
            </span>
            <span>+91-9958200285 </span>
          </div>

          <div className={styles.contact_deatail}>
            <span>
              {" "}
              <IoMdMailOpen />
            </span>
            <span>sales@imperialapartments.in </span>
          </div>
        </div>
      </div>
    </div>
  );
}
