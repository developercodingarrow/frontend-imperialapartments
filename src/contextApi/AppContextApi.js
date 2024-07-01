"use client";
import { createContext, useEffect, useRef, useState } from "react";

export const AppContext = createContext();

export function AppContextProvider({ children }) {
  const [drawerToggel, setdrawerToggel] = useState(true);
  const [appDrawer, setappDrawer] = useState(false);
  const [editForm, seteditForm] = useState(false);
  const [editModelData, seteditModelData] = useState({});
  const [chips, setChips] = useState([]);

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
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
