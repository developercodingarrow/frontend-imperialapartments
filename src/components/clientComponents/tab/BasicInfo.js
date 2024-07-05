"use client";
import React from "react";
import FormCard from "../formCards/FormCard";
import { usePathname, useParams } from "next/navigation";
import { projectInfoForm } from "../../../JsonData/projectdata";

export default function BasicInfo() {
  const params = useParams();
  const { slug } = params;

  const handelFormSubmit = () => {
    alert("over view info");
  };

  return (
    <div>
      <FormCard
        cardTitle="Info"
        paramData={slug}
        apiData={""}
        inputData={projectInfoForm}
        submitFormHandel={handelFormSubmit}
      />
    </div>
  );
}
