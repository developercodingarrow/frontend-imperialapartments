import React from "react";
import NavBar from "../../components/navbar/NavBar";
import "../global.css";
import { AppContextProvider } from "../../contextApi/AppContextApi";

export default function UserAuthLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AppContextProvider>
          <NavBar />
          <div>{children}</div>
        </AppContextProvider>
      </body>
    </html>
  );
}
