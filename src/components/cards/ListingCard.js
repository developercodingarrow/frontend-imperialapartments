import React from "react";
import styles from "./css/listingcard.module.css";
import Image from "next/image";
import cardImage from "../../../public/web-statice-img/card_image.webp";
import {
  IoFastFoodOutline,
  IoWifi,
  TbAirConditioning,
  LuIndianRupee,
  FaWhatsapp,
  TfiEmail,
  IoIosCall,
} from "../ApplicationIcon";
import Link from "next/link";
export default function ListingCard(props) {
  const {} = props;
  return (
    <div className={styles.card_container}>
      <div className={styles.dekstop_card}>
        <div className={styles.card_imageBox}>
          <Image
            src={cardImage}
            width={100}
            className={styles.card_imageStyle}
          />
        </div>
        <div className={styles.card_contentBox}>
          <div className={styles.card_title}>
            <h2>Imperial apartments Luxurious Serviced Apartment in Gurgaon</h2>
          </div>
          <div className={styles.meta_descreptionBox}>
            <p>
              When you're in the mood for a luxury apartment living experience
              in Gurgaon, look no further than Amore. This luxurious apartment
              provider offers the best ...
            </p>
          </div>
          <div className={styles.comman_amninites}>
            <div className={styles.amnitesBox}>
              <div>
                <IoFastFoodOutline />
              </div>
              <div>Complimentary breakfast</div>
            </div>

            <div className={styles.amnitesBox}>
              <div>
                <IoWifi />
              </div>
              <div>Free Wi-Fi</div>
            </div>
            <div className={styles.amnitesBox}>
              <div>
                <TbAirConditioning />
              </div>
              <div>Fully Air Condition</div>
            </div>

            <div className={styles.amnitesBox}>
              <div>
                <IoFastFoodOutline />
              </div>
              <div>Complimentary breakfast</div>
            </div>

            <div className={styles.amnitesBox}>
              <div>
                <IoWifi />
              </div>
              <div>Free Wi-Fi</div>
            </div>
            <div className={styles.amnitesBox}>
              <div>
                <TbAirConditioning />
              </div>
              <div>Fully Air Condition</div>
            </div>
          </div>
        </div>
        <div className={styles.card_action_box}>
          <div className={styles.tag_box}>service apartments</div>
          <div className={styles.price_box}>
            <div>
              {" "}
              <span>
                {" "}
                <LuIndianRupee />{" "}
              </span>{" "}
              <span className={styles.larg_text}> 2999</span>
            </div>
            <span className={styles.small_text}>price onwards</span>
          </div>
          <div className={styles.button_wrapper}>
            <Link href={"/"} className={styles.card_link}>
              {" "}
              see Deatils
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.mobile_card}>
        <div className={styles.mobile_card_body}>
          <div className={styles.mobile_card_imgBox}>
            <Image
              src={cardImage}
              width={100}
              className={styles.card_imageStyle}
            />
          </div>
          <div className={styles.mobile_card_content}>
            <div className={styles.mobile_card_title}>
              <h2>
                Imperial apartments Luxurious Serviced Apartment in Gurgaon
              </h2>
            </div>
            <div className={styles.mobile_meta_descreptionBox}>
              <p>
                When you're in the mood for a luxury apartment living experience
                in Gurgaon, look no further than Amore. This luxurious apartment
                provider offers the best ...
              </p>
            </div>
          </div>
        </div>
        {/* <div className={styles.mobile_amnitiesBox}>
          <div>
            <IoFastFoodOutline />
          </div>
          <div>
            <IoWifi />
          </div>
          <div>
            <TbAirConditioning />
          </div>
          <div>
            <TbAirConditioning />
          </div>

          <div>
            <IoFastFoodOutline />
          </div>
          <div>
            <IoWifi />
          </div>
          <div>
            <TbAirConditioning />
          </div>
          <div>
            <TbAirConditioning />
          </div>
        </div> */}
        <div className={styles.mobile_card_footer}>
          <div className={styles.mobile_footer_actionBox}>
            <div>
              {" "}
              <FaWhatsapp />{" "}
            </div>

            <div>
              {" "}
              <TfiEmail />{" "}
            </div>

            <div>
              <IoIosCall />
            </div>
          </div>
          <div className={styles.mobile_card_priceBox}>
            <div>
              {" "}
              <LuIndianRupee />{" "}
            </div>
            <div>2999</div>
          </div>
        </div>
      </div>
    </div>
  );
}
