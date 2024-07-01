"use client";
import React, { useEffect } from "react";
import styles from "../createblogpage.module.css";
import AdminDashBordLayout from "../../../../../components/clientComponents/layouts/AdminDashBordLayout";
import PageHeader from "../../../../../components/clientComponents/layouts/pageHeader";
import ImageUplodModel from "../../../../../components/clientComponents/models/ImageUplodModel";
import FormCard from "../../../../../components/clientComponents/formCards/FormCard";
import SelectorCard from "../../../../../components/clientComponents/formCards/SelectorCard";
import SingleImageUploader from "../../../../../components/clientComponents/layouts/SingleImageUploader";
import {
  blogInfoForm,
  blogTags,
  blogCategories,
  dynimicCategories,
  staticSelector,
} from "../../../../../JsonData/projectdata";

export default function BlogCreatePage() {
  return (
    <AdminDashBordLayout>
      <PageHeader />
      <ImageUplodModel />

      <div className={styles.container}>
        <div className={styles.inner_container}>
          <div className={styles.left_sideContainer}>
            <div className={styles.formcard_wrapper}>
              <FormCard cardTitle="info" inputData={blogInfoForm} />
            </div>

            <div className={styles.formcard_wrapper}>
              <FormCard cardTitle="@Artical Type" inputData={staticSelector} />
            </div>
            <div className={styles.formcard_wrapper}>
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

          <div className={styles.Right_sideContainer}>
            <SingleImageUploader />
          </div>
        </div>
      </div>
    </AdminDashBordLayout>
  );
}
