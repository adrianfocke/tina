import { TinaMarkdown } from "tinacms/dist/rich-text";
import { Layout } from "../components/Layout";
import { useTina } from "tinacms/dist/react";
import { client } from "../tina/__generated__/client";
import Callout, { CalloutProps } from "../blocks/Callout";
import ResponsiveImage from "../blocks/ResponsiveImage";

export default function Home(props) {
  // data passes though in production mode and data is updated to the sidebar data in edit-mode
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  const components = {
    Callout: (props) => {
      const { text } = props as CalloutProps;
      return <Callout text={text} />;
    },
    // ResponsiveImage: (props) => {
    //   const {
    //     height,
    //     heightUnit,
    //     image,
    //     objectFit,
    //     priority,
    //     width,
    //     widthUnit,
    //     withBoxShadow,
    //   } = props as ResponsiveImageProps;
    //   return (
    //     <ResponsiveImage
    //       height={height}
    //       heightUnit={heightUnit}
    //       image={image}
    //       objectFit={objectFit}
    //       priority={priority}
    //       width={width}
    //       widthUnit={widthUnit}
    //       withBoxShadow={withBoxShadow}
    //     />
    //   );
    // },
  };

  const content = data.page.body;
  return (
    <Layout>
      <TinaMarkdown content={content} components={components} />
    </Layout>
  );
}

export const getStaticProps = async () => {
  const { data, query, variables } = await client.queries.page({
    relativePath: "home.mdx",
  });

  return {
    props: {
      data,
      query,
      variables,
      //myOtherProp: 'some-other-data',
    },
  };
};
