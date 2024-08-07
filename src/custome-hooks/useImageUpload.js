"use client";
import { useEffect, useState } from "react";

const useImageUpload = (apiImage) => {
  const [image, setImage] = useState(null); // Initial image
  const [prevImage, setprevImage] = useState(null); // Preview image
  const [selectedFile, setSelectedFile] = useState(null); // Selected file
  const [imageName, setImageName] = useState(null);
  const [imageSize, setImageSize] = useState(null);
  const [sizePrefix, setSizePrefix] = useState(null);
  const [fileInputKey, setFileInputKey] = useState(0);
  const [originalFile, setOriginalFile] = useState(null);

  const [formData, setFormData] = useState({
    altText: apiImage?.altText || "",
    alternativeText: apiImage?.alternativeText || "",
    title: apiImage?.title || "",
    caption: apiImage?.caption || "",
    description: apiImage?.description || "",
  });

  useEffect(() => {
    if (apiImage) {
      setFormData({
        altText: apiImage.altText,
        alternativeText: apiImage.alternativeText,
        title: apiImage.title,
        caption: apiImage.caption,
        description: apiImage.description,
      });
      setImageName(apiImage.title);
    }
  }, [apiImage]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImage(reader.result); // not use
      setprevImage(reader.result);
      setImageName(file.name);
      setImageSize(file.size);
      determineSizePrefix(file.size);
    };

    if (file) {
      reader.readAsDataURL(file);
      setOriginalFile(file);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    formDataToSend.append(`${imageFor}`, selectedFile);

    Object.keys(formData).forEach((key) => {
      formDataToSend.append(key, formData[key]);
    });
    console.log(formDataToSend);
  };

  const determineSizePrefix = (size) => {
    const kb = 1024;
    const mb = kb * 1024;
    const gb = mb * 1024;

    if (size < kb) {
      setSizePrefix("B");
    } else if (size < mb) {
      setSizePrefix("KB");
    } else if (size < gb) {
      setSizePrefix("MB");
    } else {
      setSizePrefix("GB");
    }
  };

  const removeImage = () => {
    // Logic for removing the image, e.g., set the image state to null
    setImage(null);
    setImageName(null);
    setImageSize(null);
    setprevImage(null);
    setFileInputKey((prevKey) => prevKey + 1);
  };

  return {
    image,
    handleImageChange, // used
    prevImage, // used
    removeImage, // used
    handleInputChange, // used
    formData, // used
    onSubmit, // used

    fileInputKey,
    imageName,
    imageSize,
    sizePrefix,
    originalFile,
  };
};

export default useImageUpload;
