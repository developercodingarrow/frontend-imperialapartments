"use client";

import { performAPIAction, performGetAPIAction } from "./performAPIAction";

import { getLoginCookies, isAuth } from "./authAction";
const authToken = getLoginCookies();

const API = "http://localhost:8000/api/v1/imperialapartments";

// GET All BLOG CATEGORIES
export const getAllBlogCategoriesAction = async () => {
  const url = `${API}/blog-categories/get-all-categories`;
  return performGetAPIAction(url);
};

// CREATE CATEGORy
export const createCategorie = async (requestData) => {
  const url = `${API}/blog-categories/create-new-categorie`;
  const method = "post";
  console.log(requestData);
  return performAPIAction(method, url, requestData, authToken);
};

// CREATE CATEGORy
export const deleteOneCategorie = async (requestData) => {
  const url = `${API}/blog-categories/delete-one-categorie`;
  const method = "delete";
  console.log(requestData);
  return performAPIAction(method, url, requestData, authToken);
};

// UPDATE ONE CATEGORy
export const updateOneCategorie = async (requestData) => {
  const url = `${API}/blog-categories/update-one-categore`;
  const method = "patch";
  console.log(requestData);
  return performAPIAction(method, url, requestData, authToken);
};
