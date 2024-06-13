import React from "react";
import styles from "./homepage.module.css";
import BoxCard from "../../components/cards/BoxCard";

export default function HomePage() {
  return (
    <div className={styles.container}>
      {" "}
      <p>home page</p>
      <div className={styles.card_wrapper}>
        {[1, , 2, 3, 4, 5, 6, 7, 8, 9, 10].map((el, i) => {
          return <BoxCard />;
        })}
      </div>
    </div>
  );
}
