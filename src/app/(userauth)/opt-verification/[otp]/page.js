"use client";

import React, { useState } from "react";
import styles from "./optverification.module.css";
import useCustomeAuthForm from "../../../../custome-hooks/useCustomeAuthForm";
import { otpVerifation } from "../../../../JsonData/authFormFied";
import SubmitBtn from "../../../../static-utils/elements/buttons/Button";
import { useParams } from "next/navigation";
import { otpVerfication } from "../../../../Actions/authAction";

export default function page() {
  const [loading, setloading] = useState(false);
  const params = useParams();
  const { otp } = params;
  const { renderInput, handleSubmit, updatedInputs, isValid, errors } =
    useCustomeAuthForm(otpVerifation, "OTP");

  const handleForm = async (data) => {
    try {
      setloading(true);
      const res = await otpVerfication(data, otp);
      console.log(res);
      setloading(false);
    } catch (error) {
      console.log(error);
      setloading(false);
    }
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
              <SubmitBtn
                btnText="OTP"
                disabled={!isValid}
                loadindData={loading}
                btn_style="btn_container"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
