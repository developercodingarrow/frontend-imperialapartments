import { performGetAPIAction } from "../performAPIAction";

import { getLoginCookies, isAuth } from "../authAction";
const authToken = getLoginCookies();

const API = "http://localhost:8000/api/v1/imperialapartments";

// API FOR SSR All Project
// GET All Projects
export const getAllListing = async () => {
  const url = `${API}/project/all-listing`;
  return performGetAPIAction(url);
};
