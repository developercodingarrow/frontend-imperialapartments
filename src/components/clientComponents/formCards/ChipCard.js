"use client";
import React from "react";
import FormCardLayout from "./FormCardLayout";
import ChipInput from "./ChipInput";
import styles from "./css/formcard.module.css";
import CardBtn from "./CardBtn";

export default function ChipCard(props) {
  const { cardTitle } = props;
  return (
    <FormCardLayout cardTitle={cardTitle}>
      <ChipInput />
      <div className={styles.component_wrapper}>
        <CardBtn btnText="Save" />
      </div>
    </FormCardLayout>
  );
}
