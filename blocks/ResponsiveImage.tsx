import { HeightUnit, WidthUnit } from "../types/units";
import Image from "next/image";
import { StyleSheet } from "../types/other";

export type ResponsiveImageProps = {
  height: number;
  heightUnit?: HeightUnit;
  image: any;
  objectFit: NonNullable<JSX.IntrinsicElements["img"]["style"]>["objectFit"];
  priority?: boolean;
  width: number;
  widthUnit?: WidthUnit;
  withBoxShadow?: boolean;
};

const srcAlt = require("../public/uploads/joy.jpeg");

export default ({
  height,
  heightUnit,
  image,
  objectFit,
  priority,
  width,
  widthUnit,
  withBoxShadow,
}: ResponsiveImageProps): JSX.Element => {
  console.log("Image: ", image.default ? image : srcAlt, image)
  const img = image.default ? image : srcAlt;
  return (
    <div
      style={{
        ...styles.image,
        height: `${height}${heightUnit ? heightUnit : "px"}`,
        width: `${width}${widthUnit ? widthUnit : "px"}`,
      }}
    >
      <Image
        // TODO
        alt="IMAGE"
        src={img}
        objectFit={objectFit}
        priority
        fill
        sizes="100vw"
      />
    </div>
  )
};

const styles: StyleSheet = {
  image: {
    overflow: "hidden",
    position: "relative",
  },
  withBoxShadow: {
    boxShadow: "$box-shadow",
  },
};
