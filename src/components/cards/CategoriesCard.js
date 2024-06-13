import React from "react";
import styles from "./css/categoriesCard.module.css";
import Image from "next/image";
import categoryImage from "../../../public/web-statice-img/categoriesImage.jpeg";
export default function CategoriesCard() {
  return (
    <div className={styles.card_container}>
      <Image
        src={categoryImage}
        width={500}
        height={500}
        className={styles.category_imageStyle}
      />

      <div className={styles.card_overlay}>
        <div className={styles.card_textBox}>
          <h3>Service apartment</h3>
          <p className={styles.mini_text}>
            service apartments near sector 29 in gurgaon
          </p>
        </div>
      </div>
    </div>
  );
}
