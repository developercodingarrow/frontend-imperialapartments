import React, {
  createContext,
  useState,
  useContext,
  useRef,
  useEffect,
} from "react";
export const DashBordContext = createContext();

export default function DashBordContextApi({ children }) {
  const [visibalRows, setvisibalRows] = useState([]);
  return (
    <DashBordContext.Provider value={{ visibalRows, setvisibalRows }}>
      {children}
    </DashBordContext.Provider>
  );
}
