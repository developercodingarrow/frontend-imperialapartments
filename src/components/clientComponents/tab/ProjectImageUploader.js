"use client";
import React, { useContext, useEffect } from "react";
import { usePathname, useParams } from "next/navigation";
import styles from "./css/projectImageUploader.module.css";
import SingleImageUploader from "../layouts/SingleImageUploader";
import ImageUplodModel from "../models/ImageUplodModel";
import { ImagesContext } from "../../../contextApi/ImageHandlersContextApi";
import { AppContext } from "../../../contextApi/AppContextApi";
import GalleryUploaderModel from "../models/GalleryUploaderModel";
import { ProjectContext } from "../../../contextApi/ProjectContextApi";
import {
  updateGallerySingleImageFiled,
  deleteImageFromGallery,
} from "../../../Actions/projectAction";
import GalleryCard from "./GalleryCard";

export default function ProjectImageUploader() {
  const { handelOpengalleryModel } = useContext(AppContext);
  const { handelUplaodProjectThumblin, handeluplodProjectGalley } =
    useContext(ImagesContext);

  const { handelGetSingleProject, imageArray, singleImage } =
    useContext(ProjectContext);

  const params = useParams();
  const { slug } = params;

  useEffect(() => {
    handelGetSingleProject(slug);
  }, [slug]);

  console.log(imageArray);

  return (
    <div className={styles.main_container}>
      <ImageUplodModel
        uploadHandler={handelUplaodProjectThumblin}
        imageFor="ProjectThumblin"
        dataFor={slug}
        apiImage={singleImage}
      />

      <GalleryUploaderModel
        uploadHandler={handeluplodProjectGalley}
        imageFor="projectGalley"
        dataFor={slug}
        apiImages={imageArray}
        imageFiledHandler={updateGallerySingleImageFiled}
        deleteApiImage={deleteImageFromGallery}
      />
      <div className={styles.inner_container}>
        <div className={styles.section_container}>
          <SingleImageUploader apiImage={singleImage} />
        </div>
        <div className={styles.section_container}>
          {/* <button onClick={handelOpengalleryModel}>Upload Gallery </button> */}
          <GalleryCard
            apiImages={imageArray}
            deleteApiImage={deleteImageFromGallery}
            dataFor={slug}
          />
        </div>
      </div>
    </div>
  );
}
