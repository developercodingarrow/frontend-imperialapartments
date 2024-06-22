"use client";

import React, { useContext } from "react";
import styles from "./userlist.module.css";

import DashBordListTable from "../../../../components/clientComponents/DashBordListTable";
import AdminDashBordLayout from "../../../../components/clientComponents/layouts/AdminDashBordLayout";
import PageHeader from "../../../../components/clientComponents/layouts/pageHeader";

export default function UserListPage() {
  return (
    <AdminDashBordLayout>
      <PageHeader />
      <div>
        <DashBordListTable />
      </div>
    </AdminDashBordLayout>
  );
}
