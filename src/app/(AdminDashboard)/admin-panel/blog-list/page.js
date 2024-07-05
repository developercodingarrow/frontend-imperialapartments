"use client";

import React, { useContext, useEffect } from "react";

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
  const {
    handelCreateNewBlog,
    handelGetAll,
    allBogs,
    toggleAction,
    handelDeleteBlog,
    handelRedirect,
    handelFeaturedBlog,
  } = useContext(BlogContext);

  useEffect(() => {
    handelGetAll();
  }, [toggleAction]);

  console.log(allBogs);

  return (
    <AdminDashBordLayout>
      <PageActionHeader
        btnhandler={handelCreateNewBlog}
        btnText="Create Blog"
        redirectURL="create-blog"
      />
      <PageHeader />
      <div>
        <DashBordListTable
          tableColumns={BlogColumns}
          tableSampleData={allBogs}
          handleDelete={handelDeleteBlog}
          handelswitchToggle={handelFeaturedBlog}
          handleUpdate={handelRedirect}
          handleView={handleView}
          handleCheckboxChange={handleCheckboxChange}
        />
      </div>
    </AdminDashBordLayout>
  );
}
