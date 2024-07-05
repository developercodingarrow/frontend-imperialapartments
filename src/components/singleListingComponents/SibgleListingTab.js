"use client";

import React, { useEffect, useContext, useState } from "react";
import styles from "./css/singlelisting.module.css";

import { SingleListingContext } from "../../contextApi/SinglePageListingContextApi";

export default function SibgleListingTab(props) {
  const { tabOptions } = props;
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
        {tabOptions.map((el, i) => {
          return (
            <div
              className={`${styles.content_tab} ${
                activeTab === `${el.tabLink}` ? styles.active_tab : ""
              }`}
              onClick={() => handelListingTab(`${el.tabLink}`)}
            >
              {el.tabText}
            </div>
          );
        })}
      </div>
    </div>
  );
}
