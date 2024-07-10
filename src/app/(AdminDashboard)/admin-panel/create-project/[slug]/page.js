"use client";
import React, { useContext, useEffect } from "react";
import { usePathname, useParams } from "next/navigation";
import styles from "../createproject.module.css";
import AdminDashBordLayout from "../../../../../components/clientComponents/layouts/AdminDashBordLayout";
import PageHeader from "../../../../../components/clientComponents/layouts/pageHeader";
import { createProjectTab } from "../../../../../JsonData/projectdata";
import SibgleListingTab from "../../../../../components/singleListingComponents/SibgleListingTab";
import RenderProjectCreateTab from "../../../../../components/clientComponents/tab/RenderProjectCreateTab";
import { ProjectContext } from "../../../../../contextApi/ProjectContextApi";

export default function CreateProjectpage() {
  const params = useParams();
  const { slug } = params;

  const { singleProjectApi, handelGetSingleProject } =
    useContext(ProjectContext);

  useEffect(() => {
    handelGetSingleProject();
  }, [slug]);

  return (
    <AdminDashBordLayout>
      <PageHeader />
      <div>
        <div>
          <SibgleListingTab tabOptions={createProjectTab} />
        </div>

        <div>
          <RenderProjectCreateTab />
        </div>
      </div>
    </AdminDashBordLayout>
  );
}
