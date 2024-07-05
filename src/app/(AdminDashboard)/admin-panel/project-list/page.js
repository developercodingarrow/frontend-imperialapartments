"use client";
import React, { useContext, useEffect } from "react";
import AdminDashBordLayout from "../../../../components/clientComponents/layouts/AdminDashBordLayout";
import PageActionHeader from "../../../../components/clientComponents/layouts/PageActionHeader";
import PageHeader from "../../../../components/clientComponents/layouts/pageHeader";
import { ProjectContext } from "../../../../contextApi/ProjectContextApi";
import DashBordListTable from "../../../../components/clientComponents/DashBordListTable";
import { projectColumns, handleView } from "../../../../JsonData/tableData";

export default function ProjectListpage() {
  const {
    toggleAction,
    allProject,
    handelGetAll,
    handelCreateNewProject,
    handelFeatured,
  } = useContext(ProjectContext);

  useEffect(() => {
    handelGetAll();
  }, [toggleAction]);

  const handleCheckboxChange = () => {
    alert("check box handel");
  };

  return (
    <AdminDashBordLayout>
      <PageActionHeader
        btnhandler={handelCreateNewProject}
        btnText="Create Project"
        redirectURL="create-project"
      />
      <PageHeader />
      <div>
        <DashBordListTable
          tableColumns={projectColumns}
          tableSampleData={allProject}
          handelswitchToggle={handelFeatured}
          handleCheckboxChange={handleCheckboxChange}
          handleView={handleView}
        />
      </div>
    </AdminDashBordLayout>
  );
}
