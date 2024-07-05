"use client";
import React from "react";
import styles from "./css/projectimage.module.css";
import Image from "next/image";
export default function ProjectImage(props) {
  const { img, completeData } = props;
  console.log(completeData);
  return (
    <div className={styles.image_text_container}>
      <div className={styles.blog_imgWrapper}>
        <Image
          src={`/projectthublin/${img.url}`}
          width={500}
          height={500}
          alt={`${img.altText}`}
          title={`${img.title}`}
          alternativeText={`${img.alternativeText}`}
          className={styles.blog_imagStyle}
        />
      </div>
      <div className={styles.content_td_div}>
        <h6 className={styles.td_text}>{completeData.blogTitle}</h6>
        <h6 className={styles.td_small_text}>sandeep</h6>
      </div>
    </div>
  );
}
