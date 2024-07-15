"use client";
import { useState } from "react";
import { usePathname, useParams } from "next/navigation";
import styles from "./css/accordionform.module.css";
import { updateOneProjectFAQ } from "../../../Actions/projectAction";

const AccordionForm = () => {
  const params = useParams();
  const { slug } = params;
  const [accordions, setAccordions] = useState([{ question: "", answer: "" }]);

  const handleInputChange = (index, event) => {
    const newAccordions = accordions.map((accordion, i) => {
      if (i === index) {
        return { ...accordion, [event.target.name]: event.target.value };
      }
      return accordion;
    });
    setAccordions(newAccordions);
  };

  const addAccordion = () => {
    setAccordions([...accordions, { question: "", answer: "" }]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      console.log(accordions);

      const res = await updateOneProjectFAQ(slug, accordions);
      console.log(res);
    } catch (error) {
      console.log(error);
    }

    // You can now send 'accordions' to your server or handle it as needed
  };

  return (
    <div className={styles.main_container}>
      <form onSubmit={handleSubmit}>
        <div className={styles.input_wrapper}>
          {accordions.map((accordion, index) => (
            <div key={index} className={styles.accordionformitem}>
              <input
                type="text"
                name="question"
                value={accordion.question}
                onChange={(event) => handleInputChange(index, event)}
                placeholder="Accordion Question"
                className={styles.input_style}
                required
              />

              <textarea
                name="answer"
                value={accordion.answer}
                onChange={(event) => handleInputChange(index, event)}
                placeholder="Accordion answer"
                className={styles.textArea_style}
                required
              />
            </div>
          ))}
        </div>

        <div className={styles.btn_wrapper}>
          <button
            type="button"
            onClick={addAccordion}
            className={styles.btn_style}
          >
            Add
          </button>
          <button className={styles.btn_style} type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AccordionForm;
