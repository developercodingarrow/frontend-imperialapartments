import React from "react";
import styles from "./css/projectboxcard.module.css";
import Image from "next/image";
import dummyImg from "../../../../public/projectthublin/project-thumblin-1720161193717-room-6.jpg";
import { LuIndianRupee, FaArrowRight } from "../../ApplicationIcon";
export default function ProjectBoxCard() {
  return (
    <div className={styles.container}>
      <div className={styles.Card_image_wrapper}>
        <Image
          src={dummyImg}
          alt="dummy-image"
          width={500}
          height={500}
          className={styles.image_style}
        />
        <div className={styles.card_tag}>Service apartmnet</div>
      </div>
      <div className={styles.card_body}>
        <div className={styles.card_title_wrapper}>
          <h3>imperial service apartment in gurgaon</h3>
        </div>
        <div className={styles.card_footer}>
          <div className={styles.priceBox}>
            <div>
              {" "}
              <LuIndianRupee />{" "}
            </div>
            <div>3999</div>
          </div>
          <div className={styles.card_arrow_wrapper}>
            <FaArrowRight />
          </div>
        </div>
      </div>
    </div>
  );
}
