"use client";
import React from "react";
import styles from "./css/formcard.module.css";
import useCustomeFormCard from "../../../custome-hooks/useCustomeFormCard";
import CardBtn from "./CardBtn";
import FormCardLayout from "./FormCardLayout";
import { useCustomApiForm } from "../../../custome-hooks/useCutomeApiform";
import { blogApiData } from "../../../JsonData/projectdata";

export default function FormCard(props) {
  const {
    cardTitle,
    inputData,
    dynimicData,
    submitFormHandel,
    apiData,
    paramData,
  } = props;
  const {
    handleSubmit,
    formState,
    control,
    watch,
    setValue,
    renderInput,
    isValid,
  } = useCustomApiForm(apiData);

  const handleForm = async (data) => {
    try {
      console.log(data);
      const res = (await paramData)
        ? submitFormHandel(paramData, data)
        : submitFormHandel(data);
      console.log(res);
      if (res.data.status === "success") {
        console.log("sucess");
      } else if (res.data.status === "Error") {
        console.log(res.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <FormCardLayout cardTitle={cardTitle}>
      <form onSubmit={handleSubmit(handleForm)}>
        {inputData.map((input) => {
          return <div key={input.id}>{renderInput(input, dynimicData)}</div>;
        })}

        <div className={styles.component_wrapper}>
          <CardBtn btnText="Create" disabled={!isValid} />
        </div>
      </form>
    </FormCardLayout>
  );
}
