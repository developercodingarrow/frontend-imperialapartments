"use client";

import React, { useState } from "react";
import styles from "./login.module.css";
import useCustomeAuthForm from "../../../custome-hooks/useCustomeAuthForm";
import { loginInputs } from "../../../JsonData/authFormFied";
import SubmitBtn from "../../../static-utils/elements/buttons/Button";
import Image from "next/image";
import googleIcon from "../../../../public/web-statice-img/google-logo-icon-png-transparent-background.png";
import facbookLogo from "../../../../public/web-statice-img/Facebook-logo.png";
import Link from "next/link";
import AuthFormFooter from "../../../components/authfrom/AuthFormFooter";

export default function LoginPage() {
  const [loading, setloading] = useState(false);
  const { renderInput, handleSubmit, updatedInputs, isValid, errors } =
    useCustomeAuthForm(loginInputs, "Login");

  const handleForm = () => {
    setloading(true);
    alert("form submit");
  };
  return (
    <div className={styles.form_mainContainer}>
      <div className={styles.form_container}>
        <h2 className="bottom_margin">Login Now </h2>
        <h4 className="bottom_margin">Welcome to imperial apartments. </h4>
        <div style={{ marginBottom: "20px" }}>
          <form onSubmit={handleSubmit(handleForm)}>
            <div>
              {updatedInputs.map((input) => {
                return <div key={input.id}>{renderInput(input)}</div>;
              })}
            </div>
            <div>
              <SubmitBtn btnText="Login" />
            </div>
          </form>
        </div>

        <AuthFormFooter
          linkInfo="Don't have an account yet ? "
          linkText="Sign Up"
          linkPath="user-registration"
        />
      </div>
    </div>
  );
}
