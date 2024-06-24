"use client";

import React, { useContext } from "react";

import DashBordListTable from "../../../../components/clientComponents/DashBordListTable";
import AdminDashBordLayout from "../../../../components/clientComponents/layouts/AdminDashBordLayout";
import PageHeader from "../../../../components/clientComponents/layouts/pageHeader";
import {
  tableColumns,
  tableSampleData,
  handleCheckboxChange,
  handleDelete,
  handleUpdate,
  handleView,
} from "../../../../JsonData/tableData";

export default function UserListPage() {
  return (
    <AdminDashBordLayout>
      <PageHeader />
      <div>
        <DashBordListTable
          tableColumns={tableColumns}
          tableSampleData={tableSampleData}
          handleCheckboxChange={handleCheckboxChange}
          handleDelete={handleDelete}
          handleUpdate={handleUpdate}
          handleView={handleView}
        />
      </div>
    </AdminDashBordLayout>
  );
}
