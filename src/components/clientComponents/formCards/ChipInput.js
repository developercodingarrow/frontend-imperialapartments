"use client";

import { useContext, useEffect, useState } from "react";
import styles from "./css/chipInput.module.css";
import { AppContext } from "../../../contextApi/AppContextApi";

export default function ChipInput(props) {
  const { chipoptions } = props;
  const { chips, setChips } = useContext(AppContext);
  let extractName;
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(true);

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

  useEffect(() => {
    if (chipoptions) {
      extractName = chipoptions.map((items) => items.tagName);
      setChips(extractName);
      setIsLoading(false);
    }
  }, [chipoptions]);

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
