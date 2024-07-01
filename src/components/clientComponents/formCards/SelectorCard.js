import React from "react";
import FormCardLayout from "./FormCardLayout";
import SelectorInput from "./SelectorInput";
import { postTypeOption } from "../../../JsonData/projectdata";

export default function SelectorCard(props) {
  const { cardTitle } = props;
  return (
    <FormCardLayout cardTitle={cardTitle}>
      {/* <SelectorInput selectorOptions={postTypeOption} /> */}
    </FormCardLayout>
  );
}
