"use client";

import {
  performAPIAction,
  performGetAPIAction,
  ImageAPIAction,
} from "./performAPIAction";

import { getLoginCookies, isAuth } from "./authAction";
const authToken = getLoginCookies();

const API = "http://localhost:8000/api/v1/imperialapartments";

// GET All BLOG CATEGORIES
export const getAllBlog = async () => {
  const url = `${API}/blog/get-all-blogs`;
  return performGetAPIAction(url);
};

// CREATE BLOG
export const createBlog = async (requestData) => {
  const url = `${API}/blog/create-new-blog`;
  const method = "post";
  console.log(requestData);
  return performAPIAction(method, url, requestData, authToken);
};

//GET SINGLE Blog BY PARAM ID
export const getSingleBlog = async (slug) => {
  const url = `${API}/blog/get-single-blog/${slug}`;
  console.log(slug);
  return performGetAPIAction(url, authToken);
};

// UPDATE ONE BLOG
export const updateOneBlog = async (slug, requestData) => {
  const url = `${API}/blog/update-single-blog/${slug}`;
  const method = "patch";
  console.log(requestData);
  return performAPIAction(method, url, requestData, authToken);
};

// UPDATE TAGS
export const updateBlogTag = async (slug, requestData) => {
  const url = `${API}/blog/update-blog-tags/${slug}`;
  const method = "post";
  console.log(requestData);
  return performAPIAction(method, url, requestData, authToken);
};

// UPDATE CATEGORy
export const updateBlogCategorie = async (slug, requestData) => {
  const url = `${API}/blog/update-blog-categories/${slug}`;
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
  const url = `${API}/blog/is-feaured-blog`;
  const method = "post";
  return performAPIAction(method, url, data, authToken);
};

export const UploadBlogImag = async (formData, projectId) => {
  console.log(formData);
  const url = `${API}/blog/update-blog-thumblin/${projectId}`;
  const method = "patch";
  return ImageAPIAction(method, url, formData, authToken);
};

export const deleteBlog = async (requestData) => {
  const data = {
    _id: requestData,
  };
  const url = `${API}/blog/delete-single-blog`;
  const method = "DELETE";
  return performAPIAction(method, url, data, authToken);
};
