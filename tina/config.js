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
          templates: [
            {
              name: "Callout",
              label: "Callout",
              ui: {
                defaultItem: {
                  text: "Lorem ipsum dolor sit amet.",
                },
              },
              fields: [
                {
                  name: "text",
                  label: "Text",
                  type: "string",
                },
              ],
            },
            // {
            //   label: "Image",
            //   name: "Image",
            //   type: "object",
            //   fields: [
            //     {
            //       label: "Image name",
            //       name: "image",
            //       type: "string",
            //     },
            //     {
            //       label: "Height",
            //       name: "height",
            //       type: "number",
            //     },
            //     {
            //       label: "Height unit",
            //       name: "heightUnit",
            //       type: "string",
            //       options: ["px", "%", "vh"],
            //     },
            //     {
            //       label: "Width",
            //       name: "width",
            //       type: "number",
            //     },
            //     {
            //       label: "Width unit",
            //       name: "widthUnit",
            //       type: "string",
            //       options: ["px", "%", "vw"],
            //     },
            //     {
            //       label: "Style",
            //       name: "objectFit",
            //       type: "string",
            //       options: ["cover", "stretch"],
            //     },
            //   ],
            // },
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
              name: "Callout",
              label: "Callout",
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
