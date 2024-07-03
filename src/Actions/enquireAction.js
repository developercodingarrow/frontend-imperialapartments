"use client";

import { performAPIAction, performGetAPIAction } from "./performAPIAction";

import { getLoginCookies, isAuth } from "./authAction";
const authToken = getLoginCookies();

const API = "http://localhost:8000/api/v1/imperialapartments";

// GET All BLOG CATEGORIES
export const getAllEnquiresAction = async () => {
  const url = `${API}/enquire/all-enquire`;
  return performGetAPIAction(url, authToken);
};

// CREATE BLOG
export const createEnquire = async (requestData) => {
  const url = `${API}/enquire/create-new-enquire`;
  const method = "post";
  console.log(requestData);
  return performAPIAction(method, url, requestData);
};
