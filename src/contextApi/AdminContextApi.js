"use client";
import { createContext, useEffect, useRef, useState } from "react";

export const AdminContext = createContext();

export default function AdminContextProvider({ children }) {
  const [asideDrawer, setasideDrawer] = useState(false);

  const handelAsidDrawerToggle = () => {
    setasideDrawer(!asideDrawer);
  };
  return (
    <AdminContext.Provider value={{ asideDrawer, handelAsidDrawerToggle }}>
      {children}
    </AdminContext.Provider>
  );
}
