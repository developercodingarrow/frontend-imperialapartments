"use client";
import React, { useState } from "react";
import styles from "./formcard.module.css";
import useCustomeForm from "../../custome-hooks/useCustomeForm";
import SubmitBtn from "../../static-utils/elements/buttons/Button";

export default function FormCard(props) {
  const [loading, setloading] = useState(false);
  const { formTitle, customeInputes, inputApiDetails, apiAction } = props;
  const {
    handleSubmit,
    formState, // Ensure formState is included in the returned object
    control,
    watch,
    setValue,
    renderInput,
    isValid,
    errors,
  } = useCustomeForm(customeInputes, inputApiDetails);

  const handleForm = async (data) => {
    setloading(true);
    try {
      const res = await apiAction(data);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className={styles.form_title}>{formTitle}</div>
      <div className={styles.form_inputCard}>
        <form onSubmit={handleSubmit(handleForm)}>
          {customeInputes.map((input, i) => {
            return (
              <div>
                {renderInput(input)};
                {errors[input.name] && (
                  <p className={"error_Msg"}>{errors[input.name].message}</p>
                )}
              </div>
            );
          })}
          <div className={styles.btn_wrapper}>
            <SubmitBtn
              btnText="Upadte Name"
              disabled={!isValid}
              loadindData={loading}
              btn_style="smallBtn"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
