"use client";
import React from "react";
import styles from "./css/formcard.module.css";
import CardInput from "./CardInput";
import useCustomeFormCard from "../../../custome-hooks/useCustomeFormCard";
import CardBtn from "./CardBtn";
import FormCardLayout from "./FormCardLayout";
import { useCustomApiForm } from "../../../custome-hooks/useCutomeApiform";
import { blogApiData } from "../../../JsonData/projectdata";

export default function FormCard(props) {
  const { cardTitle, inputData, dynimicData } = props;
  const { handleSubmit, formState, control, watch, setValue, renderInput } =
    useCustomApiForm(blogApiData);
  return (
    <FormCardLayout cardTitle={cardTitle}>
      {inputData.map((input) => {
        return <div key={input.id}>{renderInput(input, dynimicData)}</div>;
      })}

      <div className={styles.component_wrapper}>
        <CardBtn btnText="Save" />
      </div>
    </FormCardLayout>
  );
}
