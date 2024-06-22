"use client";
import React, { useContext } from "react";
import "../global.css";

import AdminContextProvider from "../../contextApi/AdminContextApi";
import DashBordContextApi from "../../contextApi/DashBordContextApi";
import AdminDashBordLayout from "../../components/clientComponents/layouts/AdminDashBordLayout";

export default function AdminLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AdminContextProvider>
          <DashBordContextApi>{children}</DashBordContextApi>
        </AdminContextProvider>
      </body>
    </html>
  );
}
