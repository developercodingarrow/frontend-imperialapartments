"use client";

import {
  performAPIAction,
  performGetAPIAction,
  ImageAPIAction,
} from "./performAPIAction";

import { getLoginCookies, isAuth } from "./authAction";
const authToken = getLoginCookies();

const API = "http://localhost:8000/api/v1/imperialapartments";

// GET All Projects
export const getAllProjectsAction = async () => {
  const url = `${API}/project/get-all-projects`;
  return performGetAPIAction(url, authToken);
};

// CREATE BLOG
export const createProject = async (requestData) => {
  const url = `${API}/project/create-new-project`;
  const method = "post";
  console.log(requestData);
  return performAPIAction(method, url, requestData, authToken);
};

// UPDATE Featured
export const updateIsFeatured = async (requestData) => {
  const data = {
    _id: requestData,
  };
  console.log(data);
  const url = `${API}/project/is-feaured-blog`;
  const method = "post";
  return performAPIAction(method, url, data, authToken);
};
