"use client";
import React from "react";
import TextEditorReactQuill from "../editors/TextEditorReactQuill";

export default function ProjectOverView() {
  const handelSubmit = () => {
    alert("over virew");
  };

  return (
    <div>
      <TextEditorReactQuill editionHandel={handelSubmit} />
    </div>
  );
}
