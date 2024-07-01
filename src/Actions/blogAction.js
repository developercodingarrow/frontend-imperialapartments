"use client";

import { performAPIAction, performGetAPIAction } from "./performAPIAction";

import { getLoginCookies, isAuth } from "./authAction";
const authToken = getLoginCookies();

const API = "http://localhost:8000/api/v1/imperialapartments";

// CREATE CATEGORy
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

// UPDATE ONE CATEGORy
export const updateOneBlog = async (slug, requestData) => {
  const url = `${API}/blog/update-single-blog/${slug}`;
  const method = "patch";
  console.log(requestData);
  return performAPIAction(method, url, requestData, authToken);
};

// UPDATE ONE CATEGORy
export const updateBlogTag = async (slug, requestData) => {
  const url = `${API}/blog/update-blog-tags/${slug}`;
  const method = "post";
  console.log(requestData);
  return performAPIAction(method, url, requestData, authToken);
};
