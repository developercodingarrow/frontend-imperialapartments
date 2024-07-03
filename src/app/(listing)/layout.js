import React from "react";
import NavBar from "../../components/navbar/NavBar";
import TopBar from "../../components/topbar/TopBar";
import "../global.css";
import SearchBar from "../../components/searchcomponent/SearchBar";

import ListingPageLayout from "../../components/layouts/ListingPageLayout";
import { AppContextProvider } from "../../contextApi/AppContextApi";
import EnquireContextApi from "../../contextApi/enquireContextApi";

export default function ListingLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AppContextProvider>
          <EnquireContextApi>
            <TopBar />
            <NavBar />
            <div>
              <SearchBar />
            </div>
            <ListingPageLayout>{children}</ListingPageLayout>
          </EnquireContextApi>
        </AppContextProvider>
      </body>
    </html>
  );
}
