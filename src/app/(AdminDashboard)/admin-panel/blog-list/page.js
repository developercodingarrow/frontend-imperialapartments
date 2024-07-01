"use client";

import React from "react";
import AdminDashBordLayout from "../../../../components/clientComponents/layouts/AdminDashBordLayout";
import PageHeader from "../../../../components/clientComponents/layouts/pageHeader";
import {
  BlogColumns,
  blogsampleData,
  handleView,
  handleCheckboxChange,
} from "../../../../JsonData/tableData";
import DashBordListTable from "../../../../components/clientComponents/DashBordListTable";
import PageActionHeader from "../../../../components/clientComponents/layouts/PageActionHeader";

export default function BlogsList() {
  return (
    <AdminDashBordLayout>
      <PageActionHeader />
      <PageHeader />
      <div>
        <DashBordListTable
          tableColumns={BlogColumns}
          tableSampleData={blogsampleData}
          handleView={handleView}
          handleCheckboxChange={handleCheckboxChange}
        />
      </div>
    </AdminDashBordLayout>
  );
}
