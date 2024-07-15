import React from "react";
import styles from "./css/faqcard.module.css";
import ToggleArrow from "../../clientComponents/elements/ToggleArrow";

export default function FaqCard(props) {
  const { faqs } = props;

  return (
    <div className={styles.faq_content_wrapper}>
      {faqs.map((el, index) => {
        return (
          <div className={styles.qna_box}>
            <div className={styles.question_box}>
              <div className={styles.faq_icon}>Q</div>
              <h3>{el.question}</h3>
            </div>
            <div className={styles.answear_box}>
              <div className={styles.faq_icon}>A</div>
              <div>
                <p className="content_sm_text">{el.answear}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
