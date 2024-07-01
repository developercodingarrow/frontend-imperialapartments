"use client";

import React, { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import CardInput from "../components/clientComponents/formCards/CardInput";
import FormLink from "../components/authfrom/FormLink";
import CardTextArea from "../components/clientComponents/formCards/CardTextArea";
import SelectorInput from "../components/clientComponents/formCards/SelectorInput";
import CheckBoxInput from "../components/clientComponents/formCards/CheckBoxInput";
import ChipInput from "../components/clientComponents/formCards/ChipInput";

export function useCustomApiForm(apiData = {}) {
  const { handleSubmit, formState, control, watch, setValue } = useForm({
    mode: "all",
    defaultValues: apiData,
  });

  useEffect(() => {
    // Set default values when apiData changes
    if (apiData) {
      Object.entries(apiData).forEach(([name, value]) => {
        setValue(name, value);
      });
    }
  }, [apiData, setValue]);

  const renderInput = (input, dynamicData) => {
    let InputComponent, specificProps;
    let defaultValues = apiData[input.name];
    switch (input.type) {
      case "text":
        InputComponent = CardInput;
        specificProps = {
          inputplaceholder: input.placeholder,
          filed_container: "filedContainer",
          defaultValue: defaultValues || "",
        };
        break;
      case "textarea":
        InputComponent = CardTextArea;
        specificProps = {
          text: input.name,
          linkPath: input.linkPath,
          defaultValue: defaultValues || "",
        };
        break;
      case "select":
        InputComponent = SelectorInput;
        specificProps = {
          selectOptions: input.options || [],
          inputLabel: input.label,
          lableStyle: "lable_style",
          inputContainer: "block_container",
        };
        break;
      case "static_selector":
        InputComponent = SelectorInput;
        specificProps = {
          selectorOptions: input.options || [],
          inputLabel: input.label,
          lableStyle: "lable_style",
          inputContainer: "block_container",
          defaultSelected: input.slectedValue || "select",
        };
        break;
      case "apiSelectList":
        InputComponent = SelectorInput;
        specificProps = {
          selectOptions: dynamicData.map((item) => item[input.name]) || [
            "create data for this filed",
          ],
          inputLabel: input.label,
          lableStyle: "lable_style",
          inputContainer: "block_container",
        };
        break;
      case "chip":
        InputComponent = ChipInput;
        specificProps = {
          chipoptions: apiData[input.name],
          inputLabel: input.label,
          lableStyle: "lable_style",
          inputContainer: "block_container",
        };
        break;
      case "checkbox":
        InputComponent = CheckBoxInput;
        specificProps = {
          checkBoxOptions: dynamicData,
          inputLabel: input.label,
          onChange: (selectedOptions) => setValue(input.name, selectedOptions), // Update the form value
          defaultValue: defaultValues || [],
          checkBoxStyle: "inLine_customCheckbox_wrapper",
          checkBoxContainerStyle: "inLine_checkBox_container",
          valueKey: input.blogCategories,
        };
        break;
      //   case "radio":
      //     InputComponent = RadioElement;
      //     specificProps = {
      //       radioOptions: input.options || [],
      //       onChange: (selectedOption) => setValue(input.name, selectedOption), // Update the form value
      //       selectedOption: watch(input.name),
      //       inputLabel: input.label,
      //       lableStyle: "lable_style",
      //       inputContainer: "inlineRadio_container",
      //       defaultValue: defaultValues || "",
      //       radiostyle: "inlineRadio_container",
      //       radioTitleGap: "title_rowGap",
      //       radio_textgap: "radio_btn_textGap",
      //       radioOptionBox: "inline_radioOptionBox",
      //     };
      //     break;

      default:
        return null;
    }
    return (
      <Controller
        key={input.id}
        name={input.name}
        control={control}
        defaultValue={apiData[input.name]}
        rules={input.validation}
        render={({ field }) => (
          <InputComponent {...input} {...field} {...specificProps} />
        )}
      />
    );
  };

  return {
    handleSubmit,
    formState,
    control,
    watch,
    setValue,
    renderInput,
  };
}
