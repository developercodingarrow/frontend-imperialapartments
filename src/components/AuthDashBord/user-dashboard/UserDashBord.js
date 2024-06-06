import React, { useContext } from "react";
import styles from "./userdashboard.module.css";
import { AppContext } from "../../../contextApi/AppContextApi";
import { getClassName } from "../../../Application logics/authusers/ResponsiveUserLayout";

export default function UserDashBord({ children }) {
  const { drawerToggel } = useContext(AppContext);
  const { dynimicSideBar, dynimicContainer } = getClassName(
    drawerToggel,
    styles
  );

  return (
    <div className={styles.layout_container}>
      <div className={dynimicSideBar}>side bar</div>
      <div className={dynimicContainer}>{children}</div>
    </div>
  );
}
