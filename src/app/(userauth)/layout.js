import React from "react";
import NavBar from "../../components/navbar/NavBar";
import "../global.css";

export default function UserAuthLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        <div>{children}</div>
      </body>
    </html>
  );
}
