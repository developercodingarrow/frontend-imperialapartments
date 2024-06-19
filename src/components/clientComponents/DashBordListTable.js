"use client";
import React from "react";
import styles from "./css/dashboardListtable.module.css";
import SearchBar from "./SearchBar";
import { IoFunnelOutline } from "../ApplicationIcon";
import DashBordTable from "./DashBordTable";
import DashBordTableFooter from "./DashBordTableFooter";
export default function DashBordListTable() {
  return (
    <div className={styles.main_container}>
      <div className={styles.inner_container}>
        <div className={styles.table_fillterBar}>
          <div className={styles.header_left}>
            <div>
              <SearchBar />
            </div>
          </div>
          <div className={styles.header_right}>
            <div className={styles.fillter_iconWrapper}>
              <IoFunnelOutline />
            </div>
          </div>
        </div>
        <DashBordTable />
        <DashBordTableFooter />
      </div>
    </div>
  );
}
