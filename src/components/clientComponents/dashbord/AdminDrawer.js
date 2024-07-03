import React from "react";
import styles from "./css/adminDrawer.module.css";
import Link from "next/link";
import { PiSquaresFourLight } from "../../ApplicationIcon";
export default function AdminDrawer() {
  return (
    <div className={styles.container}>
      <div className={styles.inner_container}>
        <div className={styles.options_wrappers}>
          <div className={styles.options_headingBox}>
            <h4>Home</h4>
          </div>
          <ul>
            <li className={styles.option_li}>
              <Link href={"/"}>
                <div className={styles.option_tab}>
                  <div className={styles.option_icon}>
                    {" "}
                    <PiSquaresFourLight />{" "}
                  </div>
                  <div className={styles.option_text}>DashBoard</div>
                </div>
              </Link>
            </li>

            <li className={styles.option_li}>
              <Link href={"/"}>
                <div className={styles.option_tab}>
                  <div className={styles.option_icon}>
                    {" "}
                    <PiSquaresFourLight />{" "}
                  </div>
                  <div className={styles.option_text}>DashBoard</div>
                </div>
              </Link>
            </li>
            <li className={styles.option_li}>
              <Link href={"/"}>
                <div className={styles.option_tab}>
                  <div className={styles.option_icon}>
                    {" "}
                    <PiSquaresFourLight />{" "}
                  </div>
                  <div className={styles.option_text}>DashBoard</div>
                </div>
              </Link>
            </li>
          </ul>
        </div>

        <div className={styles.options_wrappers}>
          <div className={styles.options_headingBox}>
            <h4>Lists</h4>
          </div>
          <ul>
            <li className={styles.option_li}>
              <Link href={"/admin-panel/user-list"}>
                <div className={styles.option_tab}>
                  <div className={styles.option_icon}>
                    {" "}
                    <PiSquaresFourLight />{" "}
                  </div>
                  <div className={styles.option_text}>User List</div>
                </div>
              </Link>
            </li>

            <li className={styles.option_li}>
              <Link href={"/admin-panel/blog-list"}>
                <div className={styles.option_tab}>
                  <div className={styles.option_icon}>
                    {" "}
                    <PiSquaresFourLight />{" "}
                  </div>
                  <div className={styles.option_text}>Blog List</div>
                </div>
              </Link>
            </li>
            <li className={styles.option_li}>
              <Link href={"/admin-panel/enquire-list"}>
                <div className={styles.option_tab}>
                  <div className={styles.option_icon}>
                    {" "}
                    <PiSquaresFourLight />{" "}
                  </div>
                  <div className={styles.option_text}>Enquires</div>
                </div>
              </Link>
            </li>
          </ul>
        </div>

        <div className={styles.options_wrappers}>
          <div className={styles.options_headingBox}>
            <h4>CREATE</h4>
          </div>
          <ul>
            <li className={styles.option_li}>
              <Link href={"/admin-panel/create-blog"}>
                <div className={styles.option_tab}>
                  <div className={styles.option_icon}>
                    {" "}
                    <PiSquaresFourLight />{" "}
                  </div>
                  <div className={styles.option_text}>CREATE BLOG</div>
                </div>
              </Link>
            </li>
            <li className={styles.option_li}>
              <Link href={"/admin-panel/create-categories"}>
                <div className={styles.option_tab}>
                  <div className={styles.option_icon}>
                    {" "}
                    <PiSquaresFourLight />{" "}
                  </div>
                  <div className={styles.option_text}>CREATE CATEGORIES</div>
                </div>
              </Link>
            </li>
            <li className={styles.option_li}>
              <Link href={"/"}>
                <div className={styles.option_tab}>
                  <div className={styles.option_icon}>
                    {" "}
                    <PiSquaresFourLight />{" "}
                  </div>
                  <div className={styles.option_text}>DashBoard</div>
                </div>
              </Link>
            </li>
          </ul>
        </div>

        <div className={styles.Drawer_footer}>Footer</div>
      </div>
    </div>
  );
}
