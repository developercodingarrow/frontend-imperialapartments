import React from "react";
import styles from "./css/twoColumnLayout.module.css";
import DashBordListTable from "../DashBordListTable";
import FormCard from "../formCards/FormCard";

export default function TwoColumLayOut(props) {
  const {
    tablecolums,
    tableData,
    deleteHandel,
    edithandel,
    checkboxhandler,
    sideFormFiled,
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
        />
      </div>
      <div className={styles.form_side}>
        <div className={styles.form_side_innerContainer}>
          <FormCard cardTitle="Craete Categorie" inputData={sideFormFiled} />
        </div>
      </div>
    </div>
  );
}
