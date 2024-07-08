"use client";
import React, { useContext } from "react";
import "../global.css";

import AdminContextProvider from "../../contextApi/AdminContextApi";
import DashBordContextApi from "../../contextApi/DashBordContextApi";
import AdminDashBordLayout from "../../components/clientComponents/layouts/AdminDashBordLayout";
import { BlogCategoriesContextProvider } from "../../contextApi/BlogCategoriesContextApi";
import { AppContextProvider } from "../../contextApi/AppContextApi";
import BlogContextApiProvider from "../../contextApi/BlogContextApi";
import ImageHandlersContextApi from "../../contextApi/ImageHandlersContextApi";
import EnquireContextApi from "../../contextApi/enquireContextApi";
import UserContextApi from "../../contextApi/UserContextApi";
import SinglePageListingContextApi from "../../contextApi/SinglePageListingContextApi";
import ProjectContextApi from "../../contextApi/ProjectContextApi";
import { RoomTypeContextProvider } from "../../contextApi/RoomTypeContextApi";

export default function AdminLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AppContextProvider>
          <AdminContextProvider>
            <BlogCategoriesContextProvider>
              <BlogContextApiProvider>
                <ImageHandlersContextApi>
                  <EnquireContextApi>
                    <UserContextApi>
                      <SinglePageListingContextApi>
                        <ProjectContextApi>
                          <RoomTypeContextProvider>
                            <DashBordContextApi>{children}</DashBordContextApi>
                          </RoomTypeContextProvider>
                        </ProjectContextApi>
                      </SinglePageListingContextApi>
                    </UserContextApi>
                  </EnquireContextApi>
                </ImageHandlersContextApi>
              </BlogContextApiProvider>
            </BlogCategoriesContextProvider>
          </AdminContextProvider>
        </AppContextProvider>
      </body>
    </html>
  );
}
