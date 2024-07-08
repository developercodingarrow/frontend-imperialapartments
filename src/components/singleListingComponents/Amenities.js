import React from "react";
import styles from "./css/amenities.module.css";
import {
  CiWifiOn,
  LuParkingCircle,
  MdOutlineFastfood,
  MdFamilyRestroom,
  Ri24HoursFill,
  IoIosCheckmarkCircleOutline,
} from "../ApplicationIcon";
import { amnitiesData } from "../../JsonData/amnitedsdata";

export default function Amenities() {
  return (
    <div className={styles.main_container}>
      <section className={styles.most_popularAmanities}>
        <div className={styles.section_heading}>
          <h3>Most popular facilities</h3>
        </div>

        <div className={styles.single_line_anminitesWrapper}>
          <div className={styles.amnitiesBox}>
            <div className={styles.amnities_icon}>
              {" "}
              <CiWifiOn />{" "}
            </div>
            <div className={styles.amnities_text}>Free Wi-fi</div>
          </div>

          <div className={styles.amnitiesBox}>
            <div className={styles.amnities_icon}>
              {" "}
              <MdOutlineFastfood />{" "}
            </div>
            <div className={styles.amnities_text}> complimentary breakfast</div>
          </div>

          <div className={styles.amnitiesBox}>
            <div className={styles.amnities_icon}>
              {" "}
              <MdFamilyRestroom />{" "}
            </div>
            <div className={styles.amnities_text}> Family rooms</div>
          </div>

          <div className={styles.amnitiesBox}>
            <div className={styles.amnities_icon}>
              {" "}
              <LuParkingCircle />{" "}
            </div>
            <div className={styles.amnities_text}>Free parking</div>
          </div>

          <div className={styles.amnitiesBox}>
            <div className={styles.amnities_icon}>
              {" "}
              <Ri24HoursFill />{" "}
            </div>
            <div className={styles.amnities_text}>24-hour front desk</div>
          </div>
        </div>
      </section>

      <section className={styles.all_amnities}>
        {amnitiesData.map((el, index) => {
          return (
            <div className={styles.amnities_section}>
              <div className={styles.section_heading}>
                <h3>{el.title}</h3>
              </div>
              {el.amanities.map((text, i) => {
                return (
                  <div className={styles.amninites_lists}>
                    <div className={styles.amnities_icon}>
                      <IoIosCheckmarkCircleOutline />
                    </div>
                    <div className={styles.amnities_text}>{text}</div>
                  </div>
                );
              })}
            </div>
          );
        })}
      </section>
    </div>
  );
}
