import { genericSingleImageHandler } from "../generichandler/genericImagehandlers";
import { UploadBlogImag } from "./blogAction";

export const handelUploadBlogThumblin =
  genericSingleImageHandler(UploadBlogImag);
