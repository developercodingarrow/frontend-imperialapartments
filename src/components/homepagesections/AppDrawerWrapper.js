"use client";

import React, { useContext, useState } from "react";
import styles from "./css/appDrawerWrapper.module.css";
import { AppContext } from "../../contextApi/AppContextApi";
import AppDrawer from "../mobile_component/AppDrawer";

export default function AppDrawerWrapper() {
  const { handelAppDrawerToggle, appDrawer, setappDrawer } =
    useContext(AppContext);

  return (
    <div
      className={`${appDrawer ? styles.container : styles.close_container}`}
      onClick={handelAppDrawerToggle}
    >
      <div
        className={`${
          appDrawer ? styles.inner_container : styles.close_inner_container
        }`}
      >
        <AppDrawer />
      </div>
    </div>
  );
}
