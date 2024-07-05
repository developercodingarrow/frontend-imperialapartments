"use client";
import React, { useContext, useEffect, useRef, useState } from "react";
import styles from "../editor.module.css";
import AdminDashBordLayout from "../../../../../../components/clientComponents/layouts/AdminDashBordLayout";
import PageHeader from "../../../../../../components/clientComponents/layouts/pageHeader";
import TextEditorReactQuill from "../../../../../../components/clientComponents/editors/TextEditorReactQuill";
import { BlogContext } from "../../../../../../contextApi/BlogContextApi";

export default function Editorpage() {
  const { handelUpdate } = useContext(BlogContext);

  return (
    <AdminDashBordLayout>
      <PageHeader />
      <div className={styles.editor_wrapper}>
        <div>
          <TextEditorReactQuill editionHandel={handelUpdate} />
        </div>
      </div>
    </AdminDashBordLayout>
  );
}
