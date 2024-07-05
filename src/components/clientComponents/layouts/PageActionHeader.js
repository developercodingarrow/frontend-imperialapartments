"use client";
import React from "react";
import styles from "./css/pageactionHeader.module.css";
import DynimicBtn from "../btns/DynimicBtn";
import { useRouter } from "next/navigation";

export default function PageActionHeader(props) {
  const { btnhandler, btnText, redirectURL } = props;
  const router = useRouter();

  const handelAddBlog = async () => {
    try {
      const res = await btnhandler();
      if (res.data.status == "success") {
        console.log(res.data.result._id);
        router.push(`${redirectURL}/${res.data.result._id}`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.container}>
      <DynimicBtn btnTxt={btnText} btnHandel={handelAddBlog} />
    </div>
  );
}
