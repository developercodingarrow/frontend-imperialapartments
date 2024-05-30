"use client";

import React from "react";
import styles from "./css/authformfooter.module.css";
import Image from "next/image";
import googleIcon from "../../../public/web-statice-img/google-logo-icon-png-transparent-background.png";
import facbookLogo from "../../../public/web-statice-img/Facebook-logo.png";
import Link from "next/link";

export default function AuthFormFooter(props) {
  const { linkText, linkPath, linkInfo } = props;
  return (
    <div>
      <div className="small_linkBox">
        <span className="small_text">
          {linkInfo}
          <Link href={`/${linkPath}`}>{linkText} </Link>
        </span>
      </div>

      <div className={styles.border_lineBox}>
        <span className={styles.border_line}></span> <span>OR</span>
        <span className={styles.border_line}></span>
      </div>

      <div className={styles.social_login_wrapper}>
        <div className={styles.social_iconsBox}>
          <Image
            src={googleIcon}
            width={500}
            height={500}
            className={styles.socialIcon_imageStyle}
          />
        </div>

        <div className={styles.social_iconsBox}>
          <Image
            src={facbookLogo}
            width={500}
            height={500}
            className={styles.socialIcon_imageStyle}
          />
        </div>
      </div>
    </div>
  );
}
