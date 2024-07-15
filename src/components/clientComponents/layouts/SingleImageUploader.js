"use client";
import React, { useContext } from "react";
import styles from "./css/singleimageuploader.module.css";
import { AppContext } from "../../../contextApi/AppContextApi";
import Image from "next/image";
import { GoUpload } from "../../ApplicationIcon";

export default function SingleImageUploader(props) {
  const { apiImage } = props;
  const { isOpen, setisOpen, handelOpenModel, handleModelClose } =
    useContext(AppContext);

  console.log("api image---", apiImage);
  const imageUrl = apiImage?.url;
  return (
    <div className={styles.card_wrapper}>
      <div className={styles.card_titleBox}>
        <p>upload Image</p>
      </div>
      <div className={styles.card}>
        <div className={styles.card_body}>
          {imageUrl ? (
            <div className={styles.api_image_container}>
              <div className={styles.image_wrapper}>
                <Image
                  src={`/projectthublin/${imageUrl}`}
                  alt={apiImage.altText || "Uploaded Image"}
                  className={styles.single_image_style}
                  width={500}
                  height={500}
                />
              </div>
              <div className={styles.image_cardfooter}>
                <GoUpload onClick={handelOpenModel} />
              </div>
            </div>
          ) : (
            <div className={styles.dropBox} onClick={handelOpenModel}>
              <p>Drop File</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
