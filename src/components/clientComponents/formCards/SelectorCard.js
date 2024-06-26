import React from "react";
import FormCardLayout from "./FormCardLayout";
import SelectorInput from "./SelectorInput";

export default function SelectorCard(props) {
  const { cardTitle } = props;
  return (
    <FormCardLayout cardTitle={cardTitle}>
      <SelectorInput />
    </FormCardLayout>
  );
}
