"use client";
import { createContext, useEffect, useRef, useState } from "react";

export const AppContext = createContext();

export function AppContextProvider({ children }) {
  const [drawerToggel, setdrawerToggel] = useState(true);

  const handelDrawerToggel = () => {
    setdrawerToggel(!drawerToggel);
    console.log(drawerToggel);
  };

  return (
    <AppContext.Provider
      value={{
        drawerToggel,
        setdrawerToggel,
        handelDrawerToggel,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
