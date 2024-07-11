// This GENERIC HANDLER FOR UPLOAD SINGLE IMAGE
export const genericSingleImageHandler = (uploadFunction) => {
  return async (selectedFile, formData, imageFor, id) => {
    // console.log(selectedFile, formData, imageFor, id);
    try {
      const formDataToSend = new FormData();
      formDataToSend.append(imageFor, selectedFile);
      // Append additional fields from formData
      Object.keys(formData).forEach((key) => {
        formDataToSend.append(key, formData[key]);
      });
      const result = await uploadFunction(formDataToSend, id);
      console.log(result);
      return result;
    } catch (error) {
      console.log(error);
    }
  };
};

// This GENERIC HANDLER FOR UPLOAD SINGLE IMAGE
export const genericMultiImageHandler = (uploadFunction) => {
  return async (images, imageFor, id) => {
    // console.log(selectedFile, formData, imageFor, id);
    try {
      const formDataToSend = new FormData();
      images.forEach((image) => {
        formDataToSend.append(imageFor, image.fileObj);
        formDataToSend.append("altText", image.formData.altText);
        formDataToSend.append(
          "alternativeText",
          image.formData.alternativeText
        );
        formDataToSend.append("title", image.formData.title);
        formDataToSend.append("caption", image.formData.caption);
        formDataToSend.append("description", image.formData.description);
      });

      const result = await uploadFunction(formDataToSend, id);
      console.log(result);
      return result;
    } catch (error) {
      console.log(error);
    }
  };
};
