import React from "react";
import "../global.css";
import TopBar from "../../components/topbar/TopBar";
import NavBar from "../../components/navbar/NavBar";

export const metadata = {
  title: "Imperial Service Apartments Gurgaon",
  description: "luxury Service Apartments in Gurgaon",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Noto+Sans:ital,wght@0,100..900;1,100..900&family=Oxygen:wght@300;400;700&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <TopBar />
        <NavBar />
        <div className="page_wrapper">{children}</div>

        <span>Footer</span>
      </body>
    </html>
  );
}
