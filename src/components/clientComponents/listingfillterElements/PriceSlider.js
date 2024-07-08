"use client";
import React, { useState } from "react";
import styles from "./css/priceslider.module.css";

export default function PriceSlider(props) {
  const { handleSliderChange, normalizedPrice, titel } = props;
  const [actualPrice, setActualPrice] = useState(0); // Change this to your actual price

  const getSliderLineStyle = () => {
    const normalizedPercentage = (normalizedPrice / 100) * actualPrice;
    return {
      background: `linear-gradient(to right, #ed6789 ${normalizedPercentage}%, var(--th-muted) ${normalizedPercentage}%)`,
    };
  };
  return (
    <div className={styles.price_sliderWrapper}>
      <div>{normalizedPrice}</div>
      <div>
        <input
          type="range"
          min="0"
          max="10000"
          value={normalizedPrice}
          onChange={handleSliderChange}
          className={styles.slider}
          style={getSliderLineStyle()}
        />
      </div>
    </div>
  );
}
