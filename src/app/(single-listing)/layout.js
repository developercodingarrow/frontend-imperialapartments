import React from "react";
import NavBar from "../../components/navbar/NavBar";
import TopBar from "../../components/topbar/TopBar";
import "../global.css";
import SearchBar from "../../components/searchcomponent/SearchBar";

import ListingPageLayout from "../../components/layouts/ListingPageLayout";
import SinglePageListingContextApi from "../../contextApi/SinglePageListingContextApi";

export default function SingleListingLayout({ children }) {
  return (
    <html lang="en">
      <body className="single_page_bodyLayout">
        <SinglePageListingContextApi>
          <TopBar />
          <div>
            <NavBar />
          </div>

          <div>{children}</div>
        </SinglePageListingContextApi>
      </body>
    </html>
  );
}
