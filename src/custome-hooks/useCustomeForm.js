"use client";
import React, { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import TextInput from "../static-utils/elements/inputElement/TextInput";

export default function useCustomeForm(inputFileds, apiData) {
  const {
    handleSubmit,
    formState, // Include formState here
    control,
    watch,
    setValue,
  } = useForm({
    mode: "all",
  });

  useEffect(() => {
    // Set default values for fields included in userProfileInputs
    if (apiData) {
      Object.entries(apiData)
        .filter(([name]) => inputFileds.some((input) => input.name === name))
        .forEach(([name, value]) => {
          setValue(name, value);
        });
    }
  }, [apiData, setValue]);

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
