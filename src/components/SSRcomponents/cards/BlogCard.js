import React from "react";
import styles from "./css/blogcard.module.css";
import blogImage from "../../../../public/web-statice-img/blog-image.jpg";
import Image from "next/image";
import Link from "next/link";
export default function BlogCard() {
  return (
    <div className={styles.container}>
      <div className={styles.card_imageBox}>
        <Image
          src={blogImage}
          width={500}
          height={500}
          className={styles.card_imageStyle}
        />
        <div className={styles.card_tag}>Service apartmnet</div>
      </div>
      <div className={styles.card_contentBox}>
        <div className={styles.card_title}>
          <h3>
            Service Apartments in Gurgaon – The Best Alternative to Hotels
          </h3>
        </div>
        <div className={styles.card_contnet}>
          <p className="content_sm_text">
            Budget Service Apartments in Gurgaon: Imperial Apartments Imperial
            Service Apartments in Gurgaon offer fully furnished, budget-friendly
            rentals for short and...
          </p>
        </div>
        <div className={styles.card_btnBox}>
          <Link href={"/"} className={styles.card_linkStyle}>
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
}
