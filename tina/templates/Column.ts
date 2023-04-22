import { Template } from "tinacms";
// TODO makes sense?
import { Button } from "./index";

export const Column: Template = {
  label: "Column",
  name: "Column",
  fields: [
    {
      label: "Column One",
      name: "columnOne",
      templates: [Button],
      type: "rich-text",
    },
    {
      label: "Column Two",
      name: "columnTwo",
      templates: [Button],
      type: "rich-text",
    },
    {
      label: "Column Three",
      name: "columnThree",
      templates: [Button],
      type: "rich-text",
    },
  ],
};