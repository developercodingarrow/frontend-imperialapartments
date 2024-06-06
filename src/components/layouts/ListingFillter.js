import React from "react";
import styles from "./css/listingfillter.module.css";
import {
  RoomTypes,
  Neighbourhood,
  Roomfacilities,
} from "../../JsonData/fillterOptions";

export default function ListingFillter() {
  return (
    <div className={styles.fillter_container}>
      <div className={styles.fillter_header}>
        <div>Fillter</div>
        <div>Clear</div>
      </div>
      <div className={styles.fillter_section}>
        <div className={styles.section_hedaing}>Rooms type</div>
        <div className={styles.fillter_options_wrapper}>
          {RoomTypes.map((el, i) => {
            return (
              <div className={styles.fillter_optionsBox}>
                <div>
                  <input type="checkbox" />
                </div>
                <div>{el.name}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
