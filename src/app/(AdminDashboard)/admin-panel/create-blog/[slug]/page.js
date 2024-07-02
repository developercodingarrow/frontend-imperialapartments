"use client";
import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
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
import CheckBoxCard from "../../../../../components/clientComponents/formCards/CheckBoxCard";
import { ImagesContext } from "../../../../../contextApi/ImageHandlersContextApi";
import { getLoginCookies, isAuth } from "../../../../../Actions/authAction";
import { UploadBlogImag } from "../../../../../Actions/blogAction";
import { genericSingleImageHandler } from "../../../../../generichandler/genericImagehandlers";

export default function BlogCreatePage() {
  const authToken = getLoginCookies();
  console.log(authToken);
  const params = useParams();
  const { slug } = params;
  const {
    handelGetSingleBlog,
    singleBlogApi,
    handelUpdate,
    handelTagUpdate,
    handelCategoreUpdate,
  } = useContext(BlogContext);
  const { handelUploadBlogThumblin } = useContext(ImagesContext);
  const { allBlogCategories } = useContext(BlogCategoriesContext);

  console.log(slug);

  useEffect(() => {
    handelGetSingleBlog(slug);
  }, [slug]);

  return (
    <AdminDashBordLayout>
      <PageHeader />
      <ImageUplodModel
        uploadHandler={handelUploadBlogThumblin}
        imageFor="blogThumblin"
        dataFor={slug}
      />

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
                cardTitle="Tags"
                apiData={singleBlogApi.blogTags}
                submitFormHandel={handelTagUpdate}
                paramData={slug}
              />
            </div>
            <div className={styles.formcard_wrapper}>
              <CheckBoxCard
                cardTitle="Categories"
                elementFor="categoryName"
                inputData={allBlogCategories}
                apiData={singleBlogApi.blogCategories}
                paramData={slug}
                submitFormHandel={handelCategoreUpdate}
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
