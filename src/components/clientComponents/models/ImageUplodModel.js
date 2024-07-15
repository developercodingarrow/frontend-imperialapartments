"use client";
import React, { useState, useRef, useContext } from "react";
import Image from "next/image";
import styles from "./css/imageuplaodmodel.module.css";
import {
  imageApiData,
  imageUplaodInputs,
  inputConfig,
} from "../../../JsonData/projectdata";
import { useCustomApiForm } from "../../../custome-hooks/useCutomeApiform";
import CardBtn from "../formCards/CardBtn";
import {
  TiCloudStorage,
  IoCloseCircle,
  IoRemoveCircleOutline,
  GoUpload,
} from "../../ApplicationIcon";
import CardInput from "../formCards/CardInput";
import useImageUpload from "../../../custome-hooks/useImageUpload";
import { AppContext } from "../../../contextApi/AppContextApi";
import InputElements from "../elements/InputElements";

export default function ImageUplodModel(props) {
  const { uploadHandler, imageFor, dataFor, apiImage } = props;
  const fileInputRef = useRef(null);
  const { isOpen, setisOpen, handelOpenModel, handleModelClose } =
    useContext(AppContext);
  const {
    handleImageChange,
    image,
    originalFile,
    prevImage,
    selectedFile,
    imageName,
    imageSize,
    sizePrefix,
    removeImage,
    handleInputChange,
    formData,
    onSubmit,
  } = useImageUpload(apiImage);

  const imageUrl = apiImage?.url;
  const handleClick = () => {
    console.log("handle cick");
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handelSubmit = async (e) => {
    e.preventDefault();
    console.log("model handler");
    try {
      const res = await uploadHandler(
        originalFile,
        formData,
        imageFor,
        dataFor
      );
      console.log("modle handler-2");
      console.log(res);
      // res.data.status === "success"
      if (res.data.status === "success") {
        console.log("succes");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {isOpen && (
        <div className={styles.container}>
          <div className={styles.model_container}>
            <div className={styles.model_header}>
              <div>Uplaod Image</div>
              <div className={styles.close_iconBox}>
                {" "}
                <IoCloseCircle onClick={handleModelClose} />{" "}
              </div>
            </div>
            <form onSubmit={handelSubmit}>
              <div className={styles.model_Boody}>
                {prevImage ? (
                  <div className={styles.prev_upload_container}>
                    <div className={styles.prev_image_wrapper}>
                      <Image
                        src={prevImage}
                        width={200}
                        height={200}
                        className={styles.prev_image}
                        alt={formData.altText}
                      />
                      <div className={styles.remove_icon}>
                        <IoRemoveCircleOutline onClick={removeImage} />
                      </div>
                    </div>
                  </div>
                ) : apiImage?.url ? (
                  <div className={styles.api_image_container}>
                    <div className={styles.image_wrapper}>
                      <Image
                        src={`/projectthublin/${imageUrl}`}
                        width={200}
                        height={200}
                        className={styles.image_style}
                        alt={formData.altText}
                      />
                    </div>
                    <div className={styles.upload_new_image}>
                      <GoUpload onClick={handleClick} />
                      <input
                        type="file"
                        onChange={handleImageChange}
                        ref={fileInputRef}
                        className={styles.image_input}
                        style={{ display: "none" }}
                      />
                    </div>
                  </div>
                ) : (
                  <div
                    className={styles.image_upload_container}
                    onClick={handleClick}
                  >
                    <TiCloudStorage />
                    <input
                      type="file"
                      onChange={handleImageChange}
                      ref={fileInputRef}
                      className={styles.image_input}
                    />
                  </div>
                )}

                <div className={styles.input_container}>
                  {inputConfig.map((input, index) => (
                    <div className={styles.input_wrapper} key={index}>
                      <InputElements
                        lable={input.label}
                        value={formData[input.name]}
                        handelinput={handleInputChange}
                        {...input}
                      />
                    </div>
                  ))}
                </div>
              </div>
              <div className={styles.model_footer}>
                {prevImage && (
                  <div className={styles.image_deatils}>
                    <div>
                      <span>{imageName}</span>
                    </div>
                  </div>
                )}

                <div className={styles.footer_btn}>
                  <CardBtn btnText="Upload" />
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
