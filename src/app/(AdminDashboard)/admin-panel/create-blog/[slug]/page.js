"use client";
import React, { useContext, useEffect } from "react";
import { usePathname, useParams } from "next/navigation";
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
import { BlogContext } from "../../../../../contextApi/BlogContextApi";
import ChipCard from "../../../../../components/clientComponents/formCards/ChipCard";
import { BlogCategoriesContext } from "../../../../../contextApi/BlogCategoriesContextApi";

export default function BlogCreatePage() {
  const params = useParams();
  const { slug } = params;
  const { handelGetSingleBlog, singleBlogApi, handelUpdate, handelTagUpdate } =
    useContext(BlogContext);
  const { allBlogCategories } = useContext(BlogCategoriesContext);

  console.log(slug);

  useEffect(() => {
    handelGetSingleBlog(slug);
  }, [slug]);

  return (
    <AdminDashBordLayout>
      <PageHeader />
      <ImageUplodModel />

      <div className={styles.container}>
        <div className={styles.inner_container}>
          <div className={styles.left_sideContainer}>
            <div className={styles.formcard_wrapper}>
              <FormCard
                cardTitle="info"
                inputData={blogInfoForm}
                apiData={singleBlogApi}
                paramData={slug}
                submitFormHandel={handelUpdate}
              />
            </div>

            <div className={styles.formcard_wrapper}>
              <ChipCard
                apiData={singleBlogApi.blogTags}
                submitFormHandel={handelTagUpdate}
                paramData={slug}
              />
            </div>

            <div className={styles.formcard_wrapper}>
              <FormCard
                cardTitle="Categories"
                inputData={blogCategories}
                apiData={singleBlogApi}
                dynimicData={allBlogCategories}
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
