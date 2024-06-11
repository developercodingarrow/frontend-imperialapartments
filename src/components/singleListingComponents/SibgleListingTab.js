"use client";

import React, { useEffect, useContext, useState } from "react";
import styles from "./css/singlelisting.module.css";

import { SingleListingContext } from "../../contextApi/SinglePageListingContextApi";

export default function SibgleListingTab() {
  const { activeTab, handelListingTab, isSticky, setIsSticky } =
    useContext(SingleListingContext);

  const handleScroll = () => {
    if (window.scrollY > 650) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`${styles.main_container} ${isSticky ? styles.sticky : ""} `}
    >
      <div
        className={`${styles.container_tabsWrapper} ${
          isSticky ? styles.sticky : ""
        } `}
      >
        <div
          className={`${styles.content_tab} ${
            activeTab === "overview" ? styles.active_tab : ""
          }`}
          onClick={() => handelListingTab("overview")}
        >
          OverView
        </div>
        <div
          className={`${styles.content_tab} ${
            activeTab === "near-location" ? styles.active_tab : ""
          }`}
          onClick={() => handelListingTab("near-location")}
        >
          Near Location
        </div>
        <div
          className={`${styles.content_tab} ${
            activeTab === "content" ? styles.active_tab : ""
          }`}
          onClick={() => handelListingTab("content")}
        >
          Content
        </div>

        <div
          className={`${styles.content_tab} ${
            activeTab === "amenities" ? styles.active_tab : ""
          }`}
          onClick={() => handelListingTab("amenities")}
        >
          AMENITIES
        </div>
        <div
          className={`${styles.content_tab} ${
            activeTab === "fandQ" ? styles.active_tab : ""
          }`}
          onClick={() => handelListingTab("fandQ")}
        >
          F & Q
        </div>
      </div>
    </div>
  );
}
