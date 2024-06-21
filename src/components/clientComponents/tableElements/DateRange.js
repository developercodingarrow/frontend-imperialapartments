"use client";
import React, { useState } from "react";
import styles from "./css/dateRangePicker.module.css";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import { compareAsc, format } from "date-fns";

export default function DateRange() {
  const [toggleClender, settoggleClender] = useState(false);
  const [date, setdate] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });

  console.log(date);

  const handelChnage = (ranges) => {
    console.log(ranges.selection.startDate);
    setdate(ranges.selection);
  };

  const handelToggleCender = () => {
    settoggleClender(!toggleClender);
  };
  return (
    <div className={styles.date_range_container}>
      <span className={styles.calender_btn} onClick={handelToggleCender}>
        start date - End date
      </span>
      {toggleClender && (
        <div className={styles.date_rangeBox}>
          <DateRangePicker
            onChange={handelChnage}
            ranges={[date]}
            // direction="horizontal"
            // showSelectionPreview={true}
            // moveRangeOnFirstSelection={false}
            // months={2}
          />
        </div>
      )}
    </div>
  );
}
