import type { Template } from "tinacms";

export const ResponsiveImage: Template = {
  label: "ResponsiveImage",
  name: "ResponsiveImage",
  ui: {
    defaultItem: {
      height: 200,
      heightUnit: "px",
      image: "/uploads/muffin.jpg",
      objectFit: "cover",
      width: 200,
      widthUnit: "px",
      withBoxShadow: false,
    },
  },
  fields: [
    {
      label: "Background Image",
      name: "image",
      type: "image",
    },
    {
      label: "Height",
      name: "height",
      type: "number",
    },
    {
      label: "Height unit",
      name: "heightUnit",
      options: ["px", "%", "vh"],
      type: "string",
    },
    {
      label: "Width",
      name: "width",
      type: "number",
    },
    {
      label: "Width unit",
      name: "widthUnit",
      options: ["px", "%", "vw"],
      type: "string",
    },
    {
      label: "Style",
      name: "objectFit",
      options: ["cover", "contain"],
      type: "string",
    },
    {
      label: "Shadow",
      name: "withBoxShadow",
      type: "boolean",
    },
  ],
};
