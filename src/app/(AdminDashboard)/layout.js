"use client";
import React from "react";
import "../global.css";
import AdminContextProvider from "../../contextApi/AdminContextApi";
import DashBordContextApi from "../../contextApi/DashBordContextApi";

export default function AdminLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AdminContextProvider>
          <DashBordContextApi>
            <div>{children}</div>
          </DashBordContextApi>
        </AdminContextProvider>
      </body>
    </html>
  );
}
