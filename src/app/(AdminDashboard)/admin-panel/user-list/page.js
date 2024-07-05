"use client";

import React, { useContext, useEffect } from "react";

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

import { UserContext } from "../../../../contextApi/UserContextApi";
import { userTableColumns } from "../../../../JsonData/userformfield";

export default function UserListPage() {
  const { handelGetAll, toggleAction, allUsers } = useContext(UserContext);

  useEffect(() => {
    handelGetAll();
  }, [toggleAction]);
  return (
    <AdminDashBordLayout>
      <PageHeader />
      <div>
        <DashBordListTable
          tableColumns={userTableColumns}
          tableSampleData={allUsers}
          handleCheckboxChange={handleCheckboxChange}
          handleDelete={handleDelete}
          handleUpdate={handleUpdate}
          handleView={handleView}
        />
      </div>
    </AdminDashBordLayout>
  );
}
