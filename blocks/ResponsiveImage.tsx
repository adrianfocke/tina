import React from "react";
import Image from "next/image";
import styles from "./ResponsiveImage.module.scss";
import { HeightUnit, WidthUnit } from "../types/units";

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

export default ({
  height,
  heightUnit,
  image,
  objectFit,
  priority,
  width,
  widthUnit,
  withBoxShadow,
}: ResponsiveImageProps) => (
  <p>AAA</p>
  // <div
  //   className={`${styles.image} ${withBoxShadow && styles.withBoxShadow}`}
  //   style={{
  //     height: `${height}${heightUnit}`,
  //     width: `${width}${widthUnit}`,
  //   }}
  // >
  //   <Image src={""} layout="fill" objectFit={objectFit} priority={priority} />
  // </div>
);