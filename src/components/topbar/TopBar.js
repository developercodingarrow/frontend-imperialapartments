import React from "react";
import styles from "./topbar.module.css";
import {
  IoIosCall,
  IoMdMailOpen,
  TiSocialFacebook,
  IoLogoInstagram,
  FaLinkedin,
} from "../ApplicationIcon";

export default function TopBar() {
  return (
    <div className={styles.main_wrapper}>
      <div className={styles.inner_wrapper}>
        <div className={styles.topBar_contactBox}>
          <div className={styles.topBar_mobileNumberBox}>
            <span>
              <IoIosCall />
            </span>
            <span>+91-9958200285</span>
          </div>
          <div className={styles.topBar_emailBox}>
            <span>
              <IoMdMailOpen />
            </span>
            <span>sales@imperialapartments.in</span>
          </div>
        </div>
        <div className={styles.topBar_socialMediaBox}>
          <div className={styles.topBar_iconBox}>
            <TiSocialFacebook />
          </div>
          <div className={styles.topBar_iconBox}>
            <IoLogoInstagram />
          </div>
          <div className={styles.topBar_iconBox}>
            <FaLinkedin />
          </div>
        </div>
      </div>
    </div>
  );
}
