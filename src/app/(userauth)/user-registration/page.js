"use client";

import React from "react";
import styles from "./registerfrom.module.css";
import useCustomeAuthForm from "../../../custome-hooks/useCustomeAuthForm";
import { signUpInputs } from "../../../JsonData/authFormFied";
import Button from "../../../static-utils/elements/buttons/Button";
import Image from "next/image";
import googleIcon from "../../../../public/web-statice-img/google-logo-icon-png-transparent-background.png";
import facbookLogo from "../../../../public/web-statice-img/Facebook-logo.png";

export default function UserRegistraionPage() {
  const { renderInput, handleSubmit, updatedInputs } = useCustomeAuthForm(
    signUpInputs,
    "SINGUP"
  );

  const handleForm = () => {
    alert("form submit");
  };

  console.log(updatedInputs);
  return (
    <div className={styles.form_mainContainer}>
      <div className={styles.form_container}>
        <h2 className="bottom_margin">create an account </h2>
        <h4 className="bottom_margin">Welcome to imperial apartments. </h4>
        <div style={{ marginBottom: "20px" }}>
          <form onSubmit={handleSubmit(handleForm)}>
            <div>
              {updatedInputs.map((input) => {
                return <div key={input.id}>{renderInput(input)}</div>;
              })}
            </div>
            <div>
              <Button btnText="Register" />
            </div>
          </form>
        </div>
        <div>
          <div className={styles.border_lineBox}>
            <span className={styles.border_line}></span> <span>OR</span>
            <span className={styles.border_line}></span>
          </div>

          <div className={styles.social_login_wrapper}>
            <div className={styles.social_iconsBox}>
              <Image
                src={googleIcon}
                width={500}
                height={500}
                className={styles.socialIcon_imageStyle}
              />
            </div>

            <div className={styles.social_iconsBox}>
              <Image
                src={facbookLogo}
                width={500}
                height={500}
                className={styles.socialIcon_imageStyle}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
