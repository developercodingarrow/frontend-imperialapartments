import React, { useState } from "react";
import styles from "./css/twoColumnLayout.module.css";
import DashBordListTable from "../DashBordListTable";
import FormCard from "../formCards/FormCard";
import EditModel from "../models/EditModel";

export default function TwoColumLayOut(props) {
  const {
    tablecolums,
    tableData,
    deleteHandel,
    edithandel,
    checkboxhandler,
    sideFormFiled,
    formHandel,
    dataloading,
  } = props;

  return (
    <div className={styles.container}>
      <div className={styles.table_side}>
        <DashBordListTable
          tableColumns={tablecolums}
          tableSampleData={tableData}
          handelSingleDelete={deleteHandel}
          handelSingleEdit={edithandel}
          handleCheckboxChange={checkboxhandler}
          dataloading={dataloading}
        />
      </div>
      <div className={styles.form_side}>
        <div className={styles.form_side_innerContainer}>
          <FormCard
            cardTitle="Craete Categorie"
            inputData={sideFormFiled}
            submitFormHandel={formHandel}
          />
        </div>
      </div>
    </div>
  );
}
