"use client";
import { createContext, useEffect, useRef, useState } from "react";
import {
  getAllRoomTypeAction,
  createRoom,
  deleteOneRoom,
  updateOneRoom,
} from "../Actions/RoomTypeAction";
import { newgenericDataHandler } from "../generichandler/generichandler";

export const RoomTypeContext = createContext();

export function RoomTypeContextProvider({ children }) {
  const [allRoomTypes, setallRoomTypes] = useState([]);
  const [toggleAction, settoggleAction] = useState(false);

  useEffect(() => {
    handelGetAll();
  }, []);

  // GET ALL DATA
  const handelGetAll = async () => {
    try {
      const res = await getAllRoomTypeAction();
      if (res.data.status === "success") {
        console.log(res.data.status);
        setallRoomTypes(res.data.result);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Create New Categories
  const handelCreateNewRoom = newgenericDataHandler(
    createRoom,
    settoggleAction,
    toggleAction
  );

  // Handel Delete

  const handelDeleteRoom = newgenericDataHandler(
    deleteOneRoom,
    settoggleAction,
    toggleAction
  );

  // Update One categories
  const handelUpdateRoom = newgenericDataHandler(
    updateOneRoom,
    settoggleAction,
    toggleAction
  );

  return (
    <RoomTypeContext.Provider
      value={{
        allRoomTypes,
        handelGetAll,
        toggleAction,
        handelCreateNewRoom,
        handelDeleteRoom,
        handelUpdateRoom,
      }}
    >
      {children}
    </RoomTypeContext.Provider>
  );
}
