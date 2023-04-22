import { Template } from "tinacms";

export const Button: Template = {
  label: "Button",
  name: "Button",
  ui: {
    defaultItem: {
      label: "AAA",
      icon: {
        name: "openInNewTab",
        position: "right",
      }
    },
  },
  fields: [
    {
      label: "Label",
      name: "label",
      type: "string",
    },
    {
      label: "URL",
      name: "url",
      type: "string",
    },
    {
      label: "Icon",
      name: "icon",
      type: "object",
      fields: [
        {
          label: "Name",
          name: "name",
          type: "string",
          options: ["A", "B"],
        },
        {
          label: "Position",
          name: "position",
          type: "string",
          options: ["left", "right"],
        },
      ],
    },
  ],
};