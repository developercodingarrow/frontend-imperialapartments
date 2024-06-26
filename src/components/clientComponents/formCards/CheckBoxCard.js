import React from "react";
import FormCardLayout from "./FormCardLayout";
import CheckBoxInput from "./CheckBoxInput";

export default function CheckBoxCard(props) {
  const { cardTitle } = props;

  return (
    <FormCardLayout cardTitle={cardTitle}>
      <CheckBoxInput />
    </FormCardLayout>
  );
}
