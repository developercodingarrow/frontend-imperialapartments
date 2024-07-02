// This GENERIC HANDLER FOR UPLOAD SINGLE IMAGE
export const genericSingleImageHandler = (uploadFunction) => {
  return async (selectedFile, formData, imageFor, id) => {
    try {
      const formDataToSend = new FormData();
      formDataToSend.append("blogThumblin", selectedFile);
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
