import { performAPIAction } from "./performAPIAction";

// New User Registraion API
export const userRegister = async (requestData) => {
  const url = `http://localhost:8000/api/v1/imperialapartments/auth/sing-up`;
  const method = "post";
  return performAPIAction(method, url, requestData);
};

// OTP VERIFICATION API
export const otpVerfication = async (requestData, slug) => {
  const url = `http://localhost:8000/api/v1/imperialapartments/auth/verify-otp/${slug}`;
  const method = "post";
  return performAPIAction(method, url, requestData);
};

// Forgot password API
export const forgotPassword = async (requestData) => {
  const url = `http://localhost:8000/api/v1/imperialapartments/auth/forgot-password`;
  const method = "post";
  return performAPIAction(method, url, requestData);
};

// Reset Pasword API
export const resetPassword = async (requestData, slug) => {
  const url = `http://localhost:8000/api/v1/imperialapartments/auth/reset-password/${slug}`;
  const method = "post";
  return performAPIAction(method, url, requestData);
};
