"use client";
import React, { useContext } from "react";
import styles from "./css/interactiveFaqCard.module.css";
import ToggleArrow from "./ToggleArrow";
import FaqCard from "../../SSRcomponents/homecomponent/FaqCard";
import { AppContext } from "../../../contextApi/AppContextApi";

export default function InteractiveFaqCard(props) {
  const { faqs } = props;
  const { handelToggleArrow, toggleArrow, settoggleArrow } =
    useContext(AppContext);
  console.log("intractive component");
  return (
    <div className={styles.container}>
      <div className={styles.heading_wrapper}>
        <h2>service apartments FAQ</h2>
        <div className={styles.togle_iconBox}>
          <ToggleArrow />
        </div>
      </div>
      <div
        className={`${
          toggleArrow ? styles.faq_content : styles.hide_faq_content
        }`}
      >
        <FaqCard faqs={faqs} />
      </div>
    </div>
  );
}
