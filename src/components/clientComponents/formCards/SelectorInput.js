"use client";
import React, { useState, useEffect, useRef } from "react";
import styles from "./css/selectorInput.module.css";
import { IoIosArrowDown } from "../../ApplicationIcon";

export default function SelectorInput(props) {
  const { lable, selectorOptions, defaultSelected } = props;
  const [toggleSelectorList, settoggleSelectorList] = useState(true);
  const [selectedOption, setSelectedOption] = useState(defaultSelected);
  const wrapperRef = useRef(null);

  const handelSelectorList = () => {
    settoggleSelectorList(!toggleSelectorList);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    settoggleSelectorList(false);
  };

  const handleClickOutside = (event) => {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
      settoggleSelectorList(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={styles.selector_container} ref={wrapperRef}>
      {lable && (
        <div className={styles.label_wrapper}>
          <label htmlFor="custom-select">{lable}</label>
        </div>
      )}

      <div
        className={styles.input_wrapper}
        onClick={handelSelectorList}
        role="button"
        tabIndex={0}
        aria-expanded={toggleSelectorList}
      >
        <input
          id="custom-select"
          className={styles.selector_input}
          value={selectedOption}
          readOnly
        />
        <span className={styles.selector_icon}>
          <IoIosArrowDown />
        </span>

        {toggleSelectorList && (
          <div className={styles.selector_listBox}>
            <ul>
              {selectorOptions.map((option, index) => (
                <li
                  key={index}
                  className={styles.selector_list}
                  onClick={() => handleOptionClick(option)}
                  role="option"
                  aria-selected={selectedOption === option}
                >
                  {option}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
