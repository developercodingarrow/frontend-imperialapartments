"use client";

import { useEffect, useState } from "react";
import styles from "./css/chipInput.module.css";

export default function ChipInput(props) {
  const { chipoptions } = props;

  const [inputValue, setInputValue] = useState("");
  const [chips, setChips] = useState(chipoptions);

  const handleChipRemove = (index) => {
    const updatedChips = [...chips];
    updatedChips.splice(index, 1);
    setChips(updatedChips);
  };

  const handleInputKeyDown = (e) => {
    if (e.key === "Enter" && inputValue.trim() !== "") {
      e.preventDefault();
      setChips([...chips, inputValue.trim()]);
      setInputValue("");
    }
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  return (
    <div className={styles.inputContainer}>
      {chips?.map((chip, index) => {
        return (
          <div key={index} className={styles.chip}>
            {chip}
            <span
              className={styles.removeIcon}
              onClick={() => handleChipRemove(index)}
            >
              &#10006;
            </span>
          </div>
        );
      })}

      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleInputKeyDown}
        placeholder="Type and press Enter"
        className={styles.input}
      />
    </div>
  );
}
