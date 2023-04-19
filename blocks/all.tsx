import Column, { ColumnProps } from "./Column";
import ResponsiveImage, { ResponsiveImageProps } from "./ResponsiveImage";

const components = {
  ResponsiveImage: (props) => {
    const {
      height,
      heightUnit,
      image,
      objectFit,
      priority,
      width,
      widthUnit,
      withBoxShadow,
    } = props as ResponsiveImageProps;
    return (
      <ResponsiveImage
        height={height}
        heightUnit={heightUnit}
        image={image}
        objectFit={objectFit}
        priority={priority}
        width={width}
        widthUnit={widthUnit}
        withBoxShadow={withBoxShadow}
      />
    );
  },
  Column: (props) => {
    const { columnOne, columnTwo, columnThree } = props;
    const columns: string[] = [];

    if (columnOne) {
      columns.push(columnOne);
    }
    if (columnTwo) {
      columns.push(columnTwo);
    }
    if (columnThree) {
      columns.push(columnThree);
    }

    return <Column columns={columns} />;
  },
};

export default components;
