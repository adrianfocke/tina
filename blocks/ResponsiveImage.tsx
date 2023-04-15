import { HeightUnit, WidthUnit } from "../types/units";
import Image from "next/image";
import styles from "./ResponsiveImage.module.scss";

const muffin = require("../public/uploads/muffin.jpg");

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
}: ResponsiveImageProps) => {
  console.log("ResponsiveImage: ", height, image,);
  return (
    <div
      className={`${styles.image} ${withBoxShadow && styles.withBoxShadow}`}
      style={{
        height: `${height}${heightUnit}`,
        width: `${width}${widthUnit}`,
        border: "1px solid red"
      }}
    >
      <Image
        src={muffin}
        layout="fill"
        objectFit={objectFit}
        priority={priority}
      />
    </div>
  );
};
