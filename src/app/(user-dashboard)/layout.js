"use client";
import React, { useContext } from "react";
import styles from "./dashboardlayout.module.css";
import AuthNavBar from "../../components/AuthDashBord/navBar/AuthNavBar";
import { AppContextProvider } from "../../contextApi/AppContextApi";
import UserDashBord from "../../components/AuthDashBord/user-dashboard/UserDashBord";
import "../global.css";

export default function UserDashBordLayout({ children }) {
  return (
    <html lang="en">
      <body className={styles.body_layout}>
        <AppContextProvider>
          <AuthNavBar />
          <UserDashBord>{children}</UserDashBord>
        </AppContextProvider>
      </body>
    </html>
  );
}
