import React, { useContext } from "react";
import styles from "./adminLayout.module.css";
import adminLogo from "../../../../public/web-statice-img/dummy logo.png";
import Image from "next/image";
import Link from "next/link";
import { AdminContext } from "../../../contextApi/AdminContextApi";
import AdminDrawer from "../dashbord/AdminDrawer";
import { FaBars } from "../../ApplicationIcon";
import user from "../../../../public/web-statice-img/user-1.jpg";
import DashBordListTable from "../DashBordListTable";

export default function AdminDashBordLayout({ children }) {
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
          <div className={styles.drawer_optionWrapper}>
            <AdminDrawer />
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
          <div className={styles.Page_chldren_wrapper}>{children}</div>
        </div>
      </div>
    </div>
  );
}
