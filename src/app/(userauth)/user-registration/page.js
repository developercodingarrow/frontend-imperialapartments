"use client";

import React, { useState } from "react";
import styles from "./registerfrom.module.css";
import useCustomeAuthForm from "../../../custome-hooks/useCustomeAuthForm";
import { signUpInputs } from "../../../JsonData/authFormFied";
import SubmitBtn from "../../../static-utils/elements/buttons/Button";
import AuthFormFooter from "../../../components/authfrom/AuthFormFooter";
import { userRegister } from "../../../Actions/authAction";
import { useRouter } from "next/navigation";

export default function UserRegistraionPage() {
  const [loading, setloading] = useState(false);
  const router = useRouter();
  const { renderInput, handleSubmit, updatedInputs, isValid, errors } =
    useCustomeAuthForm(signUpInputs, "SINGUP");

  const handleForm = async (data) => {
    setloading(true);
    try {
      const res = await userRegister(data);
      console.log(res);
      if (res.data.status === "success") {
        router.push(`/opt-verification/${res.data.UrlToken}`);
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
        <h2 className="bottom_margin">create an account </h2>
        <h4 className="bottom_margin">Welcome to imperial apartments. </h4>
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
                btnText="Register"
                disabled={!isValid}
                loadindData={loading}
              />
            </div>
          </form>
        </div>

        <AuthFormFooter
          linkInfo="already have an account ? "
          linkText="Login"
          linkPath="login"
          btn_style="btn_container"
        />
      </div>
    </div>
  );
}
