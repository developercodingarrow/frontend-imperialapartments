"use client";

import { useContext, useEffect, useState } from "react";
import styles from "./css/formcard.module.css";
import FormCardLayout from "./FormCardLayout";
import CheckBoxInput from "./CheckBoxInput";
import CardBtn from "./CardBtn";
import { AppContext } from "../../../contextApi/AppContextApi";

export default function CheckBoxCard(props) {
  const {
    cardTitle,
    elementFor,
    inputData,
    apiData,
    submitFormHandel,
    paramData,
  } = props;
  const { checkedOptions } = useContext(AppContext);
  const handelSubmit = async (e) => {
    e.preventDefault();
    try {
      const objData = {
        category: checkedOptions,
      };
      const res = await submitFormHandel(paramData, objData);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <FormCardLayout cardTitle={cardTitle}>
      <form onSubmit={handelSubmit}>
        <CheckBoxInput
          inputLabel={cardTitle}
          checkBoxOptions={inputData}
          checkedOptionApi={apiData}
          checkBoxFor={elementFor}
        />
        <div className={styles.component_wrapper}>
          <CardBtn btnText="Save" />
        </div>
      </form>
    </FormCardLayout>
  );
}
