"use client";
import { useContext, useEffect, useState } from "react";
import FormCardLayout from "./FormCardLayout";
import ChipInput from "./ChipInput";
import styles from "./css/formcard.module.css";
import CardBtn from "./CardBtn";
import { AppContext } from "../../../contextApi/AppContextApi";

export default function ChipCard(props) {
  const { chips, setChips } = useContext(AppContext);
  const { cardTitle, apiData, submitFormHandel, paramData } = props;

  const handelSubmit = async (e) => {
    e.preventDefault();
    try {
      const objData = {
        tagName: chips,
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
        <ChipInput chipoptions={apiData} />
        <div className={styles.component_wrapper}>
          <CardBtn btnText="Save" />
        </div>
      </form>
    </FormCardLayout>
  );
}
