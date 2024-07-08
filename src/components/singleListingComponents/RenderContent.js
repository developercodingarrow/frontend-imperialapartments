"use client";
import React, { useContext } from "react";
import OverView from "./OverView";
import NearLocation from "./NearLocation";
import ContentTabContainer from "./ContentTabContainer";
import { SingleListingContext } from "../../contextApi/SinglePageListingContextApi";
import Amenities from "./Amenities";

export default function RenderContent() {
  const { activeTab, setActiveTab, handelListingTab } =
    useContext(SingleListingContext);

  const renderContent = () => {
    switch (activeTab) {
      case "overview":
        return (
          <div>
            <OverView />
          </div>
        );
      case "nearlocation":
        return (
          <div>
            <NearLocation />
          </div>
        );
      case "content":
        return (
          <div>
            <ContentTabContainer />
          </div>
        );
      case "amenities":
        return (
          <div>
            <Amenities />
          </div>
        );
      case "fandQ":
        return (
          <div>
            <p>Question naswears</p>
          </div>
        );
      default:
        return null;
    }
  };
  return (
    <div>
      <div>{renderContent()}</div>
    </div>
  );
}
