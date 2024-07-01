"use client";
import React, { useContext } from "react";
import "../global.css";

import AdminContextProvider from "../../contextApi/AdminContextApi";
import DashBordContextApi from "../../contextApi/DashBordContextApi";
import AdminDashBordLayout from "../../components/clientComponents/layouts/AdminDashBordLayout";
import { BlogCategoriesContextProvider } from "../../contextApi/BlogCategoriesContextApi";
import { AppContextProvider } from "../../contextApi/AppContextApi";

export default function AdminLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AppContextProvider>
          <AdminContextProvider>
            <BlogCategoriesContextProvider>
              <DashBordContextApi>{children}</DashBordContextApi>
            </BlogCategoriesContextProvider>
          </AdminContextProvider>
        </AppContextProvider>
      </body>
    </html>
  );
}
