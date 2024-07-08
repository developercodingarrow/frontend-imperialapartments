import React from "react";
import NavBar from "../../components/navbar/NavBar";
import TopBar from "../../components/topbar/TopBar";
import "../global.css";
import SearchBar from "../../components/searchcomponent/SearchBar";

import ListingPageLayout from "../../components/layouts/ListingPageLayout";
import { AppContextProvider } from "../../contextApi/AppContextApi";
import EnquireContextApi from "../../contextApi/enquireContextApi";
import { RoomTypeContextProvider } from "../../contextApi/RoomTypeContextApi";
import AppDrawerWrapper from "../../components/homepagesections/AppDrawerWrapper";

export default function ListingLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AppContextProvider>
          <EnquireContextApi>
            <RoomTypeContextProvider>
              <TopBar />
              <NavBar />
              <AppDrawerWrapper />
              <div>
                <SearchBar />
              </div>
              <ListingPageLayout>{children}</ListingPageLayout>
            </RoomTypeContextProvider>
          </EnquireContextApi>
        </AppContextProvider>
      </body>
    </html>
  );
}
