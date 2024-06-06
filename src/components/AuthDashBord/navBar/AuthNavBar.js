import React, { useContext } from "react";
import styles from "./authnabar.module.css";
import { FaBars, IoIosArrowDown } from "../../../components/ApplicationIcon";
import Image from "next/image";
import logo from "../../../../public/web-statice-img/dummy logo.png";
import dummyUser from "../../../../public/web-statice-img/dummy-user.png";
import { AppContext } from "../../../contextApi/AppContextApi";

export default function AuthNavBar() {
  const { handelDrawerToggel } = useContext(AppContext);
  return (
    <div className={styles.main_wrapper}>
      <div className={styles.left_side}>
        <div className={styles.nav_hangbugBox}>
          <FaBars onClick={handelDrawerToggel} />
        </div>
        <div className={styles.nav_logo}>
          <Image src={logo} width={100} />
        </div>
      </div>
      <div className={styles.right_side}>
        <div className={styles.user_imageBox}>
          <Image
            src={dummyUser}
            width={100}
            height={100}
            className={styles.userImag_style}
          />
        </div>
        <div className={styles.user_nameBox}>
          <span>Hi</span> <span>bhupendra kaushik</span>{" "}
          <span>
            <IoIosArrowDown />{" "}
          </span>
        </div>
      </div>
    </div>
  );
}
