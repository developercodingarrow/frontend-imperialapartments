import axios from "axios";

export const performAPIAction = async (
  method,
  url,
  requestData,
  token = null
) => {
  const headers = {
    "Content-Type": "application/json; charset=utf-8",
    Accept: "application/json",
  };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  try {
    const config = {
      method,
      url,
      headers,
      data: requestData,
    };

    const response = await axios(config);
    return response;
  } catch (error) {
    console.log(error.response);
    return error.response;
  }
};

export const performGetAPIAction = async (url, token = null) => {
  const headers = {
    "Content-Type": "application/json; charset=utf-8",
    Accept: "application/json",
  };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  try {
    const response = await axios.get(url, { headers });
    return response;
  } catch (error) {
    console.log(error.response);
    return error.response;
  }
};

export const ImageAPIAction = async (
  method,
  url,
  requestData,
  token = null
) => {
  const headers = { "Content-Type": "multipart/form-data" };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  try {
    const response = await axios[method](url, requestData, { headers });
    console.log(response);
    return response;
  } catch (error) {
    console.log("Error Response:", error);
    return error.response;
  }
};
