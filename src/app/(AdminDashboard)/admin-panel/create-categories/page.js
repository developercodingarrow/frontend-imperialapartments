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
  handelCategoriesEdit,
} from "../../../../JsonData/tableData";
import { createCategoriesForm } from "../../../../JsonData/projectdata";

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
            edithandel={handelCategoriesEdit}
            checkboxhandler={handleCheckboxChange}
            sideFormFiled={createCategoriesForm}
          />
        </div>
      </AdminDashBordLayout>
    </div>
  );
}
