"use client";
import { createContext, useEffect, useRef, useState } from "react";
import {
  getAllBlogCategoriesAction,
  createCategorie,
  deleteOneCategorie,
  updateOneCategorie,
} from "../Actions/blogCategoriesAction";
import { newgenericDataHandler } from "../generichandler/generichandler";

export const BlogCategoriesContext = createContext();

export function BlogCategoriesContextProvider({ children }) {
  const [allBlogCategories, setallBlogCategories] = useState([]);
  const [toggleAction, settoggleAction] = useState(false);

  useEffect(() => {
    handelGetAll();
  }, []);

  // GET ALL DATA
  const handelGetAll = async () => {
    try {
      settoggleAction(true);
      const res = await getAllBlogCategoriesAction();
      if (res.data.status === "success") {
        console.log(res.data.status);
        setallBlogCategories(res.data.result);
        settoggleAction(false);
      }
    } catch (error) {
      console.log(error);
      settoggleAction(false);
    }
  };

  // Create New Categories
  const handelCreateNewCategoric = newgenericDataHandler(
    createCategorie,
    settoggleAction,
    toggleAction
  );

  // Handel Delete

  const handelDeleteCategories = newgenericDataHandler(
    deleteOneCategorie,
    settoggleAction,
    toggleAction
  );

  // Update One categories
  const handelUpdateCategories = newgenericDataHandler(
    updateOneCategorie,
    settoggleAction,
    toggleAction
  );

  return (
    <BlogCategoriesContext.Provider
      value={{
        allBlogCategories,
        handelGetAll,
        toggleAction,
        handelCreateNewCategoric,
        handelDeleteCategories,
        handelUpdateCategories,
      }}
    >
      {children}
    </BlogCategoriesContext.Provider>
  );
}
