"use client";
import React, { useContext, useEffect } from "react";
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
import {
  createCategoriesForm,
  UpdateCategoriesForm,
} from "../../../../JsonData/projectdata";
import { BlogCategoriesContext } from "../../../../contextApi/BlogCategoriesContextApi";
import { AppContext } from "../../../../contextApi/AppContextApi";
import EditModel from "../../../../components/clientComponents/models/EditModel";

export default function CreateCategories() {
  const {
    handelGetAll,
    allBlogCategories,
    handelCreateNewCategoric,
    handelDeleteCategories,
    toggleAction,
    handelUpdateCategories,
  } = useContext(BlogCategoriesContext);
  const { handelEdiFormOpen, editForm, editModelData, handelClodeEditModel } =
    useContext(AppContext);

  console.log(handelCreateNewCategoric);

  useEffect(() => {
    handelGetAll();
  }, [toggleAction]);

  return (
    <div>
      <AdminDashBordLayout>
        {editForm && (
          <EditModel
            modeldata={editModelData}
            sideFormFiled={UpdateCategoriesForm}
            formHandel={handelUpdateCategories}
            handelColseModel={handelClodeEditModel}
          />
        )}
        <PageHeader />
        <div>
          <TwoColumLayOut
            tablecolums={categoriesColumns}
            tableData={allBlogCategories}
            deleteHandel={handelDeleteCategories}
            edithandel={handelEdiFormOpen}
            checkboxhandler={handleCheckboxChange}
            sideFormFiled={createCategoriesForm}
            formHandel={handelCreateNewCategoric}
            dataloading={toggleAction}
          />
        </div>
      </AdminDashBordLayout>
    </div>
  );
}
