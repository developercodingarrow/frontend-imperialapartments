"use client";
import { createContext, useEffect, useRef, useState } from "react";
import {
  genericSingleImageHandler,
  genericMultiImageHandler,
} from "../generichandler/genericImagehandlers";
import { UploadBlogImag } from "../Actions/blogAction";
import {
  UploadProjectImag,
  UploadProjectGallery,
} from "../Actions/projectAction";

export const ImagesContext = createContext();

export default function ImageHandlersContextApi({ children }) {
  const handelUploadBlogThumblin = genericSingleImageHandler(UploadBlogImag);

  const handelUplaodProjectThumblin =
    genericSingleImageHandler(UploadProjectImag);

  const handeluplodProjectGalley =
    genericMultiImageHandler(UploadProjectGallery);
  return (
    <ImagesContext.Provider
      value={{
        handelUploadBlogThumblin,
        handelUplaodProjectThumblin,
        handeluplodProjectGalley,
      }}
    >
      {children}
    </ImagesContext.Provider>
  );
}
