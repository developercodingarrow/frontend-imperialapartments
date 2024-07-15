"use client";
import { useState } from "react";
import { UploadProjectGallery } from "../Actions/projectAction";

export default function useCustomeGalleryUploader(apiImages = []) {
  const [images, setImages] = useState([]);
  const [formData, setFormData] = useState({
    altText: "",
    alternativeText: "",
    title: "",
    caption: "",
    description: "",
  });
  const [selectedImageId, setSelectedImageId] = useState(null);
  const [isApiImageSelected, setIsApiImageSelected] = useState(false);
  const [selectedApiImageID, setselectedApiImageID] = useState(null);

  console.log(images);

  const handleSelectImage = (id) => {
    setSelectedImageId(id);
    setIsApiImageSelected(false); // Add this line
    console.log(id);
    const selectedImage = images.find((image) => image.id === id);
    if (selectedImage) {
      setFormData(selectedImage.formData);
    }
  };

  const handleApiImageSelect = (index) => {
    setSelectedImageId(index);
    setIsApiImageSelected(true); // Add this line
    setselectedApiImageID(apiImages[index]._id);
    const selectedImage = apiImages[index];
    if (selectedImage) {
      setFormData({
        altText: selectedImage.altText,
        alternativeText: selectedImage.alternativeText,
        title: selectedImage.title,
        caption: selectedImage.caption,
        description: selectedImage.description,
      });
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

    setImages((prevImages) =>
      prevImages.map((image) =>
        image.id === selectedImageId
          ? { ...image, formData: { ...image.formData, [name]: value } }
          : image
      )
    );
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const newImage = {
        id: images.length,
        file: URL.createObjectURL(file),
        fileObj: file, // Keep the original file object for FormData
        formData: {
          altText: "",
          alternativeText: "",
          title: "",
          caption: "",
          description: "",
        },
      };
      setImages((prevImages) => [...prevImages, newImage]);
      setSelectedImageId(images.length);
      setFormData(newImage.formData);
    }
  };

  return {
    formData,
    images,
    handleInputChange,
    handleImageUpload,
    handleRemoveImage,
    selectedImageId,
    handleSelectImage,
    handleApiImageSelect,
    isApiImageSelected,
    selectedApiImageID,
    setselectedApiImageID,
  };
}
