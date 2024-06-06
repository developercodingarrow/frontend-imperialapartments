"use client";

import React, { useState } from "react";
import styles from "./forgotePassword.module.css";
import { ForgotPasswordInput } from "../../../JsonData/authFormFied";
import useCustomeAuthForm from "../../../custome-hooks/useCustomeAuthForm";
import SubmitBtn from "../../../static-utils/elements/buttons/Button";
import { forgotPassword } from "../../../Actions/authAction";
import { useRouter } from "next/navigation";

export default function ForgotPassword() {
  const [loading, setloading] = useState(false);
  const router = useRouter();
  const { renderInput, handleSubmit, updatedInputs, isValid, errors } =
    useCustomeAuthForm(ForgotPasswordInput, "Forgot_Pass");

  console.log(isValid);

  const handleForm = async (data) => {
    try {
      setloading(true);
      console.log("click");
      const res = await forgotPassword(data);
      console.log(res);
      if (res.data.status === "success") {
        router.push(`/new-password/${res.data.resetToken}`);
      }
      setloading(false);
    } catch (error) {
      console.log(error);
      setloading(false);
    }
  };

  return (
    <div className={styles.form_mainContainer}>
      <div className={styles.form_container}>
        <h2 className="bottom_margin">Find Your Account </h2>
        <h4 className="bottom_margin">
          Please enter your email address to search for your account..{" "}
        </h4>
        <div style={{ marginBottom: "20px" }}>
          <form onSubmit={handleSubmit(handleForm)}>
            <div>
              {updatedInputs.map((input) => {
                return <div key={input.id}>{renderInput(input)}</div>;
              })}
            </div>
            <div>
              <SubmitBtn
                btnText="Send Email"
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
