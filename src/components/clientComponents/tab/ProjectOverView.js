"use client";
import React, { useContext, useEffect, useState } from "react";
import { usePathname, useParams } from "next/navigation";
import TextEditorReactQuill from "../editors/TextEditorReactQuill";
import { ProjectContext } from "../../../contextApi/ProjectContextApi";

export default function ProjectOverView() {
  const params = useParams();
  const { slug } = params;
  const {
    handelUpdate,
    singleProjectApi,
    handelGetSingleProject,
    loading,
    setLoading,
    projectOverview,
  } = useContext(ProjectContext);

  const handelGetData = async () => {
    try {
      const res = await handelGetSingleProject(slug);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handelGetData();
  }, [slug]);

  const handelSubmit = async (slug, objData) => {
    console.log("Submitted Data:", objData);

    const data = {
      overview: objData.data, // Correct data structure
    };

    try {
      const res = await handelUpdate(slug, data);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <TextEditorReactQuill
        editionHandel={handelSubmit}
        apiData={projectOverview}
      />
    </div>
  );
}
