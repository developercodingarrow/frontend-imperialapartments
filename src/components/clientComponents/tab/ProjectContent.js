"use client";
import React from "react";
import TextEditorReactQuill from "../editors/TextEditorReactQuill";

export default function ProjectContent() {
  const handelSubmit = () => {
    alert("Project content");
  };

  return (
    <div>
      <TextEditorReactQuill editionHandel={handelSubmit} />
    </div>
  );
}
