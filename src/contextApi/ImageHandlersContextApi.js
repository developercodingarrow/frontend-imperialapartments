"use client";
import { createContext, useEffect, useRef, useState } from "react";
import { genericSingleImageHandler } from "../generichandler/genericImagehandlers";
import { UploadBlogImag } from "../Actions/blogAction";

export const ImagesContext = createContext();

export default function ImageHandlersContextApi({ children }) {
  const handelUploadBlogThumblin = genericSingleImageHandler(UploadBlogImag);
  return (
    <ImagesContext.Provider value={{ handelUploadBlogThumblin }}>
      {children}
    </ImagesContext.Provider>
  );
}
