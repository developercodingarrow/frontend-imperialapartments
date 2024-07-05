"use client";

import { performAPIAction, performGetAPIAction } from "./performAPIAction";

import { getLoginCookies, isAuth } from "./authAction";
const authToken = getLoginCookies();

const API = "http://localhost:8000/api/v1/imperialapartments";
// GET All BLOG CATEGORIES
export const getAllUsers = async () => {
  const url = `${API}/user/all-users`;
  return performGetAPIAction(url, authToken);
};

// Update User Name
export const UpdateUserName = async (requestData) => {
  if (authToken) {
    const url = `http://localhost:8000/api/v1/imperialapartments/user/update-user-name`;
    const method = "Patch";
    return performAPIAction(method, url, requestData, authToken);
  }

  return null;
};
