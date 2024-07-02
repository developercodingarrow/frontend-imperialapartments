"use client";
import { createContext, useEffect, useRef, useState } from "react";

export const AppContext = createContext();

export function AppContextProvider({ children }) {
  const [drawerToggel, setdrawerToggel] = useState(true);
  const [appDrawer, setappDrawer] = useState(false);
  const [editForm, seteditForm] = useState(false);
  const [editModelData, seteditModelData] = useState({});
  const [chips, setChips] = useState([]);
  const [checkedOptions, setCheckedOptions] = useState([]);
  const [isOpen, setisOpen] = useState(false);

  const handelEdiFormOpen = (id, data) => {
    seteditModelData(data);
    seteditForm(true);
  };

  const handelClodeEditModel = () => {
    seteditForm(false);
  };

  const handelDrawerToggel = () => {
    setdrawerToggel(!drawerToggel);
    console.log(drawerToggel);
  };

  const handelAppDrawerToggle = () => {
    setappDrawer(!appDrawer);
  };

  const handelOpenModel = () => {
    setisOpen(true);
  };

  const handleModelClose = () => {
    setisOpen(false);
  };

  return (
    <AppContext.Provider
      value={{
        drawerToggel,
        setdrawerToggel,
        handelDrawerToggel,
        appDrawer,
        setappDrawer,
        handelAppDrawerToggle,
        handelEdiFormOpen,
        editForm,
        editModelData,
        handelClodeEditModel,
        chips,
        setChips,
        checkedOptions,
        setCheckedOptions,
        isOpen,
        setisOpen,
        handelOpenModel,
        handleModelClose,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
