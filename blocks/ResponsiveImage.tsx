import { HeightUnit, WidthUnit } from "../types/units";
import Image from "next/image";
import { StyleSheet } from "../types/other";

export type ResponsiveImageProps = {
  height: number;
  heightUnit?: HeightUnit;
  image: string;
  objectFit: NonNullable<JSX.IntrinsicElements["img"]["style"]>["objectFit"];
  priority?: boolean;
  width: number;
  widthUnit?: WidthUnit;
  withBoxShadow?: boolean;
};

const src = require("../public/uploads/joy.jpeg");

// TODO alt

export default ({
  height,
  heightUnit,
  image,
  objectFit,
  priority,
  width,
  widthUnit,
  withBoxShadow,
}: ResponsiveImageProps): JSX.Element => (
  <div
    style={{
      ...styles.image,
      height: `${height}${heightUnit ? heightUnit : "px"}`,
      width: `${width}${widthUnit ? widthUnit : "px"}`,
    }}
  >
    <Image
      alt="IMAGE"
      // TODO remove src
      src={image ?? src}
      objectFit={objectFit}
      priority={priority}
      fill
      sizes="100vw"
    />
  </div>
);

const styles: StyleSheet = {
  image: {
    overflow: "hidden",
    position: "relative",
  },
  withBoxShadow: {
    boxShadow: "$box-shadow",
  },
};
