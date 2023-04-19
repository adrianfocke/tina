import { defineConfig, defineSchema } from "tinacms";

const schema = defineSchema({
  collections: [
    {
      label: "Page Content",
      name: "page",
      path: "content/page",
      format: "mdx",
      fields: [
        {
          name: "body",
          label: "Body",
          type: "rich-text",
          isBody: true,
          templates: [
            {
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
            },
            {
              label: "Column",
              name: "Column",
              fields: [
                {
                  label: "Column One",
                  name: "columnOne",
                  type: "rich-text",
                },
                {
                  label: "Column Two",
                  name: "columnTwo",
                  type: "rich-text",
                },
                {
                  label: "Column Three",
                  name: "columnThree",
                  type: "rich-text",
                },
              ],
            },
          ],
        },
      ],
      ui: {
        router: ({ document }) => {
          if (document._sys.filename === "home") {
            return `/`;
          }
          return undefined;
        },
      },
    },
    {
      label: "Blog Posts",
      name: "post",
      path: "content/post",
      fields: [
        {
          type: "string",
          label: "Title",
          name: "title",
        },
        {
          type: "rich-text",
          label: "Blog Post Body",
          name: "body",
          isBody: true,
          templates: [
            {
              name: "ResponsiveImage",
              label: "ResponsiveImage",
              fields: [
                {
                  name: "message",
                  label: "Message",
                  type: "string",
                },
              ],
            },
          ],
        },
      ],
      ui: {
        router: ({ document }) => {
          return `/posts/${document._sys.filename}`;
        },
      },
    },
  ],
});

export const config = defineConfig({
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  branch:
    process.env.NEXT_PUBLIC_TINA_BRANCH || // custom branch env override
    process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF || // Vercel branch env
    process.env.HEAD, // Netlify branch env
  token: process.env.TINA_TOKEN,
  media: {
    // If you wanted cloudinary do this
    // loadCustomStore: async () => {
    //   const pack = await import("next-tinacms-cloudinary");
    //   return pack.TinaCloudCloudinaryMediaStore;
    // },
    // this is the config for the tina cloud media store
    tina: {
      publicFolder: "public",
      mediaRoot: "uploads",
    },
  },
  build: {
    publicFolder: "public", // The public asset folder for your framework
    outputFolder: "admin", // within the public folder
  },
  schema,
});

export default config;
