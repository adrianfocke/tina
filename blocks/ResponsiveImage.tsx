import { HeightUnit, WidthUnit } from "../types/units";
import Image from "next/image";
import styles from "./ResponsiveImage.module.scss";

export type ResponsiveImageProps = {
  height: number;
  heightUnit: HeightUnit;
  image: string;
  objectFit: NonNullable<JSX.IntrinsicElements["img"]["style"]>["objectFit"];
  priority?: boolean;
  width: number;
  widthUnit: WidthUnit;
  withBoxShadow?: boolean;
};

const src = require("../public/uploads/joy.jpeg")

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
    className={`${styles.image} ${withBoxShadow && styles.withBoxShadow}`}
    style={{
      height: `${height}${heightUnit}`,
      width: `${width}${widthUnit}`,
    }}
  >
    <Image alt="IMAGE" src={src} objectFit={objectFit} priority={priority} fill sizes="100vw" />
  </div>
);
