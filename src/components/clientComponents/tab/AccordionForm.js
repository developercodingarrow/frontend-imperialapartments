"use client";
import { useState } from "react";
import styles from "./css/accordionform.module.css";

const AccordionForm = () => {
  const [accordions, setAccordions] = useState([{ title: "", content: "" }]);

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
    setAccordions([...accordions, { title: "", content: "" }]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(accordions);
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
                name="title"
                value={accordion.title}
                onChange={(event) => handleInputChange(index, event)}
                placeholder="Accordion Title"
                required
              />
              <textarea
                name="content"
                value={accordion.content}
                onChange={(event) => handleInputChange(index, event)}
                placeholder="Accordion Content"
                required
              />
            </div>
          ))}
        </div>

        <div className={styles.btn_wrapper}>
          <button
            type="button"
            className={styles.button}
            onClick={addAccordion}
          >
            Add
          </button>
          <button className={styles.button} type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AccordionForm;
