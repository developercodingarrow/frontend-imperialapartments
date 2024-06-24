"use client";
import React, { useState } from "react";
import styles from "./css/tableActionpoint.module.css";
import {
  IoIosArrowRoundUp,
  IoIosArrowRoundDown,
  LiaRupeeSignSolid,
  IoEye,
  RxDotsVertical,
} from "../../ApplicationIcon";

export default function TableActionPoint(props) {
  const { handlers, itemId } = props;
  const [actionPopUp, setactionPopUp] = useState(false);

  console.log(handlers);
  const handelAction = () => {
    setactionPopUp(!actionPopUp);
  };

  console.log(handlers);

  const handleAction = (action) => {
    if (handlers[action]) {
      handlers[action](itemId);
    }
  };

  return (
    <div className={styles.dot_iconBox}>
      <RxDotsVertical onClick={handelAction} />
      {actionPopUp && (
        <div className={styles.action_pop_Over}>
          <div
            className={styles.action_optionBox}
            onClick={() => handleAction("view")}
          >
            <span className={styles.action_icon}>
              <IoEye />
            </span>
            <span className={styles.action_text}>view</span>
          </div>
          <div className={styles.action_optionBox}>
            <span className={styles.action_icon}>
              <IoEye />
            </span>
            <span
              className={styles.action_text}
              onClick={() => handleAction("update")}
            >
              Edit
            </span>
          </div>

          <div className={styles.action_optionBox}>
            <span className={styles.action_icon}>
              <IoEye />
            </span>
            <span
              className={styles.action_text}
              onClick={() => handleAction("Delete")}
            >
              Delete
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
