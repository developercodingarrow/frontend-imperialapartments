"use client";

import React, { useEffect, useContext, useState } from "react";
import SideForm from "../layouts/SideForm";
import { SingleListingContext } from "../../contextApi/SinglePageListingContextApi";
import styles from "./css/sideformWrapper.module.css";
export default function SideFormWrapper() {
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
      <SideForm />
    </div>
  );
}
