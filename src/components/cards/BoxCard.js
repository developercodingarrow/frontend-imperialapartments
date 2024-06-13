import React from "react";
import styles from "./css/boxcard.module.css";
import Image from "next/image";
import cardImage from "../../../public/web-statice-img/card_image.webp";

export default function BoxCard() {
  return (
    <div className={styles.container}>
      <div className={styles.image_wrapper}>
        <Image
          src={cardImage}
          width={900}
          height={900}
          className={styles.card_imageStyle}
        />
      </div>
      <div className={styles.card_body}>
        <div className={styles.card_titleBox}>
          <h3>luxury service apartment</h3>
        </div>
        <div className={styles.card_footer}>
          <p>price</p>
          <p>button</p>
        </div>
      </div>
    </div>
  );
}
