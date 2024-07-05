"use client";
import { createContext, useEffect, useRef, useState } from "react";
import { getAllUsers } from "../Actions/userAction";
export const UserContext = createContext();

export default function UserContextApi({ children }) {
  const [toggleAction, settoggleAction] = useState(false);
  const [allUsers, setallUsers] = useState([]);

  const handelGetAll = async () => {
    try {
      const res = await getAllUsers();
      console.log(res.data.result);
      setallUsers(res.data.result);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <UserContext.Provider
      value={{ toggleAction, allUsers, handelGetAll, toggleAction, allUsers }}
    >
      {children}
    </UserContext.Provider>
  );
}
