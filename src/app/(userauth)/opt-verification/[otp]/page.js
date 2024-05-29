"use client";

import React from "react";
import styles from "./optverification.module.css";
import useCustomeAuthForm from "../../../../custome-hooks/useCustomeAuthForm";
import { otpVerifation } from "../../../../JsonData/authFormFied";
import Button from "../../../../static-utils/elements/buttons/Button";

export default function page() {
  const { renderInput, handleSubmit, updatedInputs } = useCustomeAuthForm(
    otpVerifation,
    "OTP"
  );

  const handleForm = () => {
    alert("form submit");
  };
  return (
    <div className={styles.form_mainContainer}>
      <div className={styles.form_container}>
        <h2 className="bottom_margin">Enter your OTP </h2>
        <h4 className="bottom_margin">your otp sent to your gmail address </h4>
        <div style={{ marginBottom: "20px" }}>
          <form onSubmit={handleSubmit(handleForm)}>
            <div>
              {updatedInputs.map((input) => {
                return <div key={input.id}>{renderInput(input)}</div>;
              })}
            </div>
            <div>
              <Button btnText="OTP" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
