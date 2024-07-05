"use client";
import { useState } from "react";
import styles from "./css/accordion.module.css";

const AccordionItem = (props) => {
  const { items } = props;
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={styles.accordion}>
      {items.map((item, index) => (
        <div key={index} className={styles.accordionitem}>
          <div
            className={styles.accordionheader}
            onClick={() => toggleAccordion(index)}
          >
            <h2>{item.title}</h2>
            <span>{openIndex === index ? "-" : "+"}</span>
          </div>
          {openIndex === index && (
            <div className={styles.accordionContent}>{item.content}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default AccordionItem;
