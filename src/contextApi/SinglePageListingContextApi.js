"use client";
import { createContext, useEffect, useRef, useState } from "react";
export const SingleListingContext = createContext();

export default function SinglePageListingContextApi({ children }) {
  const [activeTab, setActiveTab] = useState("overview");
  const [isSticky, setIsSticky] = useState(false);

  const handelListingTab = (value) => {
    setActiveTab(value);
  };
  return (
    <SingleListingContext.Provider
      value={{
        activeTab,
        setActiveTab,
        isSticky,
        setIsSticky,
        handelListingTab,
      }}
    >
      {children}
    </SingleListingContext.Provider>
  );
}
