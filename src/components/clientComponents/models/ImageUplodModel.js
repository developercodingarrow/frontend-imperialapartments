import React, { useState, useRef } from "react";
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

export default function ImageUplodModel() {
  const fileInputRef = useRef(null);
  const [isOpen, setisOpen] = useState(false);
  const {
    handleImageChange,
    prevImage,
    imageName,
    imageSize,
    sizePrefix,
    removeImage,
    handleInputChange,
    formData,
    onSubmit,
  } = useImageUpload();

  const handleModelClose = () => {
    setisOpen(false);
  };

  const handleClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
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
            <form onSubmit={onSubmit}>
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
