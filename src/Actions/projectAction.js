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

//GET SINGLE PROJECT BY PARAM ID
export const getSingleProject = async (slug) => {
  const url = `${API}/project/get-single-project/${slug}`;
  console.log("slug---------", slug);
  return performGetAPIAction(url, authToken);
};

// CREATE BLOG
export const createProject = async (requestData) => {
  const url = `${API}/project/create-new-project`;
  const method = "post";
  console.log(requestData);
  return performAPIAction(method, url, requestData, authToken);
};

// UPDATE ONE BLOG
export const updateOneProject = async (slug, requestData) => {
  console.log("slug ---", slug);
  console.log("requesteData ---", requestData);
  const url = `${API}/project/update-single-project/${slug}`;
  const method = "patch";
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

export const UploadProjectImag = async (formData, projectId) => {
  console.log(formData);
  const url = `${API}/project/update-project-thumblin/${projectId}`;
  const method = "patch";
  return ImageAPIAction(method, url, formData, authToken);
};

export const UploadProjectGallery = async (formData, projectId) => {
  console.log(formData);
  const url = `${API}/project/update-project-gallery/${projectId}`;
  const method = "post";
  return ImageAPIAction(method, url, formData, authToken);
};

export const updateGallerySingleImageFiled = async (slug, requestData) => {
  const url = `${API}/project/update-gallery-single-image-field/${slug}`;
  const method = "patch";
  console.log(requestData);
  return performAPIAction(method, url, requestData, authToken);
};
