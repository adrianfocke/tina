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
              name: "ResponsiveImage",
              label: "ResponsiveImage",
              ui: {
                defaultItem: {
                  image: "/uploads/muffin.jpg",
                  height: 200,
                  heightUnit: "px",
                  width: 200,
                  widthUnit: "px",
                  objectFit: "cover",
                },
              },
              fields: [
                {
                  name: "image",
                  label: "Background Image",
                  type: "image",
                },
                {
                  name: "height",
                  label: "Height",
                  type: "number",
                },
                {
                  name: "heightUnit",
                  label: "Height unit",
                  type: "string",
                  options: ["px", "%", "vh"],
                },
                {
                  name: "width",
                  label: "Width",
                  type: "number",
                },
                {
                  name: "widthUnit",
                  label: "Width unit",
                  type: "string",
                  options: ["px", "%", "vw"],
                },
                {
                  label: "Style",
                  name: "objectFit",
                  type: "string",
                  options: ["cover", "stretch"],
                },
              ],
            },
            {
              name: "Column",
              label: "Column",
              // TODO default ui
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
              ]
            }
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
