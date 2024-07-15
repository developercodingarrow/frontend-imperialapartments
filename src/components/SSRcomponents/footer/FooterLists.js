import React from "react";
import Link from "next/link";
import styles from "./css/footerList.module.css";

export default function FooterLists(props) {
  const { Title, lists } = props;
  return (
    <div className={styles.recent_listingColumn}>
      <div className={styles.column_title}>
        <h3>{Title} </h3>
      </div>
      <div className={styles.column_list}>
        {lists.map((el, index) => {
          return (
            <div className={styles.link_wrapper}>
              {" "}
              <Link href={"#"}>{el.name}</Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
