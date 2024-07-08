"use client";

import { performAPIAction, performGetAPIAction } from "./performAPIAction";

import { getLoginCookies, isAuth } from "./authAction";
const authToken = getLoginCookies();

const API = "http://localhost:8000/api/v1/imperialapartments";

// GET All BLOG CATEGORIES
export const getAllRoomTypeAction = async () => {
  const url = `${API}/room-type/get-all-room-type`;
  return performGetAPIAction(url);
};

// CREATE CATEGORy
export const createRoom = async (requestData) => {
  const url = `${API}/room-type/create-new-room-type`;
  const method = "post";
  console.log(requestData);
  return performAPIAction(method, url, requestData, authToken);
};

// CREATE CATEGORy
export const deleteOneRoom = async (requestData) => {
  const url = `${API}/room-type/delete-one-room-type`;
  const method = "delete";
  console.log(requestData);
  return performAPIAction(method, url, requestData, authToken);
};

// UPDATE ONE CATEGORy
export const updateOneRoom = async (requestData) => {
  const url = `${API}/room-type/update-one-room-type`;
  const method = "patch";
  console.log(requestData);
  return performAPIAction(method, url, requestData, authToken);
};
