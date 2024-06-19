"use client";

import React, { useContext } from "react";
import styles from "./userlist.module.css";
import Image from "next/image";
import adminLogo from "../../../../../public/web-statice-img/dummy logo.png";
import Link from "next/link";
import { FaBars } from "../../../../components/ApplicationIcon";
import { AdminContext } from "../../../../contextApi/AdminContextApi";
import user from "../../../../../public/web-statice-img/user-1.jpg";
import DashBordListTable from "../../../../components/clientComponents/DashBordListTable";

export default function UserListPage() {
  const { asideDrawer, handelAsidDrawerToggle } = useContext(AdminContext);

  return (
    <div className={styles.man_container}>
      <div className={styles.inner_container}>
        <div
          className={`${styles.dashBoard_drawer} ${
            asideDrawer ? styles.drawer_open : styles.drawer_closed
          }`}
        >
          <div className={styles.drawer_header}>
            <Link href={"/"} className={styles.logo_link}>
              <Image src={adminLogo} width={800} className={styles.log_style} />
            </Link>
          </div>
        </div>

        <div
          className={`${styles.content_container} ${
            asideDrawer ? styles.container_open : styles.container_close
          }`}
        >
          <header
            className={`${styles.navbar_container} ${
              asideDrawer ? styles.navbar_open : styles.navbar_close
            }`}
          >
            <div className={styles.left_side}>
              <div
                className={styles.toggle_box}
                onClick={handelAsidDrawerToggle}
              >
                <FaBars />
              </div>
            </div>
            <div className={styles.right_side}>
              <div className={styles.user_imgBox}>
                <Image
                  src={user}
                  width={500}
                  className={styles.user_imgStyle}
                />
              </div>
            </div>
          </header>
          <div className={styles.dashbord_layout_container}>
            <div className={styles.container_top_Header}>
              <div className={styles.inner_wrapper}>
                <h4>Blog App</h4>
                <h6>Get The Latest News</h6>
              </div>
            </div>
            <div>
              <DashBordListTable />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
