"use client";
import React from "react";
import styles from "./css/pageactionHeader.module.css";
import DynimicBtn from "../btns/DynimicBtn";

export default function PageActionHeader() {
  const handelAddBlog = () => {
    alert("ok");
  };

  return (
    <div className={styles.container}>
      <DynimicBtn btnTxt="Create Blog" btnHandel={handelAddBlog} />
    </div>
  );
}
