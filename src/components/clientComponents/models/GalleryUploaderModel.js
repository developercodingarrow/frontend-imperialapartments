"use client";
import React, { useState, useRef, useContext } from "react";
import styles from "./css/galleryuploader.module.css";
import { AppContext } from "../../../contextApi/AppContextApi";
import {
  TiCloudStorage,
  IoCloseCircle,
  IoRemoveCircleOutline,
} from "../../ApplicationIcon";
import Image from "next/image";

import { inputConfig } from "../../../JsonData/projectdata";
import useCustomeGalleryUploader from "../../../custome-hooks/useCustomeGalleryUploader";

export default function GalleryUploaderModel(props) {
  const { uploadHandler, imageFor, dataFor } = props;
  const fileInputRef = useRef(null);
  const {
    images,
    formData,
    handleInputChange,
    handleImageUpload,
    handleRemoveImage,
    selectedImageId,
    handleSelectImage,
  } = useCustomeGalleryUploader();

  const { handelCloseGalleryModel, galleryModelIsopen, setgalleryModelIsopen } =
    useContext(AppContext);

  const handleClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handelSubmit = async (e) => {
    e.preventDefault();
    console.log("model handler");
    try {
      const res = await uploadHandler(images, formData, imageFor, dataFor);
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
      {galleryModelIsopen && (
        <div className={styles.container}>
          <div className={styles.model_container}>
            <div className={styles.model_header}>
              <div>Uplaod Image</div>
              <div className={styles.close_iconBox}>
                {" "}
                <IoCloseCircle onClick={handelCloseGalleryModel} />{" "}
              </div>
            </div>

            <div className={styles.model_Boody}>
              <div className={styles.btn_container}>
                <div onClick={handleClick} className={styles.upload_btn}>
                  <TiCloudStorage /> Add Gallery
                </div>
                <input
                  type="file"
                  onChange={handleImageUpload}
                  ref={fileInputRef}
                  style={{ display: "none" }}
                />
              </div>
              <form onSubmit={handelSubmit}>
                <div className={styles.gallerybody_wrapper}>
                  <div className={styles.upload_container}>
                    <div className={styles.uploaded_images}>
                      {images.length === 0 ? (
                        <div className={styles.no_images_text}>
                          There is no Image upoaded
                        </div>
                      ) : (
                        images.map((image) => (
                          <div
                            key={image.id}
                            className={styles.image_container}
                            onClick={() => handleSelectImage(image.id)}
                          >
                            <Image
                              src={image.file}
                              alt={image.formData.altText}
                              width={100}
                              height={100}
                            />
                            <div className={styles.image_info}>
                              {image.formData.title}
                            </div>
                            <div className={styles.remove_iconBox}>
                              {" "}
                              <IoRemoveCircleOutline
                                onClick={() => handleRemoveImage(image.id)}
                              />
                            </div>
                          </div>
                        ))
                      )}
                    </div>
                  </div>

                  <div className={styles.input_container}>
                    {selectedImageId !== null && (
                      <div>
                        {inputConfig.map((input, index) => (
                          <div className={styles.input_wrapper} key={index}>
                            <label>{input.label}</label>
                            <input
                              type={input.type}
                              name={input.name}
                              placeholder={input.placeholder}
                              value={formData[input.name]}
                              onChange={handleInputChange}
                            />
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
                <div className={styles.model_footer}>
                  <button type="submit" className={styles.submit_btn}>
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
