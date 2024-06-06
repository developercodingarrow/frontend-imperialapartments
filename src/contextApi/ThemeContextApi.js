"use client";
import { createContext, useEffect, useRef, useState } from "react";
import { isAuth } from "../Actions/authAction";
export const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
  const longined = isAuth();

  return (
    <ThemeContext.Provider
      value={{
        longined,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
