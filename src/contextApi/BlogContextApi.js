import { createContext, useEffect, useRef, useState } from "react";
export const BlogContext = createContext();
import {
  createBlog,
  getSingleBlog,
  updateOneBlog,
  updateBlogTag,
  updateBlogCategorie,
  getAllBlog,
} from "../Actions/blogAction";
import {
  newgenericDataHandler,
  genericSlugDataHandler,
} from "../generichandler/generichandler";

export default function BlogContextApiProvider({ children }) {
  const [allBogs, setallBogs] = useState([]);
  const [toggleAction, settoggleAction] = useState(false);
  const [singleBlogApi, setsingleBlogApi] = useState({});

  useEffect(() => {
    handelGetAll();
  }, []);

  // GET ALL DATA
  const handelGetAll = async () => {
    try {
      settoggleAction(true);
      const res = await getAllBlog();
      if (res.data.status === "success") {
        console.log(res.data.status);
        setallBogs(res.data.result);
        settoggleAction(false);
      }
    } catch (error) {
      console.log(error);
      settoggleAction(false);
    }
  };

  // Create New BLOG
  const handelCreateNewBlog = newgenericDataHandler(
    createBlog,
    settoggleAction,
    toggleAction
  );

  // Handel Single Blog By Id for Blog Update
  const handelGetSingleBlog = async (slug) => {
    try {
      const res = await getSingleBlog(slug);
      setsingleBlogApi(res.data.result);
    } catch (error) {
      console.log(error);
    }
  };

  // Update one blog
  const handelUpdate = async (slug, data) => {
    try {
      const res = await updateOneBlog(slug, data);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const handelTagUpdate = async (slug, data) => {
    try {
      const res = await updateBlogTag(slug, data);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const handelCategoreUpdate = async (slug, data) => {
    try {
      const res = await updateBlogCategorie(slug, data);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <BlogContext.Provider
      value={{
        allBogs,
        setallBogs,
        handelCreateNewBlog,
        handelGetSingleBlog,
        singleBlogApi,
        handelUpdate,
        handelTagUpdate,
        handelCategoreUpdate,
        handelGetAll, // Handler for GET ALL BLOGS
      }}
    >
      {children}
    </BlogContext.Provider>
  );
}
