"use client";
import React, { useContext } from "react";
import { usePathname, useParams } from "next/navigation";
import styles from "./css/projectImageUploader.module.css";
import SingleImageUploader from "../layouts/SingleImageUploader";
import ImageUplodModel from "../models/ImageUplodModel";
import { ImagesContext } from "../../../contextApi/ImageHandlersContextApi";
import { AppContext } from "../../../contextApi/AppContextApi";
import GalleryUploaderModel from "../models/GalleryUploaderModel";

export default function ProjectImageUploader() {
  const { handelOpengalleryModel } = useContext(AppContext);
  const { handelUplaodProjectThumblin, handeluplodProjectGalley } =
    useContext(ImagesContext);

  const params = useParams();
  const { slug } = params;

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
