"use client";

import React, { useContext } from "react";
import styles from "./css/sideform.module.css";
import { IoIosCall, IoMdMailOpen } from "../ApplicationIcon";
import { sideformFiled } from "../../JsonData/userformfield";
import useCustomeSimpleForm from "../../custome-hooks/useCustomeSimpleForm";
import FormBtn from "../../static-utils/elements/buttons/FormBtn";
import { EnquireContext } from "../../contextApi/enquireContextApi";
import { createEnquire } from "../../Actions/enquireAction";

export default function SideForm() {
  const { handleSubmit, formState, control, watch, setValue, renderInput } =
    useCustomeSimpleForm();

  const handleForm = async (data) => {
    try {
      const res = await createEnquire(data);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.form_container}>
      <div className={styles.form_header}>
        <div className={styles.form_title}>Online Booking Information</div>
        <div className={styles.contact_detailBox}>
          <div className={styles.contact_deatail}>
            <span>
              {" "}
              <IoIosCall />
            </span>
            <span>+91-9958200285 </span>
          </div>

          <div className={styles.contact_deatail}>
            <span>
              {" "}
              <IoMdMailOpen />
            </span>
            <span>sales@imperialapartments.in </span>
          </div>
        </div>
      </div>
      <div>
        <form onSubmit={handleSubmit(handleForm)}>
          <div className={styles.input_container}>
            {sideformFiled.map((input) => {
              return <div key={input.id}>{renderInput(input)}</div>;
            })}
          </div>
          <div className={styles.form_btn_Wrapper}>
            <FormBtn btnText="Call Back Request" />
          </div>
        </form>
      </div>
    </div>
  );
}
