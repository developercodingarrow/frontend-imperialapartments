import React from "react";
import NavBar from "../../components/navbar/NavBar";
import TopBar from "../../components/topbar/TopBar";
import "../global.css";
import SearchBar from "../../components/searchcomponent/SearchBar";

import ListingPageLayout from "../../components/layouts/ListingPageLayout";
import SinglePageListingContextApi from "../../contextApi/SinglePageListingContextApi";
import { AppContextProvider } from "../../contextApi/AppContextApi";

export default function PormotionalLayout({ children }) {
  return (
    <html lang="en">
      <body className="single_page_bodyLayout">
        <AppContextProvider>
          <SinglePageListingContextApi>
            <TopBar />
            <div>
              <NavBar />
            </div>

            <div>{children}</div>
          </SinglePageListingContextApi>
        </AppContextProvider>
      </body>
    </html>
  );
}
