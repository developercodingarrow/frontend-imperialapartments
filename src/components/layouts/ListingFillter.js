"use client";
import React from "react";
import styles from "./css/listingfillter.module.css";
import {
  RoomTypes,
  Neighbourhood,
  Roomfacilities,
} from "../../JsonData/fillterOptions";
import CheckBoxFillter from "../clientComponents/listingfillterElements/CheckBoxFillter";
import useFillterUrlUpdater from "../../custome-hooks/useFillterUrlUpdater";
import PriceSlider from "../clientComponents/listingfillterElements/PriceSlider";

export default function ListingFillter(props) {
  const { fillterTitle, fillterOptions } = props;
  const {
    selectedRoom,
    handleRoomChange,
    handleSliderChange,
    normalizedPrice,
  } = useFillterUrlUpdater();
  return (
    <div className={styles.fillter_container}>
      <div className={styles.fillter_header}>
        <div>Fillter</div>
        <div>Clear</div>
      </div>
      <div className={styles.fillter_section}>
        <div className={styles.section_hedaing}>{fillterTitle}</div>
        <div className={styles.fillter_options_wrapper}>
          <PriceSlider
            handleSliderChange={handleSliderChange}
            normalizedPrice={normalizedPrice}
          />
        </div>
      </div>
      <div className={styles.fillter_section}>
        <div className={styles.section_hedaing}>{fillterTitle}</div>
        <div className={styles.fillter_options_wrapper}>
          <CheckBoxFillter
            options={fillterOptions}
            checkedItems={selectedRoom}
            onCheckboxChange={handleRoomChange}
          />
        </div>
      </div>
    </div>
  );
}
