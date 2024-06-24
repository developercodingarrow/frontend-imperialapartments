import React from "react";
import styles from "./css/blogimage.module.css";
import Image from "next/image";
import sampleImg from "../../../../../public/web-statice-img/card_image.webp";
export default function BlogImage(props) {
  const { image } = props;
  return (
    <div className={styles.image_text_container}>
      <div className={styles.blog_imgWrapper}>
        <Image
          src={sampleImg}
          width={500}
          height={500}
          alt="image"
          className={styles.blog_imagStyle}
        />
      </div>
      <div className={styles.content_td_div}>
        <h6 className={styles.td_text}>Service apartment in gurgaon</h6>
        <h6 className={styles.td_small_text}>sandeep</h6>
      </div>
    </div>
  );
}
