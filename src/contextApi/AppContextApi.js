"use client";
import { createContext, useEffect, useRef, useState } from "react";

export const AppContext = createContext();

export function AppContextProvider({ children }) {
  const [drawerToggel, setdrawerToggel] = useState(true);
  const [appDrawer, setappDrawer] = useState(false);

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
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
