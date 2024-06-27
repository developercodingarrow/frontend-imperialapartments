import React from "react";
import styles from "./css/twoColumnLayout.module.css";
import DashBordListTable from "../DashBordListTable";

export default function TwoColumLayOut(props) {
  const { tablecolums, tableData, deleteHandel, checkboxhandler } = props;

  return (
    <div className={styles.container}>
      <div className={styles.table_side}>
        <DashBordListTable
          tableColumns={tablecolums}
          tableSampleData={tableData}
          handelSingleDelete={deleteHandel}
          handleCheckboxChange={checkboxhandler}
        />
      </div>
      <div className={styles.form_side}>Form Container</div>
    </div>
  );
}
