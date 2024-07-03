"use client";
import React, { useContext, useEffect } from "react";
import AdminDashBordLayout from "../../../../components/clientComponents/layouts/AdminDashBordLayout";
import PageHeader from "../../../../components/clientComponents/layouts/pageHeader";
import {
  enquireColumns,
  handleCheckboxChange,
} from "../../../../JsonData/tableData";
import DashBordListTable from "../../../../components/clientComponents/DashBordListTable";
import { EnquireContext } from "../../../../contextApi/enquireContextApi";

export default function EnquirePage() {
  const { handelGetAll, allEnquires, toggleAction } =
    useContext(EnquireContext);

  console.log(allEnquires);

  useEffect(() => {
    handelGetAll();
  }, [toggleAction]);
  return (
    <AdminDashBordLayout>
      <PageHeader />
      <div>
        <DashBordListTable
          tableColumns={enquireColumns}
          tableSampleData={allEnquires}
          handleCheckboxChange={handleCheckboxChange}
        />
      </div>
    </AdminDashBordLayout>
  );
}
