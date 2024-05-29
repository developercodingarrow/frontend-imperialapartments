import React from "react";
import styles from "./navbar.module.css";

export default function NavBar() {
  return (
    <div className={styles.main_wrapper}>
      <div className={styles.dekstop_navBar}>
        <div>logo</div>
        <div className={styles.NavBar_right_sideBox}>
          <div>navigation manu</div>
          <div>Login/singup</div>
        </div>
      </div>
    </div>
  );
}
