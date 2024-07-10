"use client";
import React, { useContext, useEffect, useState } from "react";
import FormCard from "../formCards/FormCard";
import { usePathname, useParams } from "next/navigation";
import { projectInfoForm } from "../../../JsonData/projectdata";
import { ProjectContext } from "../../../contextApi/ProjectContextApi";
import { RoomTypeContext } from "../../../contextApi/RoomTypeContextApi";

export default function BasicInfo() {
  const params = useParams();
  const { slug } = params;
  const {
    handelUpdate,
    singleProjectApi,
    handelGetSingleProject,
    loading,
    setLoading,
  } = useContext(ProjectContext);

  const { allRoomTypes } = useContext(RoomTypeContext);

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

  if (loading) {
    return <div>Loading...</div>;
  }

  console.log("all room type", allRoomTypes);

  const roomtypeData = [
    {
      roomTypes: "service apartmnet",
    },
    {
      roomTypes: "hotel",
    },
  ];

  return (
    <div>
      <FormCard
        cardTitle="Info"
        paramData={slug}
        apiData={singleProjectApi}
        inputData={projectInfoForm}
        submitFormHandel={handelUpdate}
        dynimicData={allRoomTypes}
      />
    </div>
  );
}
