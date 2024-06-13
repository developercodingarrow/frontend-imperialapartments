import React from "react";
import styles from "./css/featurepost.module.css";
import BoxCard from "../../components/cards/BoxCard";
import higlightBanner from "../../../public/web-statice-img/higlight-banner.jpg";
import Image from "next/image";

export default function FeaturePost() {
  return (
    <div className={styles.section_wrapper}>
      <div className={styles.section_heading}>
        <h2>Stay at our top unique properties</h2>
      </div>
      <div className={styles.card_container}>
        <div className={styles.highlight_box}>
          <Image
            src={higlightBanner}
            width={500}
            height={500}
            className={styles.higlisght_imageStyle}
          />
        </div>
        <div className={styles.card_wrapperContainer}>
          <div className={styles.card_wrapper}>
            {[1, 2, 3, 4, 5, 6].map((el, i) => {
              return <BoxCard />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
