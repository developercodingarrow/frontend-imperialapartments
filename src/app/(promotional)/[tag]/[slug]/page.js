import React from "react";
import styles from "./pormotional.module.css";
import heroImage from "../../../../../public/web-statice-img/listing-cover-page.jpg";
import Image from "next/image";
import { IoIosCall } from "../../../../components/ApplicationIcon";
import SideFormWrapper from "../../../../components/singleListingComponents/SideFormWrapper";
import FeaturePost from "../../../../components/homepagesections/FeaturePost";
import BoxCard from "../../../../components/cards/BoxCard";
export default function Pormotionalpage() {
  return (
    <div className={styles.container}>
      <section className={styles.hero_section}>
        <Image src={heroImage} fill={true} className={styles.hero_imageStyle} />
        <div className={styles.over_layContainer}>
          <div className={styles.conent_wrapper}>
            <div className={styles.page_titleBox}>
              <h1>Studio Apartments In Gurgaon</h1>
            </div>
            <div className={styles.page_metaBox}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                erat mi, egestas id fermentum et, viverra vel nulla. In vitae
                enim laoreet, finibus lorem sit amet.
              </p>
            </div>
            <div className={styles.btn_wrapper}>
              <div className={styles.call_actionBox}>
                <div>
                  <IoIosCall />
                </div>
                <div>+91-9958200285</div>
              </div>
              <div>
                <button className={styles.btn_style}>Enquire</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className={styles.listing_container}>
        <div className={styles.listing_wrapper}>
          <div className={styles.card_wrapper}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map(
              (el, i) => {
                return <BoxCard />;
              }
            )}
          </div>
        </div>
        <div className={styles.content_sideBar}>
          <SideFormWrapper />
        </div>
      </div>
    </div>
  );
}
