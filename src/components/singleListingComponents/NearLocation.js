import React from "react";
import styles from "./css/nearlocation.module.css";
import {
  FaTrainSubway,
  FaRegHospital,
  HiBuildingOffice2,
  CiLocationOn,
} from "../ApplicationIcon";
import { locationData } from "../../JsonData/amnitedsdata";

export default function NearLocation() {
  return (
    <div className={styles.main_container}>
      <section className={styles.most_popularAmanities}>
        <div className={styles.section_heading}>
          <h3>At walking distance</h3>
        </div>

        <div className={styles.single_line_anminitesWrapper}>
          <div className={styles.amnitiesBox}>
            <div className={styles.amnities_icon}>
              {" "}
              <FaTrainSubway />{" "}
            </div>
            <div className={styles.amnities_text}>
              Huda City Centre Metro (Millennium City Centre Gurugram) Station
            </div>
          </div>

          <div className={styles.amnitiesBox}>
            <div className={styles.amnities_icon}>
              {" "}
              <FaRegHospital />{" "}
            </div>
            <div className={styles.amnities_text}>fortis hospital</div>
          </div>

          <div className={styles.amnitiesBox}>
            <div className={styles.amnities_icon}>
              {" "}
              <HiBuildingOffice2 />{" "}
            </div>
            <div className={styles.amnities_text}>Sector 44 </div>
          </div>
        </div>
      </section>

      <section className={styles.all_loaction}>
        {locationData.map((el, i) => {
          return (
            <div>
              <div className={styles.section_heading}>
                <h3>{el.title}</h3>
              </div>
              <div>
                {el.locationPoint.map((data, index) => {
                  return (
                    <div className={styles.location_box}>
                      {" "}
                      <div className={styles.amnities_icon}>
                        {" "}
                        <CiLocationOn />{" "}
                      </div>
                      <div>
                        <div className={styles.amnities_text}>
                          {" "}
                          {data.location}
                        </div>
                        <div className={styles.loaction_prefrence}>
                          <span>{data.distance}</span>
                          <span>{data.unit}</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}
