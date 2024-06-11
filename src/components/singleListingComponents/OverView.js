import React from "react";
import styles from "./css/overview.module.css";

export default function OverView() {
  return (
    <div className={styles.main_container}>
      <div className={styles.sub_heading_wrrapper}>
        <h3>About:-</h3>
        <h3> Hotel & Serviced Apartments Gurgaon</h3>
      </div>
      <div className={styles.dynimic_content}>
        <p>
          Enjoy a luxurious treatment at The HQ, a beautifully designed,
          pulsating business hotel capturing the vibrant spirit of India's
          celebrated party desti
        </p>

        <ul>
          <li className={styles.list}>
            The hotel offers suites with a beautifully designed living room
            along with an in-built pantry and jacuzzi.
          </li>
          <li className={styles.list}>
            The hotel is located just 120 m away from the Vasco da Gama railway
            station.
          </li>

          <li className={styles.list}>
            It features a stunning rooftop pool and restaurant offering the best
            ambience and food in the city.
          </li>
        </ul>
      </div>
    </div>
  );
}
