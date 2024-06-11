"use client";

import React, { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import TextInput from "../static-utils/elements/inputElement/TextInput";
import FormLink from "../components/authfrom/FormLink";

export default function useCustomeSimpleForm(formType) {
  const {
    handleSubmit,
    formState, // Include formState here
    control,
    watch,
    setValue,
  } = useForm({
    mode: "all",
  });

  const renderInput = (input) => {
    let InputComponent, specificProps;
    switch (input.type) {
      case "text":
        InputComponent = TextInput;
        specificProps = {
          inputplaceholder: input.placeholder,
          filed_container: "filedContainer",
        };

        break;

      case "email":
        InputComponent = TextInput;
        specificProps = {
          inputplaceholder: input.placeholder,
          filed_container: "filedContainer",
          inputType: input.type,
        };

        break;

      case "link":
        InputComponent = FormLink;
        specificProps = {
          text: input.name,
          linkPath: input.linkPath,
        };

        break;

      default:
        return null;
    }
    return (
      <Controller
        key={input.id}
        name={input.name}
        control={control}
        defaultValue=""
        rules={input.validation}
        render={({ field }) => (
          <>
            <InputComponent {...input} {...field} {...specificProps} />
          </>
        )}
      />
    );
  };
  return {
    handleSubmit,
    formState, // Ensure formState is included in the returned object
    control,
    watch,
    setValue,
    renderInput,
    isValid: formState.isValid, // Access isValid from formState
    errors: formState.errors,
  };
}
