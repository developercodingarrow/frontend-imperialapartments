import React from "react";
import { IoIosCall, IoMdMailOpen, CiLocationOn } from "../../ApplicationIcon";

import styles from "./css/dekstopfooter.module.css";
import Image from "next/image";
import logo from "../../../../public/web-statice-img/imperial-logo.png";
import {
  recentListing,
  recentBlog,
  roomTypes,
} from "../../../JsonData/pagelinks";
import FooterLists from "./FooterLists";

export default function DekstopFooter() {
  return (
    <div className={styles.container}>
      <div className={styles.inner_container}>
        <div className={styles.company_introColumn}>
          <div className={styles.introColumn}>
            <div>
              <Image src={logo} width={500} className={styles.logo_style} />
            </div>
            <div>
              <p className={`justify_text_aline content_md_text`}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                orci sapien, luctus vel mauris vitae, aliquet venenatis mauris.
                Proin a nibh imperdiet, accumsan dolor nec, posuere neque.{" "}
              </p>{" "}
            </div>
          </div>
        </div>

        <div className={styles.footer_linksColumns}>
          <div>
            <FooterLists Title="Reacent Listig" lists={recentListing} />
          </div>

          <div>
            <FooterLists Title="Reacent Blogs" lists={recentBlog} />
          </div>
          <div>
            <FooterLists Title="Rooms Types" lists={roomTypes} />
          </div>
        </div>

        <div className={styles.contact_columns}>
          <div className={styles.column_title}>
            <h3>Contact us </h3>
          </div>
          <div className={styles.filed_wrapper}>
            <div>
              <IoIosCall />
            </div>
            <div> +91-9958200285 </div>
          </div>

          <div className={styles.filed_wrapper}>
            <div>
              <IoIosCall />
            </div>
            <div> +91-9958200748 </div>
          </div>

          <div className={styles.filed_wrapper}>
            <div>
              <IoMdMailOpen />
            </div>
            <div>sales@imperialapartments.in</div>
          </div>
          <div className={styles.filed_wrapper}>
            <div>
              <CiLocationOn />
            </div>
            <div>
              F-48, South City-1, Behind Unitech Business Park, Gurgaon 122001
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
