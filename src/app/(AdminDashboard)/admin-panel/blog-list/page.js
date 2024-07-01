"use client";

import React, { useContext } from "react";

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
import { BlogContext } from "../../../../contextApi/BlogContextApi";

export default function BlogsList() {
  const { handelCreateNewBlog } = useContext(BlogContext);

  return (
    <AdminDashBordLayout>
      <PageActionHeader btnhandler={handelCreateNewBlog} />
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
