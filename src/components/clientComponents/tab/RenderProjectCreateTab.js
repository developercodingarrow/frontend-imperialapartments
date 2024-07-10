"use client";
import React, { useContext } from "react";
import { SingleListingContext } from "../../../contextApi/SinglePageListingContextApi";
import BasicInfo from "./BasicInfo";
import ProjectOverView from "./ProjectOverView";
import ProjectContent from "./ProjectContent";
import AccordionItem from "./Accordion";
import { projectFaq } from "../../../JsonData/projectdata";
import AccordionForm from "./AccordionForm";
import ProjectImageUploader from "./ProjectImageUploader";

export default function RenderProjectCreateTab() {
  const { activeTab, setActiveTab, handelListingTab } =
    useContext(SingleListingContext);

  const renderContent = () => {
    switch (activeTab) {
      case "BasicInfo":
        return (
          <div>
            <BasicInfo />
          </div>
        );
      case "OverView":
        return (
          <div>
            <ProjectOverView />
          </div>
        );

      case "Images":
        return (
          <div>
            <ProjectImageUploader />
          </div>
        );

      case "content":
        return (
          <div>
            <ProjectContent />
          </div>
        );

      case "fandQ":
        return (
          <div>
            <AccordionForm />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      {" "}
      <div>{renderContent()}</div>{" "}
    </div>
  );
}
