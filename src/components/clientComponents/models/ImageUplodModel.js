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
} from "../../ApplicationIcon";
import CardInput from "../formCards/CardInput";
import useImageUpload from "../../../custome-hooks/useImageUpload";
import { AppContext } from "../../../contextApi/AppContextApi";

export default function ImageUplodModel(props) {
  const { uploadHandler, imageFor, dataFor } = props;
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
  } = useImageUpload();

  const handleClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handelSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await uploadHandler(
        originalFile,
        formData,
        imageFor,
        dataFor
      );
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
                  <div className={styles.prev_uplod_container}>
                    <div className={styles.prve_image_wrapper}>
                      {" "}
                      <Image
                        src={prevImage}
                        width={500}
                        height={500}
                        className={styles.prev_imag}
                      />
                      <div className={styles.remove_icon}>
                        <IoRemoveCircleOutline onClick={removeImage} />
                      </div>
                    </div>
                  </div>
                ) : (
                  <div
                    className={styles.image_uplod_container}
                    onClick={handleClick}
                  >
                    <TiCloudStorage />
                    <input
                      type="file"
                      onChange={handleImageChange}
                      ref={fileInputRef}
                      className={styles.imageInput}
                    />
                  </div>
                )}

                <div className={styles.input_container}>
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
