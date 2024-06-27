"use client";
import React from "react";
import AdminDashBordLayout from "../../../../components/clientComponents/layouts/AdminDashBordLayout";
import PageHeader from "../../../../components/clientComponents/layouts/pageHeader";
import TwoColumLayOut from "../../../../components/clientComponents/dashbord/TwoColumLayOut";
import {
  categoriesColumns,
  cateroriesSampleData,
  handelCategoriesDelete,
  handleCheckboxChange,
} from "../../../../JsonData/tableData";

export default function CreateCategories() {
  return (
    <div>
      <AdminDashBordLayout>
        <PageHeader />
        <div>
          <TwoColumLayOut
            tablecolums={categoriesColumns}
            tableData={cateroriesSampleData}
            deleteHandel={handelCategoriesDelete}
            checkboxhandler={handleCheckboxChange}
          />
        </div>
      </AdminDashBordLayout>
    </div>
  );
}
