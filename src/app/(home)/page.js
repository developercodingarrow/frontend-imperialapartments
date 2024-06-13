import React from "react";
import styles from "./homepage.module.css";
import BoxCard from "../../components/cards/BoxCard";
import higlightBanner from "../../../public/web-statice-img/higlight-banner.jpg";
import Image from "next/image";
import FeaturePost from "../../components/homepagesections/FeaturePost";
import FeatureCategories from "../../components/homepagesections/FeatureCategories";
import FeatureBlogs from "../../components/homepagesections/FeatureBlogs";

export default function HomePage() {
  return (
    <div className={styles.container}>
      <section className={styles.section_wrapper}>
        <FeaturePost />
      </section>

      <section className={styles.section_wrapper}>
        <FeatureCategories />
      </section>
      <section className={styles.section_wrapper}>
        <FeatureBlogs />
      </section>
    </div>
  );
}
