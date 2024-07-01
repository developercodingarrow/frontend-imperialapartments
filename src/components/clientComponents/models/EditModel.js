import React from "react";
import styles from "./css/editModel.module.css";
import FormCard from "../formCards/FormCard";
import { IoCloseSharp } from "../../ApplicationIcon";
export default function EditModel(props) {
  const { sideFormFiled, formHandel, modeldata, handelColseModel } = props;
  return (
    <div className={styles.container}>
      <div className={styles.model_container}>
        <div className={styles.model_close_Bar}>
          <div className={styles.model_closeIcon} onClick={handelColseModel}>
            <IoCloseSharp />
          </div>
        </div>
        <div>
          <FormCard
            cardTitle="Update Categories"
            inputData={sideFormFiled}
            submitFormHandel={formHandel}
            apiData={modeldata}
          />
        </div>
      </div>
    </div>
  );
}
