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
import InputElements from "../elements/InputElements";

export default function GalleryUploaderModel(props) {
  const {
    uploadHandler,
    imageFor,
    dataFor,
    apiImages,
    imageFiledHandler,
    deleteApiImage,
  } = props;
  const fileInputRef = useRef(null);
  const {
    images,
    formData,
    handleInputChange,
    handleImageUpload,
    handleRemoveImage,
    selectedImageId,
    handleSelectImage,
    handleApiImageSelect,
    isApiImageSelected,
    selectedApiImageID,
  } = useCustomeGalleryUploader(apiImages);

  const { handelCloseGalleryModel, galleryModelIsopen, setgalleryModelIsopen } =
    useContext(AppContext);

  const handleClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  console.log("selected image", selectedApiImageID);

  const handelSubmit = async (e) => {
    e.preventDefault();

    if (isApiImageSelected) {
      console.log("api image");
      const updatedImage = {
        imageId: selectedApiImageID,
        alternativeText: formData.alternativeText,
        title: formData.title,
        caption: formData.caption,
        description: formData.description,
      };

      try {
        const res = await imageFiledHandler(dataFor, updatedImage);
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    }

    try {
      const res = await uploadHandler(images, imageFor, dataFor);
      console.log("modle handler-2");
      console.log(res);

      if (res.data.status === "success") {
        console.log("succes");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handelDeleteApiImg = async (imageId) => {
    try {
      const res = await deleteApiImage(dataFor, { imageId });
      console.log(res);
    } catch (error) {}
  };

  console.log(apiImages);
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
                      <div className={styles.images_wrapper}>
                        {apiImages.map((image, index) => {
                          return (
                            <div
                              key={index}
                              onClick={() => handleApiImageSelect(index)}
                              className={styles.image_cardbox}
                            >
                              <Image
                                src={`/projectGalley/${image.url}`}
                                alt={image}
                                width={300}
                                height={300}
                                className={styles.image_Style}
                              />

                              <div
                                className={styles.remove_iconBox}
                                onClick={() => handelDeleteApiImg(image._id)}
                              >
                                {" "}
                                <IoRemoveCircleOutline />
                              </div>
                            </div>
                          );
                        })}
                      </div>

                      <div className={styles.images_wrapper}>
                        {images.length === 0 ? (
                          <div className={styles.no_images_text}>
                            There is no Image upoaded
                          </div>
                        ) : (
                          images.map((image) => (
                            <div
                              key={image.id}
                              className={styles.image_cardbox}
                              onClick={() => handleSelectImage(image.id)}
                            >
                              <Image
                                src={image.file}
                                alt={image.formData.altText}
                                width={100}
                                height={100}
                                className={styles.image_Style}
                              />
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
                  </div>

                  <div className={styles.input_container}>
                    {selectedImageId !== null && (
                      <div>
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
