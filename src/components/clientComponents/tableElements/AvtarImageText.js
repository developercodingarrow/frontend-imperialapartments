import React from "react";
import styles from "./css/avtarImageText.module.css";
import Image from "next/image";
import tablCircleImage from "../../../../public/web-statice-img/table-circle-imag.jpg";
export default function AvtarImageText(props) {
  const { image, name, email } = props;

  return (
    <div className={styles.image_contnet_td_div}>
      <div className={styles.circleimage_td_div}>
        <Image
          src={tablCircleImage}
          width={50}
          height={50}
          alt="image"
          className={styles.circle_imagStyle}
        />
      </div>
      <div className={styles.content_td_div}>
        <h6 className={styles.td_text}>{name}</h6>
        <h6 className={styles.td_small_text}>{email}</h6>
      </div>
    </div>
  );
}
