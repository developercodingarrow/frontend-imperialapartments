import React from "react";
import styles from "./singlelisting.module.css";
import { MdKeyboardArrowRight } from "../../../../components/ApplicationIcon";
import listingCoverPage from "../../../../../public/web-statice-img/listing-cover-page.jpg";
import smallimage1 from "../../../../../public/web-statice-img/small-image-1.jpg";
import smallimage2 from "../../../../../public/web-statice-img/small-imag-2.jpg";
import Image from "next/image";
import SideForm from "../../../../components/layouts/SideForm";
import SibgleListingTab from "../../../../components/singleListingComponents/SibgleListingTab";
import RenderContent from "../../../../components/singleListingComponents/RenderContent";
import SideFormWrapper from "../../../../components/singleListingComponents/SideFormWrapper";

export default function SingleListingPage() {
  return (
    <div className={styles.main_container}>
      <div className={styles.barchum_bar}>
        <span>Home</span>{" "}
        <span>
          {" "}
          <MdKeyboardArrowRight />
        </span>
        <span>Listing</span>
        <span>
          {" "}
          <MdKeyboardArrowRight />
        </span>
        <span>Service apartment</span>
      </div>
      <div className={styles.page_title}>
        <h1>imperial apartments - Hotel & Serviced Apartments Gurgaon</h1>
      </div>
      <div className={styles.meta_descreptionBox}>
        <h4>
          Centrally located at the heart of South City – 1, Imperial Apartments
          is just behind Unitech Business Park, 1640 feet from Huda City Center
          Metro Station.
        </h4>
      </div>
      <div className={styles.page_header_section}>
        <div className={styles.cover_pageBox}>
          <Image
            src={listingCoverPage}
            width={900}
            height={900}
            className={styles.coverPageStyle}
          />
        </div>
        <div className={styles.side_image_wrapper}>
          <div className={styles.small_image_wrapper}>
            <Image
              src={smallimage1}
              width={900}
              height={900}
              className={styles.small_imageStyle}
            />
          </div>
          <div className={styles.small_image_wrapper}>
            {" "}
            <Image
              src={smallimage2}
              width={900}
              height={900}
              className={styles.small_imageStyle}
            />
          </div>
        </div>
      </div>
      <div className={styles.listing_detailContainer}>
        <div className={styles.tab_containe}>
          <SibgleListingTab />
        </div>
        <div className={styles.content_container}>
          <div className={styles.render_content_wrapper}>
            <RenderContent />
          </div>
          <div className={styles.content_sideBar}>
            <SideFormWrapper />
          </div>
        </div>
      </div>
    </div>
  );
}
