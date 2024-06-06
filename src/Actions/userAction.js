"use client";

import { performAPIAction } from "./performAPIAction";

import { getLoginCookies, isAuth } from "./authAction";
const authToken = getLoginCookies();

// Update User Name
export const UpdateUserName = async (requestData) => {
  if (authToken) {
    const url = `http://localhost:8000/api/v1/imperialapartments/user/update-user-name`;
    const method = "Patch";
    return performAPIAction(method, url, requestData, authToken);
  }

  return null;
};
