"use client";
import React from "react";
import { usePathname, useParams } from "next/navigation";
import styles from "../createproject.module.css";
import AdminDashBordLayout from "../../../../../components/clientComponents/layouts/AdminDashBordLayout";
import PageHeader from "../../../../../components/clientComponents/layouts/pageHeader";
import { createProjectTab } from "../../../../../JsonData/projectdata";
import SibgleListingTab from "../../../../../components/singleListingComponents/SibgleListingTab";
import RenderProjectCreateTab from "../../../../../components/clientComponents/tab/RenderProjectCreateTab";

export default function CreateProjectpage() {
  const params = useParams();
  const { slug } = params;
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
