"use client";
import { createContext, useEffect, useRef, useState } from "react";
export const EnquireContext = createContext();
import { getAllEnquiresAction, createEnquire } from "../Actions/enquireAction";
import {
  newgenericDataHandler,
  genericDeleteHandler,
} from "../generichandler/generichandler";

export default function EnquireContextApi({ children }) {
  const [toggleAction, settoggleAction] = useState(false);
  const [allEnquires, setallEnquires] = useState([]);

  // GET ALL DATA
  const handelGetAll = async () => {
    try {
      settoggleAction(true);
      const res = await getAllEnquiresAction();
      if (res.data.status === "success") {
        console.log(res.data.status);
        setallEnquires(res.data.result);
        settoggleAction(false);
      }
    } catch (error) {
      console.log(error);
      settoggleAction(false);
    }
  };

  // Create New BLOG
  const handelCreateEnquire = newgenericDataHandler(
    createEnquire,
    settoggleAction,
    toggleAction
  );

  return (
    <EnquireContext.Provider
      value={{
        toggleAction,
        settoggleAction,
        handelGetAll,
        allEnquires,
        handelCreateEnquire,
      }}
    >
      {children}
    </EnquireContext.Provider>
  );
}
