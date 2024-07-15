"use client";
import { createContext, useEffect, useRef, useState } from "react";
import {
  getAllProjectsAction,
  createProject,
  updateIsFeatured,
  updateOneProject,
  getSingleProject,
  UploadProjectImag,
} from "../Actions/projectAction";
import {
  newgenericDataHandler,
  genericDeleteHandler,
} from "../generichandler/generichandler";

export const ProjectContext = createContext();

export default function ProjectContextApi({ children }) {
  const [toggleAction, settoggleAction] = useState(false);
  const [allProject, setallProject] = useState([]);
  const [singleProjectApi, setsingleProjectApi] = useState({});
  const [projectOverview, setprojectOverview] = useState("");
  const [contentdata, setcontentdata] = useState("");
  const [loading, setLoading] = useState(false);
  const [imageArray, setimageArray] = useState([]);
  const [singleImage, setsingleImage] = useState(null);

  const handelGetAll = async () => {
    try {
      const res = await getAllProjectsAction();
      if (res.data.status === "success") {
        console.log(res.data);
        setallProject(res.data.result);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Handel Single Blog By Id for Blog Update
  const handelGetSingleProject = async (slug) => {
    try {
      setLoading(true);
      const res = await getSingleProject(slug);
      setsingleProjectApi(res.data.result);

      const overview = res.data.result?.overview || "";
      const resContent = res.data.result?.content || "";
      const images = res.data.result?.ProjectGallery || [];
      const thumblin = res.data.result?.ProjectThumblin;
      setsingleImage(thumblin);
      setimageArray(images);
      setprojectOverview(overview);
      setcontentdata(resContent);
      setLoading(false);
      return res;
    } catch (error) {
      console.log(error);
    }
  };

  // Create New BLOG
  const handelCreateNewProject = newgenericDataHandler(
    createProject,
    settoggleAction,
    toggleAction
  );

  const handelFeatured = async (itemId) => {
    try {
      console.log(itemId);
      const res = await updateIsFeatured(itemId);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  // Update one Project
  const handelUpdate = async (slug, data) => {
    try {
      console.log("project content api -------", slug);
      const res = await updateOneProject(slug, data);

      return res;
    } catch (error) {
      console.log(error);
    }
  };

  console.log(singleProjectApi);
  return (
    <ProjectContext.Provider
      value={{
        toggleAction,
        allProject,
        handelGetAll,
        handelCreateNewProject,
        handelFeatured,
        handelUpdate,
        singleProjectApi,
        handelGetSingleProject,
        loading,
        setLoading,
        projectOverview,
        setprojectOverview,
        contentdata,
        imageArray,
        singleImage,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
}
