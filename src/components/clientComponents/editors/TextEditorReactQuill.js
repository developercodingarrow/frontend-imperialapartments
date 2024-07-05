"use client";
import React, { useContext, useState } from "react";
import { usePathname, useParams } from "next/navigation";
import dynamic from "next/dynamic"; // If using Next.js
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";
import {
  CreateEditorModules,
  CreateEditorformats,
} from "../../../JsonData/editorData";

export default function TextEditorReactQuill(props) {
  const { editionHandel } = props;
  const params = useParams();
  const { slug } = params;
  const [editorValue, seteditorValue] = useState("");

  const handelEditorOnChange = (e) => {
    seteditorValue(e);
  };

  const handelSubmit = async (e) => {
    try {
      const objData = {
        data: editorValue,
      };
      e.preventDefault();
      const res = await editionHandel(slug, objData);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
    console.log(editorValue);
  };
  return (
    <div>
      <form onSubmit={handelSubmit}>
        <div>
          <ReactQuill
            theme="snow"
            modules={CreateEditorModules}
            formats={CreateEditorformats}
            value={editorValue}
            onChange={handelEditorOnChange}
            className={""}
          />
        </div>
        <div>
          <button type="submit"> Save</button>
        </div>
      </form>
    </div>
  );
}
