import React, { useState, useRef } from "react";
import styles from "./css/imageuplaodmodel.module.css";
import {
  imageApiData,
  imageUplaodInputs,
  inputConfig,
} from "../../../JsonData/projectdata";
import { useCustomApiForm } from "../../../custome-hooks/useCutomeApiform";
import CardBtn from "../formCards/CardBtn";
import { TiCloudStorage, IoCloseCircle } from "../../ApplicationIcon";
import CardInput from "../formCards/CardInput";
export default function ImageUplodModel() {
  const fileInputRef = useRef(null);
  const [isOpen, setisOpen] = useState(true);
  const [formData, setFormData] = useState({
    altText: "",
    imageDescription: "",
    caption: "",
    imageTitle: "",
  });
  const [selectedFile, setSelectedFile] = useState(null);

  const handleModelClose = () => {
    setisOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleClick = () => {
    // Check if the ref has been assigned before attempting to access its properties
    if (fileInputRef.current) {
      // Trigger the click event on the file input
      fileInputRef.current.click();
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    formDataToSend.append("file", selectedFile);
    Object.keys(formData).forEach((key) => {
      formDataToSend.append(key, formData[key]);
    });
    console.log(formDataToSend);
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
                <div
                  className={styles.image_uplod_container}
                  onClick={handleClick}
                >
                  <TiCloudStorage />
                  <input
                    type="file"
                    onChange={handleFileChange}
                    ref={fileInputRef}
                    className={styles.imageInput}
                  />
                </div>
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
                <CardBtn btnText="Upload" />
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
