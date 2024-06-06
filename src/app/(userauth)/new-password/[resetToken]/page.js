"use client";

import React, { useState } from "react";
import styles from "./new_password.module.css";
import { newPasswordInputs } from "../../../../JsonData/authFormFied";
import useCustomeAuthForm from "../../../../custome-hooks/useCustomeAuthForm";
import SubmitBtn from "../../../../static-utils/elements/buttons/Button";
import { useParams } from "next/navigation";
import { resetPassword } from "../../../../Actions/authAction";

export default function NewPasswor() {
  const [loading, setloading] = useState(false);
  const params = useParams();
  const { resetToken } = params;
  const { renderInput, handleSubmit, updatedInputs, isValid, errors } =
    useCustomeAuthForm(newPasswordInputs, "RESETPASSWORD");

  const handleForm = async (data) => {
    try {
      const res = await resetPassword(data, resetToken);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className={styles.form_mainContainer}>
      <div className={styles.form_container}>
        <h2 className="bottom_margin">Create Your New Password </h2>
        <h4 className="bottom_margin">Please enter your new password </h4>
        <div style={{ marginBottom: "20px" }}>
          <form onSubmit={handleSubmit(handleForm)}>
            <div>
              {updatedInputs.map((input) => (
                <div key={input.id}>
                  {renderInput(input)}
                  {errors[input.name] && (
                    <span className={"input_error"}>
                      {errors[input.name].message}
                    </span>
                  )}
                </div>
              ))}
            </div>
            <div>
              <SubmitBtn
                btnText="Create New Password"
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
