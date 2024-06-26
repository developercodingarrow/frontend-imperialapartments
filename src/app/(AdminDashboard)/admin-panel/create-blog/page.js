"use client";

import React from "react";
import AdminDashBordLayout from "../../../../components/clientComponents/layouts/AdminDashBordLayout";
import PageHeader from "../../../../components/clientComponents/layouts/pageHeader";
import styles from "./createblogpage.module.css";
import FormCard from "../../../../components/clientComponents/formCards/FormCard";
import {
  blogInfoForm,
  blogTags,
  blogCategories,
  dynimicCategories,
} from "../../../../JsonData/projectdata";
import ChipCard from "../../../../components/clientComponents/formCards/ChipCard";
import SelectorCard from "../../../../components/clientComponents/formCards/SelectorCard";
import CheckBoxCard from "../../../../components/clientComponents/formCards/CheckBoxCard";

export default function CreateBlogPage() {
  return (
    <AdminDashBordLayout>
      <PageHeader />

      <div className={styles.container}>
        <div className={styles.inner_container}>
          <div className={styles.left_sideContainer}>
            <div className={styles.formcard_wrapper}>
              <FormCard cardTitle="info" inputData={blogInfoForm} />
            </div>

            <div className={styles.formcard_wrapper}>
              {/* <ChipCard cardTitle="Tags" /> */}
              <FormCard cardTitle="Tags" inputData={blogTags} />
            </div>

            <div className={styles.formcard_wrapper}>
              <FormCard
                cardTitle="Categories"
                inputData={blogCategories}
                dynimicData={dynimicCategories}
              />
            </div>

            <div className={styles.formcard_wrapper}>
              <SelectorCard cardTitle="Post Type" />
            </div>
          </div>

          <div className={styles.Right_sideContainer}>Right side</div>
        </div>
      </div>
    </AdminDashBordLayout>
  );
}
