import React from "react";
import styles from "./css/searchbar.module.css";
import SearchBtn from "./SearchBtn";
import { quicksearchLinks } from "../../JsonData/pagelinks";
import Link from "next/link";

export default function SearchBar() {
  return (
    <div className={styles.search_bar_container}>
      <div className={styles.search_bar}>
        <div className={styles.search_textBox}>
          <input
            type="text"
            placeholder="Search Room Types ....."
            className={styles.search_input}
          />
        </div>
        <div className={styles.date_inputBox}>
          <input type="date" className={styles.date_input} />
        </div>

        <div className={styles.date_inputBox}>
          <input type="date" className={styles.date_input} />
        </div>

        <div className={styles.numer_inputBox}>
          <input type="number" className={styles.number_input} />
        </div>

        <div>
          <SearchBtn />
        </div>
      </div>

      <div className={styles.quick_linkContainer}>
        <div className={styles.mini_sub_heading}>Recent Search..</div>
        <div className={styles.auick_links_wrapper}>
          {quicksearchLinks.map((el, i) => {
            return (
              <Link href={"/"} className={styles.quick_link}>
                {el.name}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
