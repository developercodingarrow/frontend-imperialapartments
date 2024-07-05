"use client";
import { createContext, useEffect, useRef, useState } from "react";
import {
  getAllProjectsAction,
  createProject,
  updateIsFeatured,
} from "../Actions/projectAction";
import {
  newgenericDataHandler,
  genericDeleteHandler,
} from "../generichandler/generichandler";

export const ProjectContext = createContext();

export default function ProjectContextApi({ children }) {
  const [toggleAction, settoggleAction] = useState(false);
  const [allProject, setallProject] = useState([]);

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

  return (
    <ProjectContext.Provider
      value={{
        toggleAction,
        allProject,
        handelGetAll,
        handelCreateNewProject,
        handelFeatured,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
}
