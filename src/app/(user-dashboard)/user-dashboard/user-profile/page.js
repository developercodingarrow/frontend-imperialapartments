import React from "react";
import styles from "./userprofile.module.css";
import Image from "next/image";
import userImg from "../../../../../public/web-statice-img/dummy-user-image.jpg";
import FormCard from "../../../../components/forms/FormCard";
import { apidata, userNameInputs } from "../../../../JsonData/userformfield";
import { loginInputs } from "../../../../JsonData/authFormFied";
import UserImageForm from "../../../../components/forms/UserImageForm";
import { UpdateUserName } from "../../../../Actions/userAction";

export default function UserProfile() {
  return (
    <div className={styles.page_container}>
      <div className={styles.page_titleBox}>User Profile</div>
      <div className={styles.user_profileContainer}>
        <div className={styles.profile_card}>
          <div className={styles.user_image_container}>
            <div className={styles.user_imageWrapper}>
              <Image
                src={userImg}
                width={100}
                className={styles.user_imgStyle}
              />
            </div>
          </div>
          <div className={styles.user_infoBox}>
            <div className={styles.user_nameBox}>John mathew</div>
            <div className={styles.user_email}>johnmethew@gmail.com</div>
          </div>
          <div className={styles.seprator}></div>
        </div>
        <div className={styles.form_cardWrapper}>
          <FormCard
            formTitle="Upadte Profile"
            customeInputes={userNameInputs}
            inputApiDetails={apidata}
            apiAction={UpdateUserName}
          />
        </div>

        <div className={styles.form_cardWrapper}>
          <UserImageForm />
        </div>
      </div>
    </div>
  );
}
