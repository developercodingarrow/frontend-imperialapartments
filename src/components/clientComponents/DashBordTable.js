"use client";
import React from "react";
import styles from "./css/dashbordTable.module.css";
import {
  IoIosArrowRoundUp,
  IoIosArrowRoundDown,
  LiaRupeeSignSolid,
  RxDotsVertical,
} from "../ApplicationIcon";
import tablCircleImage from "../../../public/web-statice-img/table-circle-imag.jpg";
import Image from "next/image";
export default function DashBordTable() {
  return (
    <div className={styles.com_container}>
      <div className={styles.inner_container}>
        <table className={styles.table_style}>
          <thead className={styles.table_head_style}>
            <tr className={styles.thead_tr_style}>
              <th className={styles.table_th_style}>
                <span className={styles.th_span_style}>
                  <input type="checkbox" />
                </span>
              </th>
              <th className={styles.table_th_style}>
                <span className={styles.th_span_style}>
                  products{" "}
                  <span className={styles.span_icon_style}>
                    {" "}
                    <IoIosArrowRoundUp />{" "}
                  </span>
                </span>
              </th>

              <th className={styles.table_th_style}>
                <span className={styles.th_span_style}>
                  date{" "}
                  <span className={styles.span_icon_style}>
                    {" "}
                    <IoIosArrowRoundUp />{" "}
                  </span>
                </span>
              </th>

              <th className={styles.table_th_style}>
                <span className={styles.th_span_style}>
                  status{" "}
                  <span className={styles.span_icon_style}>
                    {" "}
                    <IoIosArrowRoundUp />{" "}
                  </span>
                </span>
              </th>

              <th className={styles.table_th_style}>
                <span className={styles.th_span_style}>
                  Price{" "}
                  <span className={styles.span_icon_style}>
                    {" "}
                    <IoIosArrowRoundUp />{" "}
                  </span>
                </span>
              </th>

              <th className={styles.table_th_style}>
                <span className={styles.th_span_style}>
                  Action{" "}
                  <span className={styles.span_icon_style}>
                    {" "}
                    <IoIosArrowRoundUp />{" "}
                  </span>
                </span>
              </th>
            </tr>
          </thead>
          <tbody className={styles.table_body_style}>
            {[1, 2, 3].map(() => {
              return (
                <tr className={styles.tr_style}>
                  <td className={styles.checkBoxtr_style}>
                    <span className={styles.check_box_td_span}>
                      <input type="checkbox" />
                      <span></span>
                    </span>
                  </td>
                  <td className={styles.td_style}>
                    <div className={styles.image_contnet_td_div}>
                      <div className={styles.circleimage_td_div}>
                        <Image
                          src={tablCircleImage}
                          width={50}
                          className={styles.circle_imagStyle}
                        />
                      </div>
                      <div className={styles.content_td_div}>
                        <h6 className={styles.td_text}>Little Angel Toy</h6>
                        <h6 className={styles.td_small_text}>Toys</h6>
                      </div>
                    </div>
                  </td>

                  <td className={styles.td_style}>
                    <p className={styles.table_tr_td_date}>Mon, jun 10 2024</p>{" "}
                  </td>
                  <td className={styles.td_style}>
                    <div className={styles.custom_icon_text_td_div}>
                      <div className={styles.custome_icon_td_div}></div>
                      <h6 className={styles.td_text}>InStock</h6>
                    </div>
                  </td>

                  <td className={styles.td_style}>
                    <div className={styles.icon_text_td_div}>
                      <div className={styles.icon_td_div}>
                        {" "}
                        <LiaRupeeSignSolid />{" "}
                      </div>
                      <h6 className={styles.td_text}>3000</h6>
                    </div>
                  </td>
                  <td className={styles.td_style}>
                    <div className={styles.dot_iconBox}>
                      <RxDotsVertical />
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
