"use client";
import React from "react";
import "../global.css";
import AdminContextProvider from "../../contextApi/AdminContextApi";

export default function AdminLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AdminContextProvider>
          <div>{children}</div>
        </AdminContextProvider>
      </body>
    </html>
  );
}
