"use client";

import React, { useContext } from "react";
import styles from "./css/listingpagelayout.module.css";
import ListingFillter from "./ListingFillter";
import SideForm from "./SideForm";
import { RoomTypeContext } from "../../contextApi/RoomTypeContextApi";
import AppFooter from "../footer/AppFooter";

export default function ListingPageLayout({ children }) {
  const { allRoomTypes } = useContext(RoomTypeContext);
  return (
    <div className={styles.layout_mainContainer}>
      <div className={styles.layout_container}>
        <div className={styles.fillter_wrapper}>
          <ListingFillter
            fillterTitle="Room Types"
            fillterOptions={allRoomTypes}
          />
        </div>
        <div className={styles.childre_wrapper}>{children}</div>
        <div className={styles.side_barContainer}>
          <SideForm />
        </div>
      </div>
      <div className="footer_wrapper">
        <AppFooter />
      </div>
    </div>
  );
}
