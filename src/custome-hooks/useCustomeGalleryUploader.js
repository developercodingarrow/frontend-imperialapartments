"use client";
import { useState } from "react";
import { UploadProjectGallery } from "../Actions/projectAction";

export default function useCustomeGalleryUploader() {
  const [images, setImages] = useState([]);
  const [formData, setFormData] = useState({
    altText: "",
    alternativeText: "",
    title: "",
    caption: "",
    description: "",
  });
  const [selectedImageId, setSelectedImageId] = useState(null);

  console.log(images);

  const handleSelectImage = (id) => {
    setSelectedImageId(id);
    console.log(id);
    const selectedImage = images.find((image) => image.id === id);
    if (selectedImage) {
      setFormData(selectedImage.formData);
    }
  };

  const handleRemoveImage = (id) => {
    setImages((prevImages) => prevImages.filter((image) => image.id !== id));
    if (id === selectedImageId) {
      setSelectedImageId(null);
      setFormData({
        altText: "",
        alternativeText: "",
        title: "",
        caption: "",
        description: "",
      });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const newImage = {
        id: images.length,
        file: URL.createObjectURL(file),
        formData: { ...formData },
      };
      setImages((prevImages) => [...prevImages, newImage]);
      setFormData({
        altText: "",
        alternativeText: "",
        title: "",
        caption: "",
        description: "",
      });
    }
  };

  // const handleRemoveImage = (id) => {
  //   setImages((prevImages) => prevImages.filter((image) => image.id !== id));
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const formDataToSend = new FormData();
  //     images.forEach((image) => {
  //       formDataToSend.append("projectGalley", image.fileObj);
  //       formDataToSend.append("altText", image.formData.altText);
  //       formDataToSend.append(
  //         "alternativeText",
  //         image.formData.alternativeText
  //       );
  //       formDataToSend.append("title", image.formData.title);
  //       formDataToSend.append("caption", image.formData.caption);
  //       formDataToSend.append("description", image.formData.description);
  //     });

  //     const projectId = "your-project-id"; // Replace with actual project ID
  //     const response = await UploadProjectGallery(formDataToSend, projectId);

  //     if (response.data.status === "success") {
  //       console.log("Images uploaded successfully");
  //     } else {
  //       console.log("Error uploading images");
  //     }
  //   } catch (error) {
  //     console.error("Error uploading images:", error);
  //   }
  // };

  return {
    formData,
    images,
    handleInputChange,
    handleImageUpload,
    handleRemoveImage,
    selectedImageId,
    handleSelectImage,
  };
}
