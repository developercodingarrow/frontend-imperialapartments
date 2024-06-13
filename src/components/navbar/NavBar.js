"use client";

import React, { useContext } from "react";
import styles from "./navbar.module.css";
import Image from "next/image";
import whiteLogo from "../../../public/web-statice-img/white-logo.png";
import { main_menu } from "../../JsonData/pagelinks";
import Link from "next/link";
import { IoReorderFourOutline, IoIosCall } from "../ApplicationIcon";
import { AppContext } from "../../contextApi/AppContextApi";

export default function NavBar() {
  const { handelAppDrawerToggle } = useContext(AppContext);
  return (
    <div className={styles.main_wrapper}>
      <div className={styles.dekstop_navBar}>
        <div>
          <Image
            src={whiteLogo}
            width={500}
            height={500}
            className={styles.logo_style}
          />
        </div>
        <div className={styles.NavBar_right_sideBox}>
          <div className={styles.menu_wrapper}>
            {main_menu.map((el, i) => {
              return (
                <Link href={`${el.hrfLink}`} className={styles.link_style}>
                  {el.name}
                </Link>
              );
            })}
          </div>
          <div className={styles.auth_btnWrapper}>
            <Link href={"/"} className={styles.sign_inBtn}>
              Sign in
            </Link>
            <Link href={"/"} className={styles.outline_btn}>
              Create account
            </Link>
          </div>
        </div>
      </div>

      <div className={styles.mobile_navBar}>
        <div className={styles.hanburg_box} onClick={handelAppDrawerToggle}>
          <IoReorderFourOutline />
        </div>
        <div>
          <Image
            src={whiteLogo}
            width={900}
            height={900}
            className={styles.mobilelogo_style}
          />
        </div>
        <div className={styles.call_action}>
          <div>
            <IoIosCall />
          </div>
          <div className={styles.Mobile_number}>+91-9958200285 </div>
        </div>
      </div>
    </div>
  );
}
