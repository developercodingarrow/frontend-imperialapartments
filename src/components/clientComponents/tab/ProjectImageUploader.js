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
import { updateGallerySingleImageFiled } from "../../../Actions/projectAction";

export default function ProjectImageUploader() {
  const { handelOpengalleryModel } = useContext(AppContext);
  const { handelUplaodProjectThumblin, handeluplodProjectGalley } =
    useContext(ImagesContext);

  const { handelGetSingleProject, imageArray } = useContext(ProjectContext);

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
      />

      <GalleryUploaderModel
        uploadHandler={handeluplodProjectGalley}
        imageFor="projectGalley"
        dataFor={slug}
        apiImages={imageArray}
        imageFiledHandler={updateGallerySingleImageFiled}
      />
      <div className={styles.inner_container}>
        <div className={styles.section_container}>
          <SingleImageUploader />
        </div>
        <div className={styles.section_container}>
          <button onClick={handelOpengalleryModel}>Upload Gallery </button>
        </div>
      </div>
    </div>
  );
}
